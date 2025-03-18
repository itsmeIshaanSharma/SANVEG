import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SubmitProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Submit Your Project</h1>
        <p className="text-gray-500 mb-8">Share your SANVEG 2025 hackathon project with the community</p>

        <Card>
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
            <CardDescription>Provide details about your project and team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="Enter your project name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="team-name">Team Name</Label>
              <Input id="team-name" placeholder="Enter your team name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea
                id="project-description"
                placeholder="Describe your project, its purpose, and how it works"
                className="min-h-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem-statement">Problem Statement</Label>
              <Textarea
                id="problem-statement"
                placeholder="What problem does your project solve?"
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Solution</Label>
              <Textarea id="solution" placeholder="How does your project solve the problem?" className="min-h-20" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies Used</Label>
              <Textarea
                id="technologies"
                placeholder="List the technologies, frameworks, and tools used in your project"
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github-url">GitHub Repository URL</Label>
              <Input id="github-url" placeholder="https://github.com/username/repository" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-url">Demo URL (Optional)</Label>
              <Input id="demo-url" placeholder="https://your-demo-url.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="video-url">Demo Video URL (Optional)</Label>
              <Input id="video-url" placeholder="https://youtube.com/watch?v=..." />
            </div>

            <div className="space-y-2">
              <Label>Project Categories</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ai" />
                  <Label htmlFor="ai" className="font-normal">
                    Artificial Intelligence
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="web" />
                  <Label htmlFor="web" className="font-normal">
                    Web Development
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile" />
                  <Label htmlFor="mobile" className="font-normal">
                    Mobile Apps
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="iot" />
                  <Label htmlFor="iot" className="font-normal">
                    IoT
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="blockchain" />
                  <Label htmlFor="blockchain" className="font-normal">
                    Blockchain
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="environment" />
                  <Label htmlFor="environment" className="font-normal">
                    Environment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="healthcare" />
                  <Label htmlFor="healthcare" className="font-normal">
                    Healthcare
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="education" />
                  <Label htmlFor="education" className="font-normal">
                    Education
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Team Members</Label>
              <div className="space-y-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <Label htmlFor="member-1-name">Name</Label>
                    <Input id="member-1-name" placeholder="Team Member 1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-1-role">Role</Label>
                    <Input id="member-1-role" placeholder="e.g., Frontend Developer" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <Label htmlFor="member-2-name">Name</Label>
                    <Input id="member-2-name" placeholder="Team Member 2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-2-role">Role</Label>
                    <Input id="member-2-role" placeholder="e.g., Backend Developer" />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Add Team Member
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal">
                  I confirm that this project was created during the SANVEG 2025 hackathon and complies with all
                  hackathon rules.
                </Label>
              </div>
            </div>

            <Button className="w-full">Submit Project</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

