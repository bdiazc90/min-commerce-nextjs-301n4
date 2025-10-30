import { prisma } from '@/lib/db';

import { Card } from '@/components/ui/card';

import { formatDate } from '@/lib/utils';

export default async function UsersPage() {

    const users = await prisma.user.findMany({
        include: {
            accounts: true,
            sessionLogs: true,
        },
    });

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Admin - Users</h1>
            <hr />
            <div className="container flex flex-wrap gap-2 my-4">
                {users.map(user => (
                    <Card key={user.id} className="p-4">
                        <h2 className="font-bold">{user.name}</h2>
                        <p>Provider: {user.accounts[0].provider}</p>
                        <p>Session Logs:</p>
                        <ul>
                            {user.sessionLogs.map(log => (
                                <li key={log.id}>
                                    {log.action} at {formatDate(log.timestamp)}
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>

        </div>
    )
}