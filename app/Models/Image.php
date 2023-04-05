<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * @property int id
 * @property string image
 * @property string imageUrl
 */
class Image extends Model
{
    use HasFactory;


    protected $fillable = ['image'];

    /**
     * @return Attribute
     */
    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->image ? Storage::url($this->image) : null
        );
    }
}
