import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Github, Search, ThumbsUp, Users } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">SANVEG 2025 Projects</h1>
          <p className="text-gray-500 mt-1">Browse and discover innovative projects from our hackathon</p>
        </div>
        <Button asChild>
          <Link href="/projects/submit">Submit Project</Link>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="ai">Artificial Intelligence</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile Apps</SelectItem>
              <SelectItem value="iot">IoT</SelectItem>
              <SelectItem value="blockchain">Blockchain</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>EcoTrack</CardTitle>
                <CardDescription>Team: EcoInnovators</CardDescription>
              </div>
              <Badge>Winner</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A mobile app that helps users track and reduce their carbon footprint through daily activities.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                Mobile
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                Environment
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                AI
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>4 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>24 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/ecotrack" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/ecotrack">View Project</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Project Card 2 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>MediAssist</CardTitle>
                <CardDescription>Team: AI Visionaries</CardDescription>
              </div>
              <Badge variant="outline">Runner-up</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              An AI-powered platform that helps medical professionals diagnose diseases from medical images.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                AI
              </Badge>
              <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                Healthcare
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                Web
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>3 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>18 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/mediassist" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/mediassist">View Project</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Project Card 3 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>SmartFarm</CardTitle>
                <CardDescription>Team: AgriTech Solutions</CardDescription>
              </div>
              <Badge variant="outline">Top 5</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              IoT-based solution for smart farming that optimizes water usage and monitors crop health.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                IoT
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                Agriculture
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                AI
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>4 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>15 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/smartfarm" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/smartfarm">View Project</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Project Card 4 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>CryptoExchange</CardTitle>
                <CardDescription>Team: BlockChain Pioneers</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A decentralized cryptocurrency exchange platform with enhanced security features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                Blockchain
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                Web
              </Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-50">
                Finance
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>3 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>12 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/cryptoexchange" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/cryptoexchange">View Project</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Project Card 5 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>LanguageBuddy</CardTitle>
                <CardDescription>Team: EdTech Innovators</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              AI-powered language learning app that provides personalized lessons and real-time feedback.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                AI
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                Mobile
              </Badge>
              <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">
                Education
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>2 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>10 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/languagebuddy" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/languagebuddy">View Project</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Project Card 6 */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>WasteSort</CardTitle>
                <CardDescription>Team: Waste Warriors</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Computer vision system that helps identify and sort recyclable materials for efficient waste management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                Environment
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                AI
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                IoT
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>3 members</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>8 votes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/example/wastesort" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/projects/wastesort">View Project</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

