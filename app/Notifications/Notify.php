<?php

namespace App\Notifications;

use Illuminate\Support\Facades\Mail;
use App\Notifications\SendMail;

class Notify
{
    public static function mail($to, $name, $subject, $message)
    {
        $data = [
            'name' => $name,
            'subject' => $subject,
            'message' => $message
        ];
        $info = new SendMail($data);
        return Mail::to($to)->send($info);
    }
}
