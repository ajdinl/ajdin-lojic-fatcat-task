import { createBrowserRouter } from 'react-router-dom';

import CreatePostForm from './components/Form/CreatePostForm';
import { Landing } from './components/Landing/Landing';
import ListComponent from './components/List/ListComponent';
import PageGeneratorComponent from './components/PageGenerator/PageGeneratorComponent';
import { ROUTES } from './constants';

export const router = createBrowserRouter([
    { path: ROUTES.ROOT, element: <Landing /> },
    { path: ROUTES.LIST, element: <ListComponent /> },
    { path: ROUTES.FORM, element: <CreatePostForm /> },
    { path: ROUTES.PAGE_GENERATOR, element: <PageGeneratorComponent /> },
]);
