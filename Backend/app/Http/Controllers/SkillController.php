<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller
{
    public function index()
    {
        return Skill::all();
    }

    public function store(Request $request)
    {
        $skill = Skill::create($request->all());
        return response()->json($skill, 201);
    }

    public function show($id)
    {
        return Skill::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->update($request->all());
        return response()->json($skill, 200);
    }

    public function destroy($id)
    {
        Skill::destroy($id);
        return response()->json(null, 204);
    }
}
