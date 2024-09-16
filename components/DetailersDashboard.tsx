import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export default function DetailerDashboard({ user }) {
  const appointments = useQuery(api.appointments.listAppointmentsByDetailer, { detailerId: user._id })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Detailer Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Upcoming Appointments:</h3>
      <ul>
        {appointments?.map((appointment) => (
          <li key={appointment._id}>{appointment.date} - {appointment.status}</li>
        ))}
      </ul>
    </div>
  )
}