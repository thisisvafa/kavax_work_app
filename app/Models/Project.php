<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Project extends Model
{

    protected $fillable = [
        'name',
        'description',
        'objective',
        'budget',
        'start_date',
        'end_date',
        'status',
        'progress',
        'employee_size',
        'created_by',
    ];

    protected $appends = ['category', 'progress', 'progressPerCategory'];

    public function getCategoryAttribute()
    {
        return $this->categories();
    }

    public function getProgressAttribute()
    {
        return $this->progress();
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y");
    }

    public function getProgressPerCategoryAttribute()
    {
        return ProjectTask::groupBy('category')->where('project_id', '=', $this->id)
            ->selectRaw('sum(progress) as sumProgress, category')->get();
        // ->pluck('sumProgress', 'category');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function categories()
    {
        return $this->hasManyThrough(Category::class, ProjectCategory::class, 'project_id', 'id', 'id', 'category_id');
    }

    public function tasks()
    {
        return $this->hasMany(ProjectTask::class);
    }


    public function progress()
    {
        $tasks = $this->tasks();
        if ($tasks->count() > 0) {
            return ($tasks->sum('progress') / $tasks->count());
        }
        return 0;
    }

    public function allData()
    {
        return $this->orderBy('created_at', 'desc')->paginate(12)->onEachSide(2);
    }

    public function create($data)
    {
        $this->fill($data['project']);
        if ($new = $this->save()) {
            foreach ($data['categories'] as $cat) {
                ProjectCategory::create([
                    'project_id' => $this->id,
                    'category_id' => $cat
                ]);
            }
            return $new;
        }
        return false;
    }

    public function edit($id, $data)
    {
        $cat = $this->find($id);
        $this->fill($data['project']);
        if ($new = $this->save()) {
            $this->categories()->delete();
            foreach ($data['categories'] as $cat) {
                ProjectCategory::create([
                    'project_id' => $this->id,
                    'category_id' => $cat
                ]);
            }
            return $new;
        }
        return false;
    }

    public function view($id)
    {
        return $this->find($id);
    }

    public function deleteProject($id)
    {
        $cat = $this->findOrFail($id);
        return $cat->delete();
    }

    public function messages()
    {
        return $this->hasMany(ProjectMessage::class)->orderBy('created_at', 'asc');
    }

    public function addMessage($data)
    {
        return ProjectMessage::create([
            'project_id' => $data['project_id'],
            'message' => $data['message'],
            'replied_by' => $data['user_id']
        ]);
    }
}
