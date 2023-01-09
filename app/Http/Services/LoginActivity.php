<?php

namespace App\Http\Services;

use App\Models\LoginActivity as Activity;

class LoginActivity
{
    public static function logs($id, $request)
    {
        try {
            $activity = new Activity;
            $activity->user_id = $id;
            $activity->ip_address = $request->getClientIp();
            $activity->user_agent = $request->header('User-Agent');
            $activity->save();
        } catch (\Throwable $th) {
            report($th);
        }
    }
}
