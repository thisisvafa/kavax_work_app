<?php

namespace App\Events;

use Illuminate\Http\Request;
use App\Models\LoginActivity as Activity;
use Illuminate\Support\Facades\Auth;

class LoginActivity
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $activity = new Activity;
            $activity->user_id = Auth::user()->id;
            $activity->ip_address = $this->request->getClientIp();
            $activity->user_agent = $this->request->header('User-Agent');
            $activity->save();
        } catch (\Throwable $th) {
            report($th);
        }
    }
}
