import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Candidate Portal</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/candidate/profile" className="text-blue-600 hover:text-blue-800">Profile</Link>
              </li>
              <li>
                <Link href="/candidate/jobs" className="text-blue-600 hover:text-blue-800">Jobs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

