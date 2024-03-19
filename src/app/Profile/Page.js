import { useSession } from 'next-auth/react';

export default function ProfilePage() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Profile</h1>
            {session ? (
                <>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                </>
            ) : (
                <p>Please sign in to view your profile</p>
            )}
        </div>
    );
}
