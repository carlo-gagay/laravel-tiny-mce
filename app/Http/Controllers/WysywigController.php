<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WysywigController extends Controller
{
    public function tiny()
    {
        return Inertia::render('Tiny', []);
    }

    public function trix()
    {
        return Inertia::render('Trix', []);
    }

    public function tiny2()
    {
        return Inertia::render('Tiny2', []);
    }

    public function froala()
    {
        return Inertia::render('Froala', []);
    }

    public function tinyResults()
    {
        $posts = Post::all();
        
        return Inertia::render('TinyResults', [
            'posts' => $posts
        ]);
    }
}
