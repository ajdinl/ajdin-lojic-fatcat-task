import { router } from '@homework-task/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();
import '@homework-task/styles.css';

function App() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </main>
    );
}

export default App;
