<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\CallController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@Login');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('logout', 'AuthController@logout');
    Route::post('register', 'UserController@register');
    Route::post('default-login', "AuthController@defaultLogin");
});

Route::get('get-user', [\App\Http\Controllers\Auth\GetUserController::class, "getUser"]);
//Route::post('get-user', [\App\Http\Controllers\Auth\GetUserController::class, "getUser"]);

Route::get('get-dates', [AppointmentController::class, "getAppointment"]);
Route::get('dashboard', [DashboardController::class, "getDashboard"]);
Route::group([
    'middleware' => 'api',

], function () {


    //Dashboard
    Route::get('dashboard', [DashboardController::class, "getDashboard"]);
    Route::get('whats-new', [DashboardController::class, "getWhatsNew"]);

    //project apis
    Route::get("project/categories", [ProjectController::class, "getCategories"]);
    Route::post("project/create", [ProjectController::class, "createProject"]);
    Route::get("projects", [ProjectController::class, "getProjects"]);
    Route::get("project/{id}", [ProjectController::class, "getProject"]);
    Route::post("project/message/send", [ProjectController::class, "sendProjectMessage"]);
    Route::get("project/messages/{project_id}", [ProjectController::class, "getProjectMessages"]);
    Route::get("project/tasks/{project_id}/{category_id}", [ProjectController::class, "getTasks"]);

    //support apis
    Route::post("support-ticket/create", [SupportController::class, "createTsTicket"]);
    Route::get("support-tickets", [SupportController::class, "getSupportTickets"]);
    Route::get("support-ticket/{id}", [SupportController::class, "getSupportTicket"]);
    Route::post("support-ticket/messages/send", [SupportController::class, "sendSupportTicketMessage"]);
    Route::get("support-ticket/messages/get/{ticket_id}", [SupportController::class, "getSupportMessages"]);
    Route::post("support-ticket/status/update", [SupportController::class, "updateTicketStatus"]);

    //file apis
    Route::get('get-files/{file_type}', [FileController::class, "getFiles"]);
    Route::post('file/upload', [FileController::class, "uploadFile"]);

    //Appointments
    Route::get('get-dates', [CallController::class, "getDateTimes"]);
    Route::post('appointment/create', [CallController::class, "createAppointment"]);
    Route::post('appointment/cancel', [CallController::class, "cancelAppointment"]);
    Route::get('appointments', [CallController::class, "getAppointments"]);

    //payment
    Route::get("invoices/{project_id}", [PaymentController::class, "getInvoices"]);
    Route::get("invoice/{invoice_id}", [PaymentController::class, "getInvoice"]);
    Route::post("invoice/upload", [PaymentController::class, "uploadPaymentReceipt"]);
    Route::post("makePayment", [PaymentController::class, "makePayment"]);
    Route::post("paymentStatus", [PaymentController::class, "paymentStatus"]);
    Route::get("billing/history", [PaymentController::class, "getBillingHistory"]);

    //profile
    Route::get("profile/get", [ProfileController::class, "getProfile"]);
    Route::post("profile/contact/update", [ProfileController::class, "updateProfileContact"]);
    Route::post("userProfileContactNew", [ProfileController::class, "userProfileContactNew"]);
    Route::post("userProfilePersonal", [ProfileController::class, "userProfilePersonal"]);
    Route::post("billing-address/update", [ProfileController::class, "updateBillingAddress"]);
    Route::post('user/password/update', [ProfileController::class, "updatePassword"]);
});
