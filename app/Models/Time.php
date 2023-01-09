<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Appointment;

class Time extends Model
{
    use HasFactory;

    public static $date = null;

    protected $appends = ['isAvailable'];



    public function getIsAvailableAttribute()
    {

        $isAvailable = Appointment::where('time_id', $this->id)->where('date', $this::$date)->first();
        return ($isAvailable) ? false : true;
    }

    public function partOfDay()
    {
        return $this->belongsTo(PartOfDay::class);
    }
}
