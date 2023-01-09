<?php

namespace App\Http\Controllers;

use App\Model\MailSetting;
use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\Time;
use App\Models\PartOfDay;
use Illuminate\Support\Facades\Auth;
use App\Notifications\SendMail;
use Illuminate\Support\Facades\Mail;

class CallController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function guard()
    {
        return Auth::guard('api');
    }

    public function createAppointment(Request $request)
    {
        try {
            $appointment = Appointment::where('date', $request->date)->where('time_id', $request->time_id)->first();
            if ($appointment) {
                return response()->json(['success' => 0, 'message' => 'This time slot is unavailable'], 200);
            }
            $appointment = new Appointment();
            $appointment->date = $request->date;
            $appointment->time_id = $request->time_id;
            $appointment->user_id = $this->guard()->user()->id;
            $appointment->status = 1;

            $appointment->save();
            $appointment = Appointment::with('time')->find($appointment->id);

            try {
                $message = "Thank you for booking an appointment with us. We are looking forward to welcoming you to Kavax Media on: <br/>" . $appointment->date . " at " . $appointment->time->time . " " . $appointment->time->part->name .
                    ". <br/><br/>You’ve booked an online consultation session with one of our digital experts to discuss your project.<br/><br/>"
                    . 'Meanwhile, please feel free to check out our client <a href="https://www.kavax.co.uk/dashboard">dashboard</a>    where you can ask us any question and get updates on your project.' .
                    '<br/><br/>Kind regards<br/>Kavax Team';
                $this->sendMail($this->guard()->user()->email, $this->guard()->user()->name, $appointment);
                $message = "You have a new appointment request from " . $appointment->user->fullName . " on " . $appointment->date . " at " . $appointment->time->time . " " . $appointment->time->part->name . ".";
                $this->sendMail(MailSetting::first()->mail_to, "Kavax Media", $message);
            } catch (\Exception $e) {
            }

            return response()->json(['success' => 1, 'message' => 'Appointment Created', 'appointment' => $appointment], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => 0, 'message' => 'Appointment Error'], 200);
        }
    }

    public function cancelAppointment(Request $request)
    {

        try {
            $appointment = Appointment::find($request->id);
            if ($appointment) {
                $appointment->status = 0;
                $appointment->save();
            }
            return response()->json(['success' => 1], 200);
        } catch (\Exception $e) {

            return response()->json(['success' => $e->getMessage()], 200);
        }
    }

    public function sendMail($email, $name, $appointment)
    {
        try{
            Mail::to($email)->send(new SendMail(
                "$name",
                "New Appointment with Kavax",
                "Thank you for booking an appointment with us. We are looking forward to welcoming
            you to Kavax Media on:" . $appointment->date . " at " . $appointment->time->time .

                "<br/>Meanwhile, please feel free to check out our client dashboard at
            www.kavax.co.uk/dashboard where you can ask us any question and get updates on
            your project.<br/><br/>

            Kind regards<br/>

            Kavax Team"
            // $name,
            // "New Appointment Notification",
            // $message
            ));
        }
        catch(\Exception $e){
            // Never reached
        }
        return true;
    }

    public function getAppointments(Request $request)
    {
        $upcomingAppointments = Appointment::with('time')->with('user')->where('user_id', $this->guard()->user()->id)->whereStatus(1)->get();
        // $appointmentHistory = Appointment::where('user_id', $this->guard()->user()->id)->whereDate('date', '<', NOW())->get();

        return response()->json([
            'success' => 1, 'message' => 'Appointment found', 'upcomingAppointments' => $upcomingAppointments
        ], 200);
    }

    public function getDateTimes(Request $request)
    {

        $days = $this->getDays();

        $data = [];

        foreach ($days as $key => $day) {
            Time::$date = $day;
            $times['parts'] = PartOfDay::with('times')->get()->toArray();
            $times['details'] = $this->getDateDetails($day);
            $data[] = $times;
        }

        return response()->json(['days' => $data], 200);
    }

    public function getDateDetails($date)
    {
        $convert_date = strtotime($date);
        $month = date('M', $convert_date);
        $name_day = date('D', $convert_date);
        $day = date('j', $convert_date);

        return ['month' => $month, 'day' => $day, 'name_day' => $name_day, 'date' => $date];
    }

    public function getDays()
    {
        $date = date('Y-m-d'); //today date
        $weekOfdays = array();
        for ($i = 1; $i <= 7; $i++) {
            $date = date('Y-m-d', strtotime('+1 day', strtotime($date)));
            $weekOfdays[] = date('Y-m-d', strtotime($date));
        }
        return $weekOfdays;
    }
}
