import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import newsHeroImage from "../assets/news-hero-image.png";
import blueShirtBannerPortrait from "../assets/6c247bc6e2b11a6aac572da6a4fe00f610739987.png";

export function NewsPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Newsletter form submission (EmailJS)
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7vvgtse", // your EmailJS service ID
        "template_qbniem2", // your EmailJS template ID
        {
          from_name: "Newsletter Signup – News Page",
          user_email: email, // ✅ changed to match EmailJS variable name
          reply_to: email, // ✅ optional but useful
          message: `A new user subscribed to the newsletter from the News Page.\nEmail: ${email}`,
        },
        "zUpnf7tygd8DbNcQN", // your EmailJS public key
      );

      toast.success(
        "Successfully subscribed! Check your inbox for confirmation.",
      );
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const newsItems = [
    {
      id: 1,
      title:
        "Natassja Launches Campaign for Utah Legislative Seat",
      excerpt:
        "Single mom and community organizer announces bid to bring fresh perspective to Utah politics.",
      date: "October 5, 2024",
      category: "Campaign News",
      featured: true,
    },
    {
      id: 2,
      title:
        "Local Endorsement from Utah Education Association",
      excerpt:
        "Teachers and education advocates rally behind Natassja's vision for accessible, quality education for all Utah students.",
      date: "September 28, 2024",
      category: "Endorsements",
    },
    {
      id: 3,
      title:
        "Community Town Hall: Housing Affordability Crisis",
      excerpt:
        "Natassja hosts discussion on solutions to Utah's housing challenges, bringing together tenants, homeowners, and policy experts.",
      date: "September 20, 2024",
      category: "Community Events",
    },
    {
      id: 4,
      title: "Op-Ed: Why Utah Needs Authentic Leadership",
      excerpt:
        "Published in Salt Lake Tribune - Natassja shares her vision for representing working families in the legislature.",
      date: "September 15, 2024",
      category: "Media Coverage",
    },
    {
      id: 5,
      title: "Volunteer Drive Exceeds Expectations",
      excerpt:
        "Over 200 community members sign up to support grassroots campaign efforts across the district.",
      date: "September 10, 2024",
      category: "Campaign News",
    },
    {
      id: 6,
      title: "Natassja Speaks at LGBTQ+ Rights Rally",
      excerpt:
        "Hundreds gather at State Capitol to advocate for dignity and protection under the law for all Utahns.",
      date: "September 1, 2024",
      category: "Community Events",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden w-screen"
        style={{
          height: "600px",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div className="absolute inset-0">
          <img
            src={newsHeroImage}
            alt=""
            className="w-full h-full object-cover"
            style={{
              filter:
                "brightness(1.15) saturate(1.1) contrast(1.05)",
              objectPosition: "center center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(74, 26, 92, 0.90) 0%, rgba(74, 26, 92, 0.6) 40%, transparent 100%)",
            }}
          ></div>
        </div>

        <div
          className="relative h-full flex items-center justify-between"
          style={{ zIndex: 20 }}
        >
          <div
            className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-3xl"
            style={{ zIndex: 2 }}
          >
            <div className="space-y-4 sm:space-y-6 text-white">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-tight">
                News
              </h1>
            </div>
          </div>

          <img
            src={blueShirtBannerPortrait}
            alt="Natassja Grossman"
            className="absolute h-full hidden sm:block"
            style={{
              maxWidth: "850px",
              zIndex: 10,
              bottom: "0",
              right: "-20px",
              objectFit: "cover",
              objectPosition: "bottom right",
            }}
          />
        </div>
      </section>

      {/* News Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Campaign News
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay updated on our campaign progress, community
              events, and the issues that matter most to Utah
              families.
            </p>
          </div>

          {/* Featured News */}
          {newsItems
            .filter((item) => item.featured)
            .map((item) => (
              <div key={item.id} className="mb-12">
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        alt="Campaign event"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge
                          className="text-white"
                          style={{ backgroundColor: "#A76BCF" }}
                        >
                          Featured
                        </Badge>
                        <Badge
                          variant="outline"
                          style={{
                            borderColor: "#6B2E8C",
                            color: "#6B2E8C",
                          }}
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl mb-4 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <button
                          className="flex items-center gap-2 transition-colors"
                          style={{ color: "#6B2E8C" }}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

          {/* Other News */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems
              .filter((item) => !item.featured)
              .map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: "#8B4FAF",
                          color: "#8B4FAF",
                        }}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <button
                        className="flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "#6B2E8C" }}
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <Card
              className="p-8"
              style={{ backgroundColor: "#6B2E8C" }}
            >
              <h3 className="text-2xl mb-4 text-white">
                Stay Informed
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Get the latest campaign updates, event
                invitations, and news directly in your inbox.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-white border-opacity-40 bg-transparent text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "white",
                    color: "#6B2E8C",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "#F3F4F6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "white")
                  }
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Subscribing..."
                    : "Subscribe"}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}