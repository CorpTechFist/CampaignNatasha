import { Card } from "../components/ui/card";
import { Quote, Users, Building, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHero } from "../components/PageHero";
import { useNavigate } from "react-router-dom";

export function EndorsementPage() {
  const navigate = useNavigate();

  const navigateToContact = (source: string) => {
    navigate("/contact", { state: { source } });
  };

  const endorsements = [
    {
      id: 1,
      name: "Utah Education Association",
      type: "organization",
      title: "Teachers Union",
      quote:
        "Natassja understands the challenges facing our schools and has a clear vision for supporting both educators and students. Her commitment to public education and equity makes her the right choice for Utah families.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      type: "individual",
      title: "Local Business Owner & Mother",
      quote:
        "As a fellow working mom, I know Natassja will fight for policies that actually support families. She's authentic, determined, and has the experience to make real change happen.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c4120e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      name: "Utah AFL-CIO",
      type: "organization",
      title: "Labor Union Coalition",
      quote:
        "Natassja has stood with working families throughout her career as an organizer. She understands that strong unions and fair wages build stronger communities for everyone.",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      type: "individual",
      title: "Community Volunteer & Activist",
      quote:
        "Natassja has been fighting for immigrant rights and social justice long before she decided to run for office. Her advocacy is genuine and her commitment is unwavering.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 5,
      name: "Utah Environmental Coalition",
      type: "organization",
      title: "Environmental Advocacy Group",
      quote:
        "Utah's natural beauty is our shared heritage. Natassja recognizes that environmental protection and economic opportunity go hand in hand, not in opposition.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 6,
      name: "David Chen",
      type: "individual",
      title: "Small Business Owner",
      quote:
        "Natassja understands that small businesses are the backbone of our economy. Her policies will help entrepreneurs like me while ensuring workers are treated fairly.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  const categories = [
    {
      name: "Labor Organizations",
      count: 5,
      icon: Users,
      color: "#6B2E8C",
    },
    {
      name: "Environmental Groups",
      count: 3,
      icon: Heart,
      color: "#8B4FAF",
    },
    {
      name: "Education Advocates",
      count: 7,
      icon: Building,
      color: "#A76BCF",
    },
  ];

  return (
    <>
      <PageHero title="Endorsements" />
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Endorsements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Community leaders, organizations, and neighbors who believe in our
              vision for a more equitable Utah.
            </p>
          </div>

          {/* Endorsement Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <category.icon
                  className="h-12 w-12 mx-auto mb-4"
                  style={{ color: category.color }}
                />
                <h3 className="text-xl mb-2 text-gray-900">{category.name}</h3>
                <p className="text-gray-600">{category.count} Endorsements</p>
              </Card>
            ))}
          </div>

          {/* Featured Endorsements */}
          <div className="space-y-8">
            {endorsements.map((endorsement) => (
              <Card
                key={endorsement.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <ImageWithFallback
                      src={endorsement.image}
                      alt={endorsement.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 p-8">
                    <div className="flex items-start gap-4">
                      <Quote
                        className="h-8 w-8 flex-shrink-0 mt-1"
                        style={{ color: "#8B4FAF" }}
                      />
                      <div className="flex-1">
                        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                          "{endorsement.quote}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg text-gray-900">
                              {endorsement.name}
                            </h4>
                            <p className="text-gray-600">
                              {endorsement.title}
                            </p>
                          </div>
                          {endorsement.type === "organization" && (
                            <div
                              className="px-3 py-1 rounded-full text-sm text-white"
                              style={{ backgroundColor: "#6B2E8C" }}
                            >
                              Organization
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8" style={{ backgroundColor: "#4A1A5C" }}>
              <h3 className="text-2xl mb-4 text-white">Join Our Coalition</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Add your voice to our growing movement. Endorse Natassja and
                help us build a more equitable Utah for all families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
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
                  onClick={() =>
                    navigateToContact("Endorsement Page - Individual Endorsement")
                  }
                >
                  Individual Endorsement
                </button>

                <button
                  className="px-8 py-3 rounded-lg border-2 border-white text-white transition-colors hover:bg-white"
                  style={{ borderColor: "white" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#4A1A5C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "white";
                  }}
                  onClick={() =>
                    navigateToContact("Endorsement Page - Organization Endorsement")
                  }
                >
                  Organization Endorsement
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
