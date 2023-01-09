<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\FuncCall;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class T_S_Ticket extends Model
{
    use HasFactory;

    // protected $guarded = [];
    protected $appends = ['answered_by'];

    public function message()
    {
        return $this->hasMany(Message::class);
    }

    public function files()
    {
        return $this->hasManyThrough(Files::class, Message::class, 'id', 'msg_id', 'tstID', 'msgID');
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y");
    }

    public function getAnsweredByAttribute()
    {
        $data =  Message::where('tstID', $this->id)->where('userID', '!=', Auth::guard('api')->user()->id)->get(); //->groupBy('userID');
        if ($data  != []) {
            $user_ids = array();
            foreach ($data as $msg) {
                array_push($user_ids, $msg->userID);
            }
            $uniqueUserIds = array_unique($user_ids);
            return User::whereIn('id', $uniqueUserIds)->select('fullName')->get();
        }
        return [];
    }
}
