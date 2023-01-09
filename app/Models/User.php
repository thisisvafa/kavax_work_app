<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'phone',
        'email',
        'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function create($data, $password)
    {
        $user = User::query();
        if (!empty($data->phone)) {
            $user->where('phone', $data->phone);
        }
        if (!empty($data->email)) {
            $user->where('email', $data->email);
        }
        if ($user = $user->first()) {
            $user->password = bcrypt($password);
        } else {
            $user = new User;
            $user->email = $data->email;
            $user->phone = $data->phone;
            $user->password = bcrypt($password);
        }
        $user->save();

        return $user;
    }

    public function activities()
    {
        return $this->hasMany(LoginActivity::class)->latest();
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
