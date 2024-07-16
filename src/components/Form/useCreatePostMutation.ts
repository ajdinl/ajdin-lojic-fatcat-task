import {
    CreatePostData,
    CreatePostVariables,
    createPostDataSchema,
} from '@homework-task/types/post';
import { useMutation } from 'react-query';

const apiUrlPost = import.meta.env.VITE_API_URL_POST;

if (!apiUrlPost) {
    throw new Error('VITE_API_URL_POST is not defined');
}

const useCreatePost = () => {
    return useMutation<CreatePostData, Error, CreatePostVariables>(
        async (newPost) => {
            const response = await fetch(apiUrlPost, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            const responseData: unknown = await response.json();

            const parsedResponse = createPostDataSchema.parse(responseData);

            return parsedResponse;
        }
    );
};

export default useCreatePost;
