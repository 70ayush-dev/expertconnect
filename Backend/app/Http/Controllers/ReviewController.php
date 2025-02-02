<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index()
    {
        return Review::with(['user', 'expert'])->get();
    }

    public function store(Request $request)
    {
        $review = Review::create($request->all());
        return response()->json($review, 201);
    }

    public function show($id)
    {
        return Review::with(['user', 'expert'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);
        $review->update($request->all());
        return response()->json($review, 200);
    }

    public function destroy($id)
    {
        Review::destroy($id);
        return response()->json(null, 204);
    }
}
