<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectMessage extends Model
{
    protected $table = 'support_messages';
    protected $primaryKey = 'msg_id';
    protected $fillable = ['message', 'project_id', 'replied_by', 'user_id'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function replied()
    {
        return $this->belongsTo(\App\Models\User::class, 'replied_by');
    }
}
