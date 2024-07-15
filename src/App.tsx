import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();
import './styles.css';
import { router } from './router';

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
