<?php

namespace App\Http\Controllers;

use App\Model\MailSetting;
use Illuminate\Http\Request;
use App\Models\Collaborator;
use App\Models\Message;
use App\Models\Category;
use App\Models\ProjectCategory;
use App\Models\Payment_list;
use App\Models\Project;
use App\Models\Support_ticket;
use App\Models\SupportMessage;
use App\Models\T_S_Ticket;
use App\Models\User;
use App\Models\ProjectTask;
use Illuminate\Support\Facades\Auth;
use App\Notifications\SendMail;
use Illuminate\Support\Facades\Mail;
use App\Events\SendMessageToAdmin;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function guard()
    {
        return Auth::guard('api');
    }

    public function createProject(Request $request)
    {
        $userData = $this->guard()->user()->id;
        $success = 0;
        $data = new Project();
        // dd($data);
        $data->created_by = $this->guard()->user()->id;
        // $data->category = $request->category;
        $data->business_name = $request->name;
        $data->objective = $request->objective;
        $data->budget = $request->budget;
        $data->name = $request->project_name;
        $data->employee_size = $request->employee_size;
        $data->save();

        $cat = [];
        foreach (json_decode($request->category) as $catData) {
            $findCat = Category::find($catData);
            $cat[] = $findCat->name;
        }

        foreach (json_decode($request->category) as $category_id) {
            $projectCategory = new ProjectCategory();
            $projectCategory->category_id = $category_id;
            $projectCategory->project_id = $data->id;
            $projectCategory->save();
        }

        $this->sendMail($userData, $cat, $data);

        $project = Project::with('categories')->with('tasks')->where("created_by", "=", $this->guard()->user()->id)->where('id', $data->id)->first();

        if ($data) {
            $success = 1;
            $message = "Success!";
        } else {
            $message = "Not Found!";
        }

        return response()->json(['success' => $success, 'message' => $message, 'project' => $project], 200);
    }


    public function sendMail($userData, $cat, $data)
    {
        $rawData = implode(' , ', $cat);
        $findUser = User::find($userData);
        Log::info($rawData);


        try{
            Mail::to($findUser->email)->send(new SendMail(
                $findUser->fullName,
                "New Project Created",
                "Thanks for choosing Kavax Media. You've just taken an exciting step in your business " .
                "journey, and we're so glad to be a part of it. <br/>" .

                "You've chosen our $rawData service/services. We " .
                "aim to respond within 24 hours.<br/><br/>" .

                "Meanwhile, please feel free to check out our client dashboard at " .
                "www.kavax.co.uk/dashboard where you can ask us any question and get updates on " .
                "your project. <br/><br/>" .

                "Kind regards <br/>" .
                "Kavax Team"
            ));
        }
        catch(\Exception $e){
            // Never reached
        }

        try{
            $findEmail = MailSetting::first();
            Mail::to($findEmail->mail_to)->send(new SendMail(
                "Hello Team",
                "Glad to inform you that $findUser->fullName has chosen our service",
                "For $rawData".
                "Login here for more information: <br/>" .
                "https://www.kavax.co.uk/<br/><br/>" .
                "Best regards,<br/>" .
                "Kavax Family"
            ));
        } catch(\Exception $e){
            // Never reached
        }

        return true;
    }



    public function getProjects(Request $request)
    {

        $success = 0;
        $opnedProjects = Project::with('categories')->with('tasks')->where("created_by", "=", $this->guard()->user()->id)->where('status', '!=', 3)->orderBy('id', 'desc')->get();
        $closedProjects = Project::with('categories')->where("created_by", "=", $this->guard()->user()->id)->where('status', 3)->orderBy('id', 'desc')->get();
        if ($opnedProjects || $closedProjects) {
            $success = 1;
            $message = "Data found";
        } else {
            $message = "No Data Found!";
        }

        return response()->json(['success' => $success, 'message' => $message, 'projects' => ['opened' => $opnedProjects, 'closed' => $closedProjects]], 200);
    }

    public function getProject(Request $request)
    {

        $success = 0;
        $opnedProjects = Project::where("userID", "=", $this->guard()->user()->id)->where('status', 'Opened')->get();
        $closedProjects = Project::where("userID", "=", $this->guard()->user()->id)->where('status', 'Closed')->get();
        if ($opnedProjects || $closedProjects) {
            $success = 1;
            $message = "Data found";
        } else {
            $message = "No Data Found!";
        }

        return response()->json(['success' => $success, 'message' => $message, 'projects' => ['opened' => $opnedProjects, 'closed' => $closedProjects]], 200);
    }




    public function getCategories()
    {
        $categories = Category::all();

        return response()->json(['categories' => $categories], 200);
    }

    public function getTasks(Request $request, $project_id, $category_id)
    {
        $success = 0;

        $tasks = ProjectTask::with('user')->where('project_id', $project_id)->where('category', $category_id)->get();
        if ($tasks) {
            $success = 1;
            return response()->json(['success' => $success, 'tasks' => $tasks], 200);
        } else {
            return response()->json(['success' => $success], 200);
        }
    }


    public function sendProjectMessage(Request $request)
    {
        $success = 0;

        $newMessage = new SupportMessage();
        $newMessage->message = $request->message;
        $newMessage->user_id = $this->guard()->user()->id;
        $newMessage->project_id = $request->project_id;
        $newMessage->save();
        $newMessage->user->fullName = $this->guard()->user()->fullName;

        $fileController = new FileController();
        if ($request->hasFile('files')) {
            $files = $request->file('files');
            $fileController->files($files, $newMessage->msg_id, 'messaging');
        }

        if (isset($request->link) && $request->link) {
            $fileController->insertLinks($request->link_msg, 'msg_id', $newMessage->msg_id);
        }
        // $newMessage->msg_id  = $newMessage->id;

        if ($newMessage) {
            $success = 1;
            $message = "Data found";
        } else {
            $message = "No Data Found!";
        }
        $token = "SupportMessage";

        event(new SendMessageToAdmin([
            'project_id' => $request->project_id,
            'message' => isset($request->message) ? $request->message : null,
            'replied_by' => $this->guard()->user()->fullName,
            'file' => $request->hasFile('files') ? url('api/files_directory/' . $newMessage->file->file_name) : null,
            'created_at' => $newMessage->created_at
        ]));

        return response()->json(['success' => $success, 'message' => $message, 'newMessage' => $newMessage], 200);
    }



    public function getProjectMessages(Request $request, $project_id)
    {
        $success = 0;
        $show_messages = SupportMessage::with('file')->with('user')->with('repliedBy')->where("project_id", "=", "$project_id")->get();

        if (!$show_messages->isEmpty()) {
            $success = 1;
            $message = "Data found";
        } else {
            $message = "No Data Found!";
        }
        return response()->json(['success' => $success, 'message' => $message, 'messages' => $show_messages], 200);
    }
}
