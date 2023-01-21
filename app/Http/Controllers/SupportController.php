<?php

namespace App\Http\Controllers;

use App\Model\MailSetting;
use Illuminate\Http\Request;
use App\Models\T_S_Ticket;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use App\Models\Files;
use App\Models\User;
use App\Notifications\SendMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SupportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function guard()
    {
        return Auth::guard('api');
    }
    public function getSupportTickets(Request $request)
    {
        $success = 0;
        $sTickets = T_S_Ticket::where("userID", "=", $this->guard()->user()->id)->get();
        if ($sTickets) {
            $success = 1;
            $message = "Data found";
        } else {
            $message = "No Data Found!";
        }
        return response()->json(['success' => $success, 'message' => $message, 'supportTickets' => $sTickets], 200);
        // return view("customer.t_s_tickets_show");

    }

    public function createTsTicket(Request $request)
    {
        $success = 0;
        $conversation = new T_S_Ticket();

        $conversation->ticket_title = $request->title;
        $conversation->userID = Auth::guard()->user()->id;
        $conversation->save();
        $conversation->id;
        $messaging = new Message();
        $messaging->message = $request->message;
        $messaging->stFiles = $request->stFiles;
        $messaging->userID = Auth::guard()->user()->id;
        $messaging->tstID = $conversation->id;
        $messaging->save();
        $this->sendMail($conversation);
        $this->sendMailToAdmin($conversation);
        if ($conversation && $messaging) {
            $success = 1;
            $message = "Ticket Created";
        } else {
            $message = "Not Found!";
        }
        return response()->json(['conversation' => $conversation, 'messaging' => $messaging, 'success' => $success, 'message' => $message], 200);
    }


    public function sendMail($data)
    {
        $findUser = User::find($data->userID);
        Log::info($data->id);
        try{
            Mail::to($findUser->email)->send(new SendMail(
                "$findUser->fullName",
                "Support Ticket at Kavax",
                "Thank you for reaching out to us. We are working on your issue ($data->id) and will " .
                "get back to you soon. Please let us know if you have any more questions. We will be " .
                "happy to help.<br/><br/>" .

                "Kind regards,<br/>" .
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
                "We have just received a support ticket from $findUser->fullName",
                "For $data->id".
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

    public function sendMailToAdmin($data)
    {
        $findEmail = MailSetting::first();
        $findUser = User::find($data->userID);
        Log::info($data->id);
        try{
            Mail::to($findEmail->mail_to)->send(new SendMail(
                " Team",
                "New Support Ticket",
                "We have just received a support ticket $data->id from $findUser->fullName\n" .
                "For $data->ticket_title. " .
                "Login here for more information: \n" .

                "https://www.kavax.co.uk/\n" .

                "Best regards,\n" .

                "Kavax Family"
            ));
        }
        catch(\Exception $e){
            // Never reached
        }

        return true;
    }



    public function sendSupportTicketMessage(Request $request)
    {
        $success = 0;
        log::info($request);

        // $existMessage = Message::where("tstID", "$tstID")->get();
        $newMessage = new Message();
        $newMessage->message = $request->message;
        // $newMessage->stFiles = $request->stFiles;
        $newMessage->userID = $this->guard()->user()->id;
        $newMessage->tstID = $request->tstID;
        $newMessage->save();

        $fileController = new FileController();
        if (($request->hasFile('stFiles'))) {
            $files = $request->file('stFiles');
            $fileController->files($files, $newMessage->msgID, 'tst_message');
        }

        if (isset($request->link) && $request->link) {
            $fileController->insertLinks($request->link_msg, 'tst_msg_id', $newMessage->msgID);
        }
        $newMessage = Message::with('files')->find($newMessage->msgID);
        if ($newMessage) {
            $success = 1;
            $message = "Message Send";
            $newMessage->user = $this->guard()->user();
        } else {
            $message = "No Message Found!";
        }
        return response()->json(['success' => $success, 'message' => $message, 'newMessage' => $newMessage], 200);
    }


    public function getSupportMessages($ticket_id)
    {

        $success = 0;
        $messages = Message::with("files")->where("tstID", $ticket_id)->with('user')->get();
        $ticket_status = T_S_Ticket::find($ticket_id)->status;

        if ($messages) {
            $success = 1;
        }

        return response()->json(['success' => $success, 'messages' => $messages, 'status' => $ticket_status], 200);
    }

    public function updateTicketStatus(Request $request)
    {

        try {
            $tstTicket = T_S_Ticket::find($request->tstID);
            if ($tstTicket) {
                $tstTicket->status = $request->status;
                $tstTicket->save();
            }
            $this->ticketCloseMail($tstTicket);
            return response()->json(['success' => 1], 200);
        } catch (\Exception $e) {

            return response()->json(['success' => 0, 'messages' => $tstTicket], 200);
        }
    }

    public function ticketCloseMail($data)
    {
        $findUser = User::find($data->userID);
        try{
            Mail::to($data->email)->send(new SendMail(
                "$findUser->FullName,",
                "Ticket Closed",
                "Your issue ($data->id) is resolved. We are closing the ticket now. If there is anything \n" .
                "else you need help with, feel free to reply to this email or call us at 020 3488 3233. \n" .
                "We will be happy to help. \n" .

                "Kind regards,\n" .
                "Kavax Team"
            ));
        }
        catch(\Exception $e){
            // Never reached
        }
    }
}
