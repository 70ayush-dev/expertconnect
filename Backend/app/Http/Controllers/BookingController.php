<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    public function index()
    {
        return Booking::with(['user', 'expert'])->get();
    }

    public function store(Request $request)
    {
        $booking = Booking::create($request->all());
        return response()->json($booking, 201);
    }

    public function show($id)
    {
        return Booking::with(['user', 'expert'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->update($request->all());
        return response()->json($booking, 200);
    }

    public function destroy($id)
    {
        Booking::destroy($id);
        return response()->json(null, 204);
    }
}
