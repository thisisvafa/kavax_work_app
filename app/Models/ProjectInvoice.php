<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ProjectInvoice extends Model
{
    protected $fillable = [
        'project_id', 'invoice_number',  'invoice_name', 'description'
    ];

    protected $appends = ['total_amount'];

    public function getTotalAmountAttribute()
    {
        return $this->totalAmount();
    }
    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format("d M, Y");
    }



    public function project()
    {
        return $this->belongsTo(Project::class)->where('created_by', '=', Auth::guard('api')->user()->id);
    }

    public function allData($id)
    {
        return $this->where('project_id', $id)->orderBy('created_at', 'desc')->paginate(12)->onEachSide(2);
    }

    public function create($data)
    {
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


    public function payments()
    {
        return $this->hasMany(ProjectPayment::class, 'invoice_id');
    }

    public function totalAmount()
    {
        return ($this->payments()->sum('amount'));
    }

    public function addPayment($data)
    {
        return ProjectPayment::create([
            'project_id' => $data['project_id'],
            'invoice_id' => $data['invoice_id'],
            'description' => $data['description'],
            'amount' => $data['amount'],
        ]);
    }
}
