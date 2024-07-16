import { z } from 'zod';

export const createPostDataSchema = z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

export type CreatePostData = z.infer<typeof createPostDataSchema>;

export type CreatePostVariables = {
    title: string;
    body: string;
};

export interface CreatePostError {
    message: string;
}
