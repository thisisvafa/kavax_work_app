<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Appointment extends Model
{
    use HasFactory;


    // protected $appends = ['date'];

    public function getDateAttribute($date)
    {
        // return $this->date;
        return Carbon::parse($date)->format("d M, Y");
    }

    public function time()
    {
        return $this->belongsTo(Time::class, 'time_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
