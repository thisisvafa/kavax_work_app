<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Services\LoginActivity;
use App\Models\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Foundation\Auth\ResetsPasswords;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['Login', 'defaultLogin']]);
    }

    public function Login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if ($token = $this->guard()->attempt($credentials)) {
            if ($this->guard()->user()->role != 'customer') {

                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid Email/Phone or Password.'
                ], 401);
            }
            // $token =  $this->guard()->login($this->guard()->user());
            // return $this->respondWithToken($token);
//            $credentialsCustom = $request->only('email', 'password');
//            $credentialsCustom = $request->getCredentials();
//            $user = Auth::getProvider()->retrieveByCredentials($credentials);
//            dd(Auth::login($user));
//            Auth::attempt($credentialsCustom);

            LoginActivity::logs($this->guard()->user()->id, $request);
            return $this->respondWithToken($token);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid Email/Phone or Password.'
            ], 401);
        }
    }



    public function logout()
    {
        $this->guard()->logout();
        return response()->json(['success' => 1, 'message' => 'Successfully logged out'], 200);
    }

    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
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
                "email" => $this->guard()->user()->email,
                "fullName" => $this->guard()->user()->fullName,
                "billing_address" => $this->guard()->user()->billing_address
            ]
        ]);

    }

    public function defaultLogin(Request $request)
    {
        $user = null;
        if (isset($request->token)) {
            $user = User::where('token', $request->token)->first();
        }
        else
        {
            $user = User::where('email', $request->email)->first();
        }

        if ($user == null) {
            $user = new User();
            $user->fullName = $request->full_name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->contactNumber = $request->phone;
            $user->save();
        }

        $token =  $this->guard()->login($user);

        $appointment = new Appointment();
        if($token){
            $appointment->date = $request->date;
            $appointment->time_id = $request->time;
            $appointment->user_id = $user->id;
            $appointment->status = 1;
            $appointment->save();
        }

        if ($appointment) {
            return $this->respondWithToken($token);
        }


        abort(404);
    }

    public function guard()
    {
        return Auth::guard('api');
    }

    /**
     * Send password reset link.
     */
    public function sendPasswordResetLink(Request $request)
    {
        return $this->sendResetLinkEmail($request);
    }
}
