<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Files extends Model
{
    use HasFactory;

    protected $guarded = [];



    public function message()
    {
        return $this->belongsTo(Message::class);
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y");
    }
}
