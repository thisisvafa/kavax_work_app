<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Notifications\SendMail;
use Illuminate\Support\Facades\Mail;
use App\Model\MailSetting;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{

    public function register(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email|unique:users',
        ]);

        $user = new User();
        $user->fullName = $request->fullName;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = bcrypt($request->password);
        $user->role = 'customer';
        $user->save();


        try{
            Mail::to($user->email)->send(new SendMail(
                $user->fullName,
                "Welcome to Kavax",
                "Welcome to Kavax!,<br/>
            Thank you for registering with us. We are looking forward to welcoming you to Kavax Media.<br/><br/>" .
                "Click the link below to visit your dashboard, where you can create a new project and book a free consultation. <br/><br/>
            We’re thrilled to see you there!<br/><br/>" .

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
                " Team",
                "New Client Registration",
                "Glad to inform you that $user->fullName has registered with us." .
                "Login here for more information: <br/>" .
                "https://www.kavax.co.uk/<br/><br/>" .
                "Best regards,<br/>" .
                "Kavax Family"
            ));
        }
        catch(\Exception $e){
            // Never reached
        }

        return response()->json(['success' => 1], 200);
    }




    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60,
            'user' => [
                "id" => $this->guard()->user()->id,
                "phone" => $this->guard()->user()->phone,
                "email" => $this->guard()->user()->email
            ]
        ]);
    }

    public function guard()
    {
        return Auth::guard('api');
    }
}
