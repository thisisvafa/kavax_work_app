<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'ip_address', 'user_agent'
    ];

    protected $hidden = [
        'id',
        'user_id',
        'created_at',
        'updated_at',
    ];

    protected $appends = ['logged_at'];

    public function getLoggedAtAttribute($value)
    {
        return Carbon::parse($this->created_at)->format('M d, Y H:m A');
    }
}
