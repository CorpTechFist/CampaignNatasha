import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { PageHero } from '../components/PageHero';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Calendar, 
  Megaphone, 
  Heart,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';

export function VolunteerPage() {
  const volunteerRoles = [
    {
      id: 1,
      title: "Phone Bank Volunteer",
      icon: Phone,
      color: "#6B2E8C",
      timeCommitment: "2-4 hours/week",
      description: "Connect with voters by phone to share Natassja's message and identify supporters.",
      tasks: [
        "Make voter contact calls from our campaign office",
        "Follow provided scripts and talking points",
        "Input voter data into our campaign database",
        "No experience necessary - training provided"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Canvasser",
      icon: MapPin,
      color: "#A76BCF",
      timeCommitment: "3-5 hours/week",
      description: "Go door-to-door in neighborhoods to talk with voters about Natassja's campaign.",
      tasks: [
        "Walk neighborhoods with campaign literature",
        "Have brief, friendly conversations with voters",
        "Record voter responses and feedback",
        "Canvassing training and materials provided"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Event Organizer",
      icon: Calendar,
      color: "#8B4FAF",
      timeCommitment: "5-8 hours/week",
      description: "Help plan and execute campaign events, from house parties to community forums.",
      tasks: [
        "Coordinate venue logistics and setup",
        "Manage event registration and attendance",
        "Recruit and coordinate other volunteers",
        "Help with post-event follow-up"
      ],
      featured: true
    },
    {
      id: 4,
      title: "Digital Organizer",
      icon: Megaphone,
      color: "#6B2E8C",
      timeCommitment: "2-6 hours/week",
      description: "Spread our message on social media and help with digital outreach efforts.",
      tasks: [
        "Share campaign content on social platforms",
        "Help create engaging digital content",
        "Respond to comments and messages",
        "Assist with email campaigns and online organizing"
      ]
    },
    {
      id: 5,
      title: "Community Liaison",
      icon: Users,
      color: "#8B4FAF",
      timeCommitment: "3-4 hours/week",
      description: "Help connect the campaign with community organizations and local groups.",
      tasks: [
        "Attend community meetings and events",
        "Build relationships with local organizations",
        "Share information about Natassja's positions",
        "Identify endorsement opportunities"
      ]
    },
    {
      id: 6,
      title: "Administrative Support",
      icon: Mail,
      color: "#A76BCF",
      timeCommitment: "2-4 hours/week",
      description: "Provide essential behind-the-scenes support to keep the campaign running smoothly.",
      tasks: [
        "Data entry and database management",
        "Prepare campaign materials and mailings",
        "Answer phones and respond to inquiries",
        "General office organization and support"
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: "Oct 12",
      title: "Volunteer Training Session",
      time: "10:00 AM - 12:00 PM",
      location: "Campaign Office",
      type: "Training"
    },
    {
      date: "Oct 15",
      title: "Weekend Canvass Launch",
      time: "9:00 AM - 1:00 PM",
      location: "Multiple Neighborhoods",
      type: "Canvassing"
    },
    {
      date: "Oct 18",
      title: "Phone Bank Evening",
      time: "6:00 PM - 8:00 PM",
      location: "Campaign Office",
      type: "Phone Banking"
    },
    {
      date: "Oct 22",
      title: "Community Endorsement Event",
      time: "7:00 PM - 9:00 PM",
      location: "Community Center",
      type: "Event"
    }
  ];

  const featuredRoles = volunteerRoles.filter(role => role.featured);
  const otherRoles = volunteerRoles.filter(role => !role.featured);

  return (
    <>
      <PageHero title="Volunteer" />
      <section className="py-20" style={{backgroundColor: '#F8F9FA'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grassroots movements are built by people like you. Whether you have 2 hours or 20 hours a week, there's a meaningful way for you to help build a better Utah.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2" style={{color: '#6B2E8C'}}>250+</div>
            <div className="text-gray-600">Active Volunteers</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2" style={{color: '#A76BCF'}}>12,000+</div>
            <div className="text-gray-600">Doors Knocked</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2" style={{color: '#8B4FAF'}}>8,500+</div>
            <div className="text-gray-600">Calls Made</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2" style={{color: '#6B2E8C'}}>45</div>
            <div className="text-gray-600">Events Hosted</div>
          </Card>
        </div>

        {/* Featured Volunteer Roles */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-gray-900">High-Impact Volunteer Opportunities</h3>
          <div className="space-y-8">
            {featuredRoles.map(role => (
              <Card key={role.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <role.icon 
                        className="h-12 w-12" 
                        style={{color: role.color}} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-2xl text-gray-900">{role.title}</h4>
                        <Badge 
                          className="text-white"
                          style={{backgroundColor: role.color}}
                        >
                          High Impact
                        </Badge>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{role.timeCommitment}</span>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {role.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-lg mb-3 text-gray-900">What You'll Do:</h5>
                          <ul className="space-y-2">
                            {role.tasks.map((task, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div 
                                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                                  style={{backgroundColor: role.color}}
                                />
                                <span className="text-gray-700 leading-relaxed">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <Button 
                            className="text-white w-full"
                            style={{backgroundColor: role.color}}
                            onMouseEnter={(e) => {
                              const darkerColor = role.color === '#6B2E8C' ? '#4A1A5C' : 
                                                 role.color === '#A76BCF' ? '#8B4FAF' : '#6B2E8C';
                              e.currentTarget.style.backgroundColor = darkerColor;
                            }}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = role.color}
                          >
                            Sign Up for {role.title}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Volunteer Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-gray-900">More Ways to Help</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherRoles.map(role => (
              <Card key={role.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <role.icon 
                    className="h-10 w-10 flex-shrink-0" 
                    style={{color: role.color}} 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg text-gray-900">{role.title}</h4>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="h-3 w-3" />
                        <span>{role.timeCommitment}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {role.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      style={{borderColor: role.color, color: role.color}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = role.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = role.color;
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-gray-900">Upcoming Volunteer Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div 
                    className="text-center p-3 rounded-lg"
                    style={{backgroundColor: '#6B2E8C', color: 'white'}}
                  >
                    <div className="text-sm">{event.date.split(' ')[0]}</div>
                    <div className="text-lg">{event.date.split(' ')[1] || ''}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg text-gray-900">{event.title}</h4>
                      <Badge 
                        variant="outline"
                        style={{borderColor: '#8B4FAF', color: '#8B4FAF'}}
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Sign Up */}
        <div className="text-center">
          <Card className="p-8" style={{backgroundColor: '#4A1A5C'}}>
            <Heart className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of volunteers who are working to build a more equitable Utah. Fill out our volunteer form and we'll connect you with opportunities that match your interests and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="text-purple-900"
                style={{backgroundColor: 'white'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3F4F6';
                  e.currentTarget.style.color = '#6B2E8C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1F2937';
                }}
              >
                Sign Up to Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#4A1A5C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Contact Volunteer Coordinator
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
}
