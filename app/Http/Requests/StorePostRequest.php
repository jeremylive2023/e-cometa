<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'author' => [
                'required',
                'string',
            ],
            'title' => [
                'required',
                'string',
                'unique:posts',
                'max:255',
            ],
            'body' => [
                'required',
                'string',
            ]
        ];
    }
}
