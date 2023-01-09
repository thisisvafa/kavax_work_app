<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function guard()
    {
        return Auth::guard('api');
    }

    public function userProfilePersonal(Request $request)
    {
        $success = 0;
        $data = User::find($this->guard()->user()->id);
        $data->fullName = $request->fullName;
        $data->email = $request->email;
        $data->businessName = $request->businessName;
        $data->save();
        if ($data) {
            $success = 1;
            $message = "Profile Updated Successfully";
        } else {
            $message = "Update failed!";
        }

        return response()->json(['success' => $success, 'message' => $message], 200);
    }

    public function updateProfileContact(Request $request)
    {

        $success = 0;

        $data = User::find($this->guard()->user()->id);
        $data->contactNumber = $request->contactNumber;
        $data->save();
        if ($data) {
            $success = 1;
            $message = "Contact updated.";
        } else {
            $message = "Update failed!";
        }

        return response()->json(['success' => $success, 'message' => $message], 200);
    }

    public function userProfileContactNew(Request $request, $id)
    {
        $success = 0;

        $data = User::find($id);
        $data->contactNumber = $data->contactNumber . "," . $request->contactNumber;
        // $data->phoneNumber;
        $data->save();
        if ($data) {
            $success = 1;
            $message = "Success";
        } else {
            $message = "No Data Found!";
        }

        return response()->json(['success' => $success, 'message' => $message], 200);
    }

    public function getProfile(Request $request)
    {

        try {
            $user = User::find($this->guard()->user()->id);
            return response()->json(['success' => 1, 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => 0], 200);
        }
    }

    public function updateBillingAddress(Request $request)
    {

        try {
            $user = User::find($this->guard()->user()->id);
            $user->billing_address = $request->billing_address;
            $user->save();

            return response()->json(['success' => 1, 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => 0], 200);
        }
    }

    public function updatePassword(Request $request){

        try{
            $user = User::find($this->guard()->user()->id);
            $user->password = bcrypt($request->password);
            $user->default_password = 0;
            $user->token = null;
            $user->save();

            return response()->json(['success' => 1, 'user' => $user], 200);
        }catch (\Exception $e) {
            return response()->json(['success' => 0], 200);
        }
    }
}
