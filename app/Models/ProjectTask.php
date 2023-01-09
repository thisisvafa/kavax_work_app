<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ProjectTask extends Model
{
    protected $fillable = [
        'project_id',
        'name',
        'description',
        'category',
        'start_date',
        'end_date',
        'status',
        'progress',
        'priority',
        'assigned_to',
        'assigned_by',
    ];

    public function getEndDateAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y");
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }


    public function status()
    {
        return $this->status == 0 ? 'Pending' : ($this->status == 1 ? 'In Progress' : ($this->status == 2 ? 'Completed' : 'Pertially Completed'));
    }

    public function priority()
    {
        return $this->priority == 0 ? 'Low' : ($this->priority == 1 ? 'Medium' : 'High');
    }

    public function allData($id)
    {
        return $this->where('project_id', $id)->orderBy('created_at', 'desc')->paginate(12)->onEachSide(2);
    }

    public function create($data)
    {
        $lastElement = end($data['category']);
        $category = "[";
        foreach ($data['category'] as $key => $value) {
            $category .= $value;
            $category .= $value == $lastElement ? "" : ",";
        }
        $category .= "]";
        $data['category'] = $category;
        $this->fill($data);
        $this->save();
        return $this;
    }

    public function edit($id, $data)
    {
        $cat = $this->find($id);
        $cat->fill($data);
        return $cat->save();
    }

    public function view($id)
    {
        return $this->find($id);
    }

    public function deleteTask($id)
    {
        $cat = $this->findOrFail($id);
        return $cat->delete();
    }
}
