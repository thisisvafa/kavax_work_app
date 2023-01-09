<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class GetUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function guard()
    {
        return Auth::guard('api');
    }

    public function getUser(Request $request)
    {

        dd($this->guard()->user()->id);
//        $user = request()->user();
        $user = Auth::guard();
        dd($user);
//        $user = Auth::user();
//        $id = auth()->user();
//        dd($user);
//        $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2ODc5MDg4NCwiZXhwIjoxNjY4Nzk0NDg0LCJuYmYiOjE2Njg3OTA4ODQsImp0aSI6IlhSdVlDS1doaU1QRk9YT2MiLCJzdWIiOjQwLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.V1_OR1wus6sZl7Jn5u2GqANvhcCysXDpUWe4YTTJWmg";
//        $user = $this->jwtauth->toUser($token);
//        if ($user == null) {
//            $user = 'null';
//        }
        return response()->json([
            'status' => '200',
            'user' => $user
        ], 200);
    }
}
