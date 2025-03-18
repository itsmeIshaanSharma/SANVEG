import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePickerWithRange } from "./date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateEventPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create a Hackathon</h1>

        <Tabs defaultValue="basic" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="prizes">Prizes</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide the essential details about your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="event-name">Event Name</Label>
                  <Input id="event-name" placeholder="e.g., SANVEG 2025" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-description">Event Description</Label>
                  <Textarea
                    id="event-description"
                    placeholder="Describe your hackathon, its goals, and what participants can expect"
                    className="min-h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Event Dates</Label>
                    <DatePickerWithRange />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-location">Location</Label>
                    <Input id="event-location" placeholder="e.g., San Francisco, CA or Virtual" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger id="event-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-participants">Maximum Participants</Label>
                    <Input id="max-participants" type="number" placeholder="e.g., 100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-website">Event Website (Optional)</Label>
                  <Input id="event-website" placeholder="https://" />
                </div>

                <Button className="w-full">Save & Continue</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Provide more specific information about your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="event-theme">Event Theme</Label>
                  <Input id="event-theme" placeholder="e.g., AI for Good, Climate Tech, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eligibility">Eligibility Requirements</Label>
                  <Textarea
                    id="eligibility"
                    placeholder="Who can participate in your hackathon?"
                    className="min-h-20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-size">Team Size</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="min-team-size" className="text-xs">
                        Minimum
                      </Label>
                      <Input id="min-team-size" type="number" placeholder="e.g., 1" />
                    </div>
                    <div>
                      <Label htmlFor="max-team-size" className="text-xs">
                        Maximum
                      </Label>
                      <Input id="max-team-size" type="number" placeholder="e.g., 4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="judging-criteria">Judging Criteria</Label>
                  <Textarea id="judging-criteria" placeholder="How will projects be evaluated?" className="min-h-20" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resources">Resources Provided</Label>
                  <Textarea
                    id="resources"
                    placeholder="What resources will be provided to participants? (e.g., APIs, hardware, mentors)"
                    className="min-h-20"
                  />
                </div>

                <Button className="w-full">Save & Continue</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Schedule</CardTitle>
                <CardDescription>Create a timeline for your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="schedule-date-1">Date</Label>
                        <Input id="schedule-date-1" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-time-1">Time</Label>
                        <Input id="schedule-time-1" type="time" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-event-1">Event</Label>
                        <Input id="schedule-event-1" placeholder="e.g., Check-in & Registration" />
                      </div>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="schedule-date-2">Date</Label>
                        <Input id="schedule-date-2" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-time-2">Time</Label>
                        <Input id="schedule-time-2" type="time" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-event-2">Event</Label>
                        <Input id="schedule-event-2" placeholder="e.g., Opening Ceremony" />
                      </div>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="schedule-date-3">Date</Label>
                        <Input id="schedule-date-3" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-time-3">Time</Label>
                        <Input id="schedule-time-3" type="time" />
                      </div>
                      <div>
                        <Label htmlFor="schedule-event-3">Event</Label>
                        <Input id="schedule-event-3" placeholder="e.g., Hacking Begins" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Add More Schedule Items
                </Button>

                <Button className="w-full">Save & Continue</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prizes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Prizes</CardTitle>
                <CardDescription>Define the prizes for your hackathon winners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="prize-place-1">Place</Label>
                        <Input id="prize-place-1" placeholder="e.g., 1st Place" defaultValue="1st Place" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prize-amount-1">Prize Amount/Value</Label>
                          <Input id="prize-amount-1" placeholder="e.g., $5,000" />
                        </div>
                        <div>
                          <Label htmlFor="prize-description-1">Prize Description</Label>
                          <Input id="prize-description-1" placeholder="e.g., Cash prize + mentorship opportunities" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="prize-place-2">Place</Label>
                        <Input id="prize-place-2" placeholder="e.g., 2nd Place" defaultValue="2nd Place" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prize-amount-2">Prize Amount/Value</Label>
                          <Input id="prize-amount-2" placeholder="e.g., $2,500" />
                        </div>
                        <div>
                          <Label htmlFor="prize-description-2">Prize Description</Label>
                          <Input id="prize-description-2" placeholder="e.g., Cash prize + AWS credits" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="prize-place-3">Place</Label>
                        <Input id="prize-place-3" placeholder="e.g., 3rd Place" defaultValue="3rd Place" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prize-amount-3">Prize Amount/Value</Label>
                          <Input id="prize-amount-3" placeholder="e.g., $1,000" />
                        </div>
                        <div>
                          <Label htmlFor="prize-description-3">Prize Description</Label>
                          <Input id="prize-description-3" placeholder="e.g., Cash prize + GitHub sponsorship" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Add More Prizes
                </Button>

                <div className="pt-4">
                  <Button className="w-full">Create Hackathon</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

