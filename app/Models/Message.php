<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Message extends Model
{
    use HasFactory;
    protected $primaryKey = 'msgID';

    protected $guarded = [];

    public function t_s_tickets()
    {
        return $this->belongsTo(T_S_Ticket::class);
    }

    public function files()
    {
        return $this->hasMany(Files::class, 'tst_msg_id', 'msgID');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'userID');
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y H:m");
    }
}
