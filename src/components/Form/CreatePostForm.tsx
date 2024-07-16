import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { FormGeneratorComponent } from './FormGeneratorComponent';
import useCreatePost from './useCreatePostMutation';
import { Button } from '../Button';

const postSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(100, 'Title cannot exceed 100 characters'),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(500, 'Body cannot exceed 500 characters'),
});

type PostFormInputs = z.infer<typeof postSchema>;

const CreatePostForm: React.FC = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="relative flex items-center mb-4">
                <Button
                    onClick={() => navigate('/')}
                    className="absolute left-0 px-4 py-2 bg-mainYellow hover:bg-yellow"
                >
                    Back
                </Button>
                <h1 className="w-full text-2xl font-bold text-primary text-center">
                    Create a New Post
                </h1>
            </div>
            <FormGeneratorComponent<PostFormInputs>
                useMutation={useCreatePost}
                validationSchema={postSchema}
                successMessage="Successfully created post"
                setIsSubmitting={setIsSubmitting}
                renderForm={({ register, formState: { errors } }) => (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray80 font-bold mb-2"
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                className="w-full p-2 border border-gray20 rounded-lg"
                                {...register('title')}
                            />
                            {errors.title && (
                                <p className="text-red mt-1">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="body"
                                className="block text-gray80 font-bold mb-2"
                            >
                                Body
                            </label>
                            <textarea
                                id="body"
                                className="w-full p-2 border border-gray20 rounded-lg"
                                {...register('body')}
                            />
                            {errors.body && (
                                <p className="text-red mt-1">
                                    {errors.body.message}
                                </p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className={`${
                                isSubmitting
                                    ? 'bg-gray60'
                                    : 'bg-mainGreen hover:bg-primary'
                            } text-white p-2 rounded-lg w-full transition duration-300`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting' : 'Submit'}
                        </Button>
                    </div>
                )}
            />
        </div>
    );
};

export default CreatePostForm;
