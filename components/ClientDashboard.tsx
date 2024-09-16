import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export default function ClientDashboard({ user }) {
  const appointments = useQuery(api.appointments.listAppointmentsByClient, { clientId: user._id })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Client Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Your Appointments:</h3>
      <ul>
        {appointments?.map((appointment) => (
          <li key={appointment._id}>{appointment.date} - {appointment.status}</li>
        ))}
      </ul>
    </div>
  )
}