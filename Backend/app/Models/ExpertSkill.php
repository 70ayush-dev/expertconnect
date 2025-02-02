<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ExpertSkill extends Pivot
{
    use HasFactory;

    protected $fillable = ['expert_id', 'skill_id'];
}
