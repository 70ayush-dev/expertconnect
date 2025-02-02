<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function experts()
    {
        return $this->belongsToMany(Expert::class, 'expert_skill');
    }
}
