import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Trophy, Info } from "lucide-react"

export default function EventDetailsPage({ params }: { params: { eventId: string } }) {
  // In a real app, you would fetch event data based on the eventId
  const eventId = params.eventId

  // Mock data for demonstration
  const event = {
    id: eventId,
    title: "SANVEG 2025",
    status: "Registration Open",
    dates: "June 15-17, 2024",
    duration: "48 Hours",
    location: "San Francisco, CA",
    description:
      "Join us for SANVEG 2025, a premier hackathon bringing together developers, designers, and innovators to solve real-world challenges. Over the course of 48 hours, participants will form teams, ideate, build, and present their solutions to a panel of industry experts.",
    prizes: [
      { place: "1st Place", amount: "$5,000", description: "Cash prize + mentorship opportunities" },
      { place: "2nd Place", amount: "$2,500", description: "Cash prize + AWS credits" },
      { place: "3rd Place", amount: "$1,000", description: "Cash prize + GitHub sponsorship" },
    ],
    timeline: [
      { date: "June 15, 9:00 AM", event: "Check-in & Registration" },
      { date: "June 15, 10:00 AM", event: "Opening Ceremony" },
      { date: "June 15, 11:00 AM", event: "Team Formation" },
      { date: "June 15, 12:00 PM", event: "Hacking Begins" },
      { date: "June 16, 12:00 PM", event: "Midway Checkpoint" },
      { date: "June 17, 12:00 PM", event: "Hacking Ends" },
      { date: "June 17, 1:00 PM", event: "Project Presentations" },
      { date: "June 17, 4:00 PM", event: "Judging" },
      { date: "June 17, 5:00 PM", event: "Awards Ceremony" },
    ],
    sponsors: ["TechCorp", "InnovateLabs", "DevFoundry", "CloudScale"],
    judges: [
      { name: "Jane Smith", role: "CTO, TechCorp" },
      { name: "John Doe", role: "Founder, InnovateLabs" },
      { name: "Sarah Johnson", role: "VP Engineering, DevFoundry" },
    ],
    faqs: [
      {
        question: "Who can participate?",
        answer:
          "Anyone 18 years or older can participate. We welcome developers, designers, product managers, and anyone interested in technology and innovation.",
      },
      {
        question: "Do I need a team to register?",
        answer:
          "No, you can register as an individual and form a team during the event, or you can register with a pre-formed team of up to 4 people.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring your laptop, charger, and any other devices you might need. We'll provide food, drinks, and a comfortable hacking space.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
              {event.status}
            </Badge>
          </div>
        </div>
        <Button size="lg">Register Now</Button>
      </div>

      {/* Event Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>About the Event</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Dates</p>
                  <p className="text-sm text-gray-500">{event.dates}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-sm text-gray-500">{event.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prizes</CardTitle>
            <CardDescription>Win amazing prizes and opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {event.prizes.map((prize, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Trophy
                    className={`h-5 w-5 ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"}`}
                  />
                  <div>
                    <p className="font-medium">
                      {prize.place}: {prize.amount}
                    </p>
                    <p className="text-sm text-gray-500">{prize.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="timeline" className="mb-8">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
          <TabsTrigger value="judges">Judges</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Timeline</CardTitle>
              <CardDescription>Schedule of activities during the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-gray-200 ml-3 pl-8 space-y-6">
                {event.timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-11 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="font-medium">{item.date}</p>
                    <p className="text-gray-500">{item.event}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sponsors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Sponsors</CardTitle>
              <CardDescription>The companies making this event possible</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {event.sponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center h-24 border rounded-lg bg-gray-50 p-4">
                    <span className="font-medium text-lg">{sponsor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="judges" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Judges Panel</CardTitle>
              <CardDescription>Meet our expert judges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {event.judges.map((judge, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="font-medium">{judge.name}</h3>
                    <p className="text-sm text-gray-500">{judge.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {event.faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to join the hackathon?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Register now to secure your spot and start preparing for an amazing weekend of innovation, learning, and fun!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

