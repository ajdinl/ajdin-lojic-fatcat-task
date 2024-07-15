import CreatePostForm from '@homework-task/components/Form/CreatePostForm';
import { Landing } from '@homework-task/components/Landing/Landing';
import ListComponent from '@homework-task/components/List/ListComponent';
import PageGeneratorComponent from '@homework-task/components/PageGenerator/PageGeneratorComponent';
import { ROUTES } from '@homework-task/utils/constants';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    { path: ROUTES.ROOT, element: <Landing /> },
    { path: ROUTES.LIST, element: <ListComponent /> },
    { path: ROUTES.FORM, element: <CreatePostForm /> },
    { path: ROUTES.PAGE_GENERATOR, element: <PageGeneratorComponent /> },
]);
