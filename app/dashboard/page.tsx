import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Dashboard() {
    const { userId } = useAuth()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
            <p className="mb-4">Welcome, user {userId}!</p>
            <Link href="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Sign Out
            </Link>
        </main>
    )
}