<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expert;

class ExpertController extends Controller
{
    public function index()
    {
        return Expert::with('user')->get(); // Load related user data
    }

    public function store(Request $request)
    {
        $expert = Expert::create($request->all());
        return response()->json($expert, 201);
    }

    public function show($id)
    {
        return Expert::with('user')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $expert = Expert::findOrFail($id);
        $expert->update($request->all());
        return response()->json($expert, 200);
    }

    public function destroy($id)
    {
        Expert::destroy($id);
        return response()->json(null, 204);
    }
}
