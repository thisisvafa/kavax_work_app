<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartOfDay extends Model
{
    use HasFactory;

    public  static $date = null;

    // public function __construct($date)
    // {

    //     // parent::__construct($date);
    //     // $this->date = $date;
    // }

    public function times()
    {
        // Time::$date = $this->date;
        return $this->hasMany(Time::class);
    }
}
