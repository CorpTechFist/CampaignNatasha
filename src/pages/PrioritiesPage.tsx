import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Home, GraduationCap, Heart, Shield, DollarSign, Users, Leaf, Scale } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { useNavigate } from "react-router-dom";

export function PrioritiesPage() {
  const navigate = useNavigate(); // ✅ moved inside the component

  const priorities = [
    {
      id: 1,
      title: "Housing Affordability",
      icon: Home,
      color: "#A76BCF",
      description: "Everyone deserves a safe, affordable place to call home. Utah's housing crisis affects families across income levels, and we need bold solutions.",
      policies: [
        "Increase funding for affordable housing development",
        "Protect tenants from unfair rent increases",
        "Support first-time homebuyer assistance programs",
        "Encourage inclusive zoning policies"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Quality Education",
      icon: GraduationCap,
      color: "#6B2E8C",
      description: "Every Utah child deserves access to excellent public education, regardless of their zip code or family income.",
      policies: [
        "Increase per-pupil funding to competitive levels",
        "Support teachers with better pay and working conditions",
        "Expand early childhood education programs",
        "Ensure schools have resources for special needs students"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Access",
      icon: Heart,
      color: "#8B4FAF",
      description: "Healthcare is a human right. We must ensure all Utahns can access quality, affordable medical care when they need it.",
      policies: [
        "Expand Medicaid to cover more working families",
        "Lower prescription drug costs",
        "Support mental health services and addiction treatment",
        "Protect reproductive healthcare access"
      ],
      featured: true
    },
    {
      id: 4,
      title: "LGBTQ+ Rights",
      icon: Shield,
      color: "#A76BCF",
      description: "Every person deserves to live authentically and with dignity, protected from discrimination in all areas of life.",
      policies: [
        "Strengthen anti-discrimination protections",
        "Support LGBTQ+ youth in schools",
        "Ensure equal access to adoption and family services",
        "Protect gender-affirming healthcare"
      ]
    },
    {
      id: 5,
      title: "Economic Justice",
      icon: DollarSign,
      color: "#6B2E8C",
      description: "Working families should be able to thrive, not just survive. We need policies that support good jobs and fair wages.",
      policies: [
        "Raise the minimum wage to a living wage",
        "Strengthen workers' rights to organize",
        "Support small business development",
        "Invest in job training and workforce development"
      ]
    },
    {
      id: 6,
      title: "Immigration Justice",
      icon: Users,
      color: "#8B4FAF",
      description: "Immigrant families strengthen our communities. We must create policies that reflect our values of compassion and opportunity.",
      policies: [
        "Oppose cruel deportation policies",
        "Support pathway to citizenship for dreamers",
        "Ensure access to services regardless of status",
        "Create welcoming community policies"
      ]
    },
    {
      id: 7,
      title: "Environmental Protection",
      icon: Leaf,
      color: "#C7A2DC",
      description: "Utah's natural beauty is our shared heritage. We must protect our environment while building a sustainable economy.",
      policies: [
        "Transition to clean, renewable energy",
        "Improve air quality standards",
        "Protect public lands and water resources",
        "Support green jobs and sustainable development"
      ]
    },
    {
      id: 8,
      title: "Criminal Justice Reform",
      icon: Scale,
      color: "#6B2E8C",
      description: "Our justice system should focus on rehabilitation, prevention, and true community safety for all.",
      policies: [
        "End cash bail for non-violent offenses",
        "Invest in community-based alternatives to incarceration",
        "Reform sentencing disparities",
        "Support reentry programs and expungement"
      ]
    }
  ];

  const featuredPriorities = priorities.filter(p => p.featured);
  const otherPriorities = priorities.filter(p => !p.featured);

  return (
    <>
      <PageHero title="Priorities" />
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">My Priorities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As your representative, I will fight for policies that create opportunity, ensure dignity, and build stronger communities for all Utah families.
            </p>
          </div>

          {/* Featured Priorities */}
          <div className="space-y-12 mb-16">
            {featuredPriorities.map(priority => (
              <Card key={priority.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <priority.icon className="h-16 w-16" style={{ color: priority.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl text-gray-900">{priority.title}</h3>
                        <Badge className="text-white" style={{ backgroundColor: priority.color }}>
                          Priority
                        </Badge>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">{priority.description}</p>
                      <div className="space-y-3">
                        <h4 className="text-lg text-gray-900">Key Policy Goals:</h4>
                        <ul className="space-y-2">
                          {priority.policies.map((policy, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: priority.color }} />
                              <span className="text-gray-700 leading-relaxed">{policy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Priorities Grid */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-center text-gray-900">Additional Priorities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPriorities.map(priority => (
                <Card key={priority.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <priority.icon className="h-12 w-12 flex-shrink-0" style={{ color: priority.color }} />
                    <div className="flex-1">
                      <h4 className="text-xl mb-3 text-gray-900">{priority.title}</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">{priority.description}</p>
                      <details className="group">
                        <summary className="cursor-pointer list-none transition-colors" style={{ color: priority.color }}>
                          <span className="group-open:hidden">View Policy Goals →</span>
                          <span className="hidden group-open:inline">Hide Policy Goals ↑</span>
                        </summary>
                        <ul className="mt-4 space-y-2">
                          {priority.policies.map((policy, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: priority.color }} />
                              <span className="text-sm text-gray-700 leading-relaxed">{policy}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8" style={{ backgroundColor: '#4A1A5C' }}>
              <h3 className="text-2xl mb-4 text-white">Have Questions About My Positions?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                I believe in transparent governance and want to hear from you. Reach out with questions about my policy positions or to share your own priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact", { state: { source: "Priorities Page - Contact Me" } })}
                  className="px-8 py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: "white", color: "#4A1A5C" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F3F4F6";
                    e.currentTarget.style.color = "#6B2E8C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#4A1A5C";
                  }}
                >
                  Contact Me
                </button>

                <button
                onClick={() => navigate("/contact", { state: { source: "Priorities Page - Schedule a Meeting" } })}


  className="px-8 py-3 rounded-lg border-2 border-white text-white transition-colors"
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.color = '#4A1A5C';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'white';
  }}
>
  Schedule a Meeting
</button>

              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
