import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'


export default function AdminDashboard({ user }: { user: { name: string } }) {
  const tenants = useQuery(api.tenants.listTenants);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Tenants:</h3>
      <ul>
        {tenants?.map((tenantId: { _id: string, name: string, plan: string }) => (
          <li key={tenantId._id}>{tenantId.name} - {tenantId.plan}</li>
        ))}
      </ul>
    </div>
  );
}