<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class SupportMessage extends Model
{
    use HasFactory;
    protected $primaryKey = 'msg_id';

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y H:m");
    }

    public function file()
    {
        return $this->hasOne(Files::class, 'msg_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function repliedBy()
    {

        return $this->belongsTo(User::class, 'replied_by');
    }
}
