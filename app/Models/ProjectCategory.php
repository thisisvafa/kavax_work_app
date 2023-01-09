<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectCategory extends Model
{
    protected $fillable = ['project_id', 'category_id'];

    protected $appends = ['progress'];

    public function getProgressAttribute()
    {
        return Task::where('project_id', '=', $this->project_id)->where('category_id', '=', $this->category_id)->get()->sum('progress');
    }
}
