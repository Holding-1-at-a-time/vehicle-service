import { auth, currentUser } from '@clerk/nextjs'
import AdminDashboard from '@/components/AdminDashboard'
import DetailerDashboard from '@/components/DetailerDashboard'
import ClientDashboard from '@/components/ClientDashboard'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'

export default function Dashboard() {
    const { userId } = auth()
    const user = useQuery(api.users.getUser, { email: currentUser.emailAddresses[0].emailAddress })

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
            {user.role === 'admin' && <AdminDashboard user={user} />}
            {user.role === 'detailer' && <DetailerDashboard user={user} />}
            {user.role === 'client' && <ClientDashboard user={user} />}
        </main>
    )
}