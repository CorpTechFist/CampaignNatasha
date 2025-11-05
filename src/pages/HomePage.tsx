import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { ChevronRight, Heart, Users, Shield } from 'lucide-react';
import natassjaPortrait from '../assets/4f0454f2a5404a6aa4c97c82035a13ac0ecc285d.png';

export function HomePage() {
  const navigate = useNavigate();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section - Full width image with overlaid text */}
      <section
        id="home"
        className="relative overflow-hidden w-screen"
        style={{
          height: '600px',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        {/* Full-width portrait image background */}
        <div className="absolute inset-0">
          <img
            src={natassjaPortrait}
            alt="Natassja Grossman - Candidate for Utah"
            className="w-full h-full object-cover object-center"
            style={{
              filter: 'brightness(1.15) saturate(1.1) contrast(1.05)',
              objectPosition: 'center 0%',
            }}
          />

          {/* Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 800px 400px at 70% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)',
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(74, 26, 92, 0.90) 0%, rgba(74, 26, 92, 0.6) 40%, transparent 100%)',
            }}
          ></div>
        </div>

        {/* Text content overlaid on image */}
        <div className="relative h-full flex items-center">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-24 max-w-3xl">
            <div className="space-y-4 sm:space-y-6 text-white">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-bold">
                  A Voice for
                  <br />
                  <span style={{ color: '#4A1A5C' }}>Every Family</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg text-purple-50">
                  Single mom, community organizer, and fierce advocate for
                  equity, freedom, and opportunity in Utah.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="text-white shadow-lg px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                  style={{ backgroundColor: '#6B2E8C' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#4A1A5C')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#6B2E8C')
                  }
                  onClick={() => scrollToSection('#about')}
                >
                  Learn My Story
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              I'm not a career politician. I'm a mom who's tired of seeing families like ours ignored.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 mb-12 sm:mb-16">
            {/* My Promise */}
            <div className="bg-white rounded-xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Heart className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0" style={{ color: '#6B2E8C' }} />
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-4 text-gray-900">My Promise</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    I promise to be a voice for families like mine — people working hard, raising kids, and striving
                    for stability. I’ll always lead with compassion, honesty, and courage, and never forget who I’m here
                    to serve — you.
                  </p>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="bg-white rounded-xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0" style={{ color: '#6B2E8C' }} />
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-4 text-gray-900">My Story</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    As a single LGBT mom, I've faced uncertainty, rebuilt from scratch, and fought every day for
                    something better. I made my daughter a promise for a brighter future — and I refuse to let the
                    current direction of our state break that promise.
                  </p>
                </div>
              </div>
            </div>

            {/* My Fight */}
            <div className="bg-white rounded-xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Shield className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0" style={{ color: '#6B2E8C' }} />
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-4 text-gray-900">My Fight for You</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    I'm running to ensure every Utah family has the same opportunities I want for mine:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-3 rounded-full" style={{ backgroundColor: '#8B4FAF' }}></div>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">True Equality for Everyone:</strong> Your background or who
                        you love shouldn’t determine your future.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-3 rounded-full" style={{ backgroundColor: '#8B4FAF' }}></div>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Protecting Immigrant Neighbors:</strong> Standing up for
                        hardworking families who strengthen our communities.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-3 rounded-full" style={{ backgroundColor: '#8B4FAF' }}></div>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Defending LGBTQ+ Lives:</strong> Ensuring everyone can live
                        authentically and safely.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I've worked full-time, studied full-time, and parented full-time. I know what it means to keep going when
              the odds are stacked against you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">Mission Statement</h2>
          <div className="max-w-4xl mx-auto text-left">
            <div className="rounded-lg p-6 sm:p-8 mb-8" style={{ backgroundColor: '#F8F9FA' }}>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                My mission is simple: to build a Utah where every person can live with safety, dignity, and opportunity.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                That means strengthening schools and healthcare, protecting families, and fighting for equality across
                every community.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                I believe government should work for people — not against them. Together, we can build a Utah rooted in
                fairness and compassion.
              </p>
            </div>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672862673441-edba894df3cc?auto=format&q=80&w=1080"
              alt="Utah State Capitol Building"
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="py-16 sm:py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: '#4A1A5C' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full" style={{ backgroundColor: '#8B4FAF' }}></div>
          <div className="absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 rounded-full" style={{ backgroundColor: '#A76BCF' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl mb-6">Join the Movement</h2>
            <div className="w-16 sm:w-24 h-1 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: '#C7A2DC' }}></div>
            <p className="text-base sm:text-xl text-purple-100 max-w-3xl mx-auto">
              Together, we can build a Utah where every voice matters and every family thrives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  I'm not a career politician. I'm a mom who's tired of seeing families like ours ignored.
                </p>
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  You don’t need to be a political insider to make change. You just have to care — and I do.
                </p>
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  Join me in creating a Utah where everyone feels seen, valued, and represented.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white border-opacity-20">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-[rgb(9,3,3)]">Ready to Make a Difference?</h3>
                <p className="text-sm sm:text-base text-[rgb(24,12,23)] mb-6">
                  Every movement starts with people like you. Choose how you want to get involved.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="text-white w-full text-sm sm:text-base"
                    style={{ backgroundColor: '#6B2E8C' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#8B4FAF')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#6B2E8C')
                    }
                    onClick={() => {
                      navigate('/contact');
                    }}
                  >
                    Volunteer Today
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 text-sm sm:text-base"
                    style={{
                      borderColor: '#6B2E8C',
                      color: '#6B2E8C',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6B2E8C';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#6B2E8C';
                    }}
                    onClick={() => {
                      window.open(
                        'https://secure.actblue.com/donate/natassja-grossman-1',
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mt-10 lg:mt-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?auto=format&q=80&w=1080"
                alt="People working together in community"
                className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl"
              />

              {/* Overlays */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-gray-900 mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Volunteers</div>
                </div>
              </div>

              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-gray-900 mb-1">Together</div>
                  <div className="text-xs sm:text-sm text-gray-600">We Rise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
