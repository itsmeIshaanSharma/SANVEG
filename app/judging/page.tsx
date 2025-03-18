import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { CheckCircle, Clock } from "lucide-react"

export default function JudgingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Judging Dashboard</h1>

      <Tabs defaultValue="assigned" className="mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="assigned">Assigned Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="assigned" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>EcoTrack</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A mobile app that helps users track and reduce their carbon footprint through daily activities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 2 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>

            {/* Project Card 2 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>MediAssist</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  An AI-powered platform that helps medical professionals diagnose diseases from medical images.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 3 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>

            {/* Project Card 3 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>SmartFarm</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  IoT-based solution for smart farming that optimizes water usage and monitors crop health.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 5 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Completed Project Card 1 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>CryptoExchange</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A decentralized cryptocurrency exchange platform with enhanced security features.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  <span>Evaluated 1 hour ago</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Evaluation
                </Button>
              </CardFooter>
            </Card>

            {/* Completed Project Card 2 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>LanguageBuddy</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  AI-powered language learning app that provides personalized lessons and real-time feedback.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  <span>Evaluated 3 hours ago</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Evaluation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* All Projects - Mix of pending and completed */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>EcoTrack</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A mobile app that helps users track and reduce their carbon footprint through daily activities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 2 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>CryptoExchange</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A decentralized cryptocurrency exchange platform with enhanced security features.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  <span>Evaluated 1 hour ago</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Evaluation
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>MediAssist</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  An AI-powered platform that helps medical professionals diagnose diseases from medical images.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 3 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>LanguageBuddy</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  AI-powered language learning app that provides personalized lessons and real-time feedback.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  <span>Evaluated 3 hours ago</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Evaluation
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>SmartFarm</CardTitle>
                    <CardDescription>SANVEG 2025</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  IoT-based solution for smart farming that optimizes water usage and monitors crop health.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Due in 5 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Evaluate Project</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Evaluation Form */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Project Evaluation</CardTitle>
          <CardDescription>Evaluate the project based on the following criteria</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="project">Select Project</Label>
            <Select>
              <SelectTrigger id="project">
                <SelectValue placeholder="Select a project to evaluate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecotrack">EcoTrack</SelectItem>
                <SelectItem value="mediassist">MediAssist</SelectItem>
                <SelectItem value="smartfarm">SmartFarm</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Innovation & Creativity (1-10)</Label>
                <span className="text-sm font-medium">7</span>
              </div>
              <Slider defaultValue={[7]} max={10} step={1} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Technical Complexity (1-10)</Label>
                <span className="text-sm font-medium">8</span>
              </div>
              <Slider defaultValue={[8]} max={10} step={1} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Practicality & Impact (1-10)</Label>
                <span className="text-sm font-medium">9</span>
              </div>
              <Slider defaultValue={[9]} max={10} step={1} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Presentation & Demo (1-10)</Label>
                <span className="text-sm font-medium">6</span>
              </div>
              <Slider defaultValue={[6]} max={10} step={1} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>User Experience (1-10)</Label>
                <span className="text-sm font-medium">8</span>
              </div>
              <Slider defaultValue={[8]} max={10} step={1} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback & Comments</Label>
            <Textarea id="feedback" placeholder="Provide detailed feedback for the team" className="min-h-32" />
          </div>

          <Button className="w-full">Submit Evaluation</Button>
        </CardContent>
      </Card>
    </div>
  )
}

