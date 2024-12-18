'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from 'lucide-react'

// Mock data for available jobs
const availableJobs = [
  { 
    id: 1, 
    title: "Math Teacher", 
    department: "Education",
    location: "London",
    type: "Full-time",
    salary: "£30,000 - £45,000",
    closingDate: "2023-08-15",
    description: "We are seeking an enthusiastic Math Teacher to inspire and educate our students."
  },
  { 
    id: 2, 
    title: "Science Teacher", 
    department: "Education",
    location: "Manchester",
    type: "Full-time",
    salary: "£28,000 - £42,000",
    closingDate: "2023-08-20",
    description: "Join our team as a Science Teacher and help cultivate curiosity and scientific thinking in our students."
  },
  // ... (other job listings)
]

export default function CandidateJobs() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const filteredJobs = availableJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleApply = (id: number) => {
    console.log(`Applying for job with id: ${id}`)
    router.push(`/candidate/apply/${id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Positions</h1>
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{job.department}</Badge>
                <Badge variant="outline">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{job.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Location:</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Salary:</span>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <span className="font-semibold mr-2">Closing Date:</span>
                  <span>{job.closingDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleApply(job.id)} className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

