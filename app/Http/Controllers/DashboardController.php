<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\News;
use App\Models\ProjectInvoice;
use App\Models\ProjectPayment;
use App\Models\Appointment;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function guard()
    {
        return Auth::guard('api');
    }
    public function getDashboard(Request $request)
    {
        $projects = $this->getOpenedProjects();
        $appointments = $this->getAppointments();
        $payments = $this->getInvoices();

        return response()->json(['success' => 1, 'projects' => $projects, 'appointments' => $appointments, 'payments' => $payments], 200);
    }

    public function getOpenedProjects()
    {
        return Project::with('categories')
            ->with('tasks')
            ->where("created_by", "=", $this->guard()->user()->id)
            ->where('status', '!=', 3)
            ->orderBy('id', 'desc')
            ->limit(3)
            ->get();
    }

    public function getAppointments()
    {
        return  Appointment::with('time')
            ->with('time.partOfDay')
            ->with('user')
            ->where('status', '1')
            ->where('user_id', $this->guard()->user()->id)
            ->whereDate('date', '>=', NOW())
            ->get();
    }

    public function getInvoices()
    {

        $invoices = ProjectInvoice::join('projects', 'projects.id', '=', 'project_invoices.project_id')
            ->where('projects.created_by', $this->guard()->user()->id)->select('project_invoices.*')
            ->orderBy('project_invoices.id', 'desc')->get();

        foreach ($invoices as $invoice) {
            $invoice->total_amount = ProjectPayment::groupBy('invoice_id')->where('invoice_id', $invoice->id)->sum('amount');
        }
        return $invoices;

        // return  ProjectInvoice::with('project.user')->with('project')->get();
        return DB::table('project_invoices')->join('projects', 'projects.id', '=', 'project_invoices.project_id')->join('users', 'users.id', '=', 'projects.created_by')
            ->where('users.id', $this->guard()->user()->id)->select('project_invoices.*')->orderBy('project_invoices.id', 'desc')->limit(5)->get();
    }

    public function getWhatsNew()
    {
        $info = News::where('status', 'published')->get();

        if ($info) {
            return response()->json(['success' => 1, 'info' => $info], 200);
        }
        return response()->json(['success' => 0], 200);
    }
}
