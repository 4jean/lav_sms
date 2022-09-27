<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'name',
        'my_class_id',
        'description',
        'author',
        'book_type',
        'url',
        'location',
        'total_copies',
        'issued_copies'
    ];
}
