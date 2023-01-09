<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function guard()
    {
        return Auth::guard('api');
    }

    public function getFiles(Request $request)
    {

        $success = 0;
        $files = Files::query();


        if (isset($request->file_type) && $request->file_type != 'all') {
            if (($request->file_type) == 'kavax-upload') {
                $files = $files->where('uploaded_by_admin', true);
            } else {

                $files = $files->where('file_type', $request->file_type);
            }
        }
        $files = $files->where('user_id', $this->guard()->user()->id)->get();

        $counts = array();
        $counts['image'] = Files::where('file_type', 'image')->where('user_id', $this->guard()->user()->id)->count();
        $counts['file'] = Files::where('file_type', 'file')->where('user_id', $this->guard()->user()->id)->count();
        $counts['link'] = Files::where('file_type', 'link')->where('user_id', $this->guard()->user()->id)->count();
        $counts['kavax'] = Files::where('file_type', 'kavax-upload')->where('user_id', $this->guard()->user()->id)
            ->where('uploaded_by_admin', 1)->count();

        if ($files) {
            $success = 1;
        }

        return response()->json(['success' => $success, 'files' => $files, 'counts' => $counts], 200);
    }


    public function files($file_data, $foreign_key, $token)
    {
        $flag = 1;
        while ($flag == 1) {
            if (is_array($file_data)) {
                foreach ($file_data as $key) {
                    $files = new Files();
                    $file = $key;
                    $file_value = time() . '.' . $file->getClientOriginalExtension();
                    $key->move('files_directory', $file_value);
                    $files->file_name = $file_value;
                    $extension = $key->getClientOriginalExtension();
                    // $this->filterFileExtension($extension);
                    $files->file_type = $this->filterFileExtension($extension);
                    if ($token == "messaging") {
                        $files->msg_id = $foreign_key;
                    } elseif ($token == "tst_message") {
                        $files->tst_msg_id = $foreign_key;
                    } elseif ($token == "project_id") {
                        $files->project_id = $foreign_key;
                    } elseif ($token == "tst_id") {
                        $files->tst_id = $foreign_key;
                    } elseif ($token == "payment_id") {
                        $files->payment_id = $foreign_key;
                    } else {
                        return "Invalid";
                    }
                    $files->user_id = $this->guard()->user()->id;
                    $files->save();
                }
            } else {
                $files = new Files();
                $file = $file_data;
                $file_value = time() . '.' . $file->getClientOriginalExtension();
                $file_data->move('files_directory', $file_value);
                $files->file_name = $file_value;
                $extension = $file_data->getClientOriginalExtension();
                // $this->filterFileExtension($extension);
                $files->file_type = $this->filterFileExtension($extension);
                if ($token == "messaging") {
                    $files->msg_id = $foreign_key;
                } elseif ($token == "tst_message") {
                    $files->tst_msg_id = $foreign_key;
                } elseif ($token == "project_id") {
                    $files->project_id = $foreign_key;
                } elseif ($token == "tst_id") {
                    $files->tst_id = $foreign_key;
                } elseif ($token == "payment_id") {
                    $files->payment_id = $foreign_key;
                } else {
                    return "Invalid";
                }
                $files->user_id = $this->guard()->user()->id;
                $files->save();
            }
            $flag = 0;
        }
    }

    public function filterFileExtension($extension)
    {
        if ($extension == 'rar' || $extension == 'zip' || $extension == 'doc' || $extension == 'pdf' || $extension == 'csv' || $extension == 'ppt' || $extension == 'odt' || $extension == 'cpp' || $extension == 'py' || $extension == 'html' || $extension == 'css' || $extension == 'txt') {
            $extension = 'file';
        } else if ($extension == 'png' || $extension == 'jpg' || $extension == 'jpeg' || $extension == 'gif' || $extension == 'svg') {
            $extension = 'image';
        } else {
            $extension = 'other';
        }
        return $extension;
    }

    public function insertLinks($link_msg, $key, $id)
    {
        $regex = '#\bhttps?://[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|/))#';
        preg_match_all($regex, $link_msg, $matches);
        // return $matches;
        foreach ($matches[0] as $match) {
            $files = new Files();
            $files->user_id = $this->guard()->user()->id;
            $files->file_name = $match;
            $files->file_type = 'link';
            if ($key == 'msg_id') {
                $files->msg_id = $id;
            } else if ($key == 'tst_msg_id') {
                $files->tst_msg_id = $id;
            }
            $files->save();
        }
    }

    public function uploadFile(Request $request)
    {

        try {
            if ($request->hasFile('file')) {

                $fileObj = new Files();
                $file = $request->file('file');

                $file_value = time() . '.' . $file->getClientOriginalExtension();
                $file->move('files_directory', $file_value);
                $fileObj->file_name = $file_value;
                $extension = $file->getClientOriginalExtension();
                // $this->filterFileExtension($extension);
                $fileObj->file_type = $this->filterFileExtension($extension);
                $fileObj->user_id = $this->guard()->user()->id;
                $fileObj->save();
            }
            return response()->json(["success" => 1], 200);
        } catch (\Exception $ex) {
            return response()->json(['success' => 0, 'message' => $ex->getMessage()], 200);
        }
    }
}
