import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Filter, MapPin, Search } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Hackathon Events</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search events..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="past">Past</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event Card 1 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-purple-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">SANVEG 2025</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June 15-17, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>48 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Join us for a weekend of innovation, collaboration, and problem-solving.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-green-100 text-green-800">
                Registration Open
              </span>
              <Button asChild size="sm">
                <Link href="/events/sanveg-2025">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">AI Summit Hackathon</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>July 8-10, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>36 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>New York, NY</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Build innovative AI solutions to tackle real-world challenges.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-green-100 text-green-800">
                Registration Open
              </span>
              <Button asChild size="sm">
                <Link href="/events/ai-summit-2024">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-blue-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Climate Tech Hackathon</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>August 5-7, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>72 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Austin, TX</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Create innovative solutions to address climate change challenges.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800">
                Coming Soon
              </span>
              <Button asChild size="sm">
                <Link href="/events/climate-tech-2024">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Event Card 4 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-pink-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Health Tech Hackathon</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>September 12-14, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>48 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Boston, MA</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Develop innovative solutions for healthcare challenges.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800">
                Coming Soon
              </span>
              <Button asChild size="sm">
                <Link href="/events/health-tech-2024">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Event Card 5 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-green-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">EdTech Hackathon</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 20-22, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>36 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Chicago, IL</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Create innovative solutions for education challenges.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">Not Yet Open</span>
              <Button asChild size="sm">
                <Link href="/events/edtech-2024">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Event Card 6 */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-orange-600 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">FinTech Hackathon</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>November 15-17, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>48 Hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Seattle, WA</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Develop innovative solutions for financial technology challenges.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">Not Yet Open</span>
              <Button asChild size="sm">
                <Link href="/events/fintech-2024">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

