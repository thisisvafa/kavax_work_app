<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectInvoice;
use App\Models\ProjectPayment;
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;
use PayPal\Exception\PayPalConnectionException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    private $_api_context;



    public function __construct()
    {
        $this->middleware('auth:api');
        $paypal_configuration = config('paypal');
        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_configuration['client_id'], $paypal_configuration['secret']));
        // $this->_api_context->setConfig($paypal_configuration['settings']);
        $this->_api_context->setConfig(["mode" => "live"]);
    }
    public function guard()
    {
        return Auth::guard('api');
    }

    public function data()
    {
        return [
            [
                'id' => 1,
                'name' => 'Small',
                'description' => 'Payment 1 description',
                'amount' => '100.00',
            ],
            [
                'id' => 2,
                'name' => 'Professional',
                'description' => 'Payment 2 description',
                'amount' => '200.00',
            ],
            [
                'id' => 3,
                'name' => 'Enterprise',
                'description' => 'Payment 3 description',
                'amount' => '300.00',
            ],
        ];
    }

    public function makePayment(Request $request)
    {
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $item_1 = new Item();

        $item_1->setName($request->name)
            ->setCurrency('USD')
            ->setQuantity(1)
            ->setPrice($request->amount);

        $item_list = new ItemList();
        $item_list->setItems(array($item_1));

        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($request->amount);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($item_list)
            ->setDescription($request->description);

        $redirect_urls = new RedirectUrls();
        $redirect_urls->setReturnUrl('https://kavax.co.uk/app/payment/success/' . $request->invoice_id)
            ->setCancelUrl('https://kavax.co.uk/app/payment/error/' . $request->invoice_id);

        $payment = new Payment();
        $payment->setIntent('Sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirect_urls)
            ->setTransactions(array($transaction));
        try {
            $payment->create($this->_api_context);
        } catch (PayPalConnectionException $ex) {
            if (config('app.debug')) {
                return response()->json(['success' => '0', 'message' => "Connection Timeout"], 408);
            } else {
                return response()->json(['success' => '0', 'message' => "Some error occur, sorry for inconvenient"], 400);
            }
        }

        foreach ($payment->getLinks() as $link) {
            if ($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }
        if (isset($redirect_url)) {
            return response()->json([
                'success' => '1',
                'payment_id' => $payment->getId(),
                'redirect_url' => $redirect_url,
            ], 200);
        }
        return response()->json(['success' => '0', 'message' => "Some error occur, sorry for inconvenient"], 400);
    }

    public function paymentStatus(Request $request)
    {

        $payment_id = $request->payment_id;

        if (empty($request->token)) {
            return response()->json(['success' => '0', 'message' => "Payment failed"], 402);
        }
        try {
            $payment = Payment::get($payment_id, $this->_api_context);
            $execution = new PaymentExecution();
            $execution->setPayerId($payment->payer->payer_info->payer_id);


            $result = $payment->execute($execution, $this->_api_context);
            // dd($result);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
        if ($result->getState() == 'approved') {
            $this->updatePaymentStatus($request->invoice_id, 'Paid');
            return response()->json(['success' => '1', 'message' => "Payment success"], 200);
        } else {

            $this->updatePaymentStatus($request->invoice_id, 'Unpaid');
        }

        return response()->json(['success' => '0', 'message' => "Payment failed"], 402);
    }

    public function updatePaymentStatus($id, $status)
    {
        $projectInvoice = ProjectInvoice::where('id', $id)->first();
        $projectInvoice->status = $status;
        $projectInvoice->save();
    }

    public function getInvoices(Request $request, $project_id)
    {
        $invoices = ProjectInvoice::with('project.user')->where('project_id', $project_id)->get();

        return response()->json(['success' => 1, 'invoices' => $invoices], 200);
    }
    public function getInvoice(Request $request, $invoice_id)
    {
        $invoice = ProjectInvoice::with('project.user')->with('payments')->where('id', $invoice_id)->first();

        return response()->json(['success' => 1, 'invoice' => $invoice], 200);
    }

    public function uploadPaymentReceipt(Request $request)
    {
        $fileController = new FileController();

        $fileController->files($request->file, $request->invoice_id, 'payment_id');
        $invoice = ProjectInvoice::find($request->invoice_id);
        $invoice->status = 'Pending';
        $invoice->save();

        return response()->json(['success' => 1, 'message' => 'Receipt Uploaded Successfully'], 200);
    }

    public function getBillingHistory()
    {
        $invoices = ProjectInvoice::join('projects', 'projects.id', '=', 'project_invoices.project_id')
            ->where('projects.created_by', $this->guard()->user()->id)->select('project_invoices.*')
            ->orderBy('project_invoices.id', 'desc')->get();

        foreach ($invoices as $invoice) {
            $invoice->total_amount = ProjectPayment::groupBy('invoice_id')->where('invoice_id', $invoice->id)->sum('amount');
        }

        return response()->json(['success' => 1, 'invoices' => $invoices], 200);
    }
}
