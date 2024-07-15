import { useEffect, useState } from 'react';

import { User } from '@homework-task/types/user';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

const apiUrl: string = import.meta.env.VITE_API_URL;

if (!apiUrl) {
    throw new Error('VITE_API_URL is not defined');
}

const ListComponent: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch users.');
                }

                const data: User[] = (await response.json()) as User[];
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        void (async () => {
            await fetchUsers();
        })();
    }, []);

    if (loading) {
        return <p className="text-center text-mainGreen">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red">{error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex items-center mb-4">
                <Button onClick={() => navigate('/')} className="mr-4">
                    Back
                </Button>
                <h1 className="text-2xl font-bold text-primary">User List</h1>
            </div>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="p-4 bg-white rounded-lg shadow-md"
                    >
                        <p className="font-bold text-gray80">
                            ID: <span className="text-gray60">{user.id}</span>
                        </p>
                        <p className="text-xl font-semibold text-primary">
                            Name:{' '}
                            <span className="text-black">{user.name}</span>
                        </p>
                        <p className="text-gray60">
                            Username:{' '}
                            <span className="text-black">{user.username}</span>
                        </p>
                        <p className="text-gray60">
                            Email:{' '}
                            <span className="text-black">{user.email}</span>
                        </p>
                        <p className="text-gray60">
                            Phone:{' '}
                            <span className="text-black">{user.phone}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;
