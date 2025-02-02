<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    public function index()
    {
        return Payment::with(['user', 'expert', 'booking'])->get();
    }

    public function store(Request $request)
    {
        $payment = Payment::create($request->all());
        return response()->json($payment, 201);
    }

    public function show($id)
    {
        return Payment::with(['user', 'expert', 'booking'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);
        $payment->update($request->all());
        return response()->json($payment, 200);
    }

    public function destroy($id)
    {
        Payment::destroy($id);
        return response()->json(null, 204);
    }
}
