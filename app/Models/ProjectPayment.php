<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectPayment extends Model
{
    protected $fillable = ['project_id', 'invoice_id', 'amount', 'description'];
}
