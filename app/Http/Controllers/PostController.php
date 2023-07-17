<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    function addPost(Request $post_data)
    {
        $validator = Validator::make($post_data->all(), [
            'id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'author' => 'required',
            'date_time' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['error' => "Please fill all the required fields"], 404);
        } else {

            $post = new Post;
            $post->id = $post_data->input('id');
            $post->title = $post_data->input('title');
            $post->description = $post_data->input('description');
            $post->content = $post_data->input('content');
            $post->author = $post_data->input('author');
            $post->date_time = $post_data->input('date_time');
            $post->save();
            return response()->json(['message' => 'Data is saved successfully']);
        }
    }

    function getPost()
    {
        $posts = DB::table('posts')->select('id', 'title', 'description', 'content', 'author', 'date_time')->get();
        if (!$posts) {
            response(['error' => "No Posts are found"], 404);
        }
        return response()->json(['posts' => $posts]);
    }

    function retrievePost($id)
    {
        try {
            $data = Post::find($id);

            if ($data) {
                return response(($data), 200);
            } else {

                return response()->json([

                    'error' => 'Data not found.'
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([

                'error' => 'An error occurred while fetching data.'
            ], 500);
        }
    }

    function editPost(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'author' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(["message" => $validator->errors()->all()], 400);
        }

        Post::where("id", $id)->update([
            "title" => $request->title,
            "description" => $request->description,
            "content" => $request->content,
            "author" => $request->author
        ]);

        return response()->json(["message" => "Post updated successfully"]);
    }
}
