import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { PageHero } from '../components/PageHero';
import {
  Heart,
  Users,
  Shield,
  Home,
  GraduationCap,
  DollarSign,
  Leaf,
  Scale,
} from 'lucide-react';

import rightPortraitImage from '../assets/3e1f0e09123bfdadf36fd79df2530328202b86e7.png';

import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        id="about"
        className="relative overflow-hidden w-screen"
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        <style>{`
          #about {
            height: 280px !important;
            background-image: url(${rightPortraitImage});
            background-repeat: no-repeat;
            background-position: 70% 10%;
            background-size: 90%;
            filter: brightness(1.1) saturate(1.05) contrast(1.05);
          }

          @media (min-width: 640px) {
            #about {
              height: 520px !important;
              background-position: 70% 35%;
              background-size: 85%;
            }
          }

          @media (min-width: 1024px) {
            #about {
              height: 600px !important;
              background-position: 68% 10%;
              background-size: 50%;
            }
          }

          .hero-heading {
            font-weight: 700;
            line-height: 1.1;
            font-size: 22px;
            margin-top: 10px;
          }

          @media (min-width: 640px) {
            .hero-heading { font-size: 48px; }
          }

          @media (min-width: 1024px) {
            .hero-heading { font-size: 96px; }
          }
        `}</style>

        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 900px 500px at 65% 25%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 80%)',
              mixBlendMode: 'soft-light',
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(74,26,92,0.85) 0%, rgba(74,26,92,0.5) 35%, rgba(74,26,92,0.25) 60%, transparent 100%)',
            }}
          ></div>
        </div>

        <div className="relative h-full flex items-center justify-center lg:justify-start">
          <div className="px-4 sm:px-8 lg:pl-24 xl:pl-32 w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6 text-white text-left ml-[30px] sm:ml-[50px]">
              <h1 className="hero-heading">About</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">About Me</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              I'm not a career politician. I'm a mom who's tired of seeing
              families like ours ignored.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* My Promise */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Heart className="h-16 w-16" style={{ color: '#6B2E8C' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">My Promise</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                    I promise to be a voice for families like mine. The people
                    working hard, raising kids, and striving for stability in a
                    system that often overlooks us. I will always lead with
                    compassion, honesty, and courage, and I'll never forget who
                    I'm here to serve — you.
                  </p>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Users className="h-16 w-16" style={{ color: '#6B2E8C' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">My Story</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                    As a single LGBT mom, I've walked the path many Utah
                    families know too well — facing uncertainty, rebuilding from
                    scratch, and fighting every day for something better. Through
                    my work as a community organizer, I've seen how our neighbors
                    struggle with the same challenges I've faced. I made my
                    daughter a promise for a brighter future, and I refuse to let
                    the current direction of our state break that promise. That's
                    why I'm running — not just for my family, but for every family
                    that deserves the chance to thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* My Fight */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Shield className="h-16 w-16" style={{ color: '#6B2E8C' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">
                    My Fight for You
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl">
                    As a single mom who's faced real challenges, I know what it
                    means to fight for what matters. I'm running to ensure every
                    Utah family has the same opportunities I want for mine:
                  </p>
                  <div className="space-y-4 max-w-4xl">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                        style={{ backgroundColor: '#8B4FAF' }}
                      ></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">
                          True Equality for Everyone:
                        </strong>{' '}
                        Building a Utah where your zip code, background, or who
                        you love doesn't determine your future.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                        style={{ backgroundColor: '#8B4FAF' }}
                      ></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">
                          Protecting Our Immigrant Neighbors:
                        </strong>{' '}
                        Standing up for hardworking families who make our
                        communities stronger and deserve to feel safe and
                        welcome.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                        style={{ backgroundColor: '#8B4FAF' }}
                      ></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">
                          Defending LGBTQ+ Lives:
                        </strong>{' '}
                        Fighting for our children and neighbors to live
                        authentically, with dignity and the full protection of
                        the law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              I've worked full-time, studied full-time, and parented full-time. I
              know what it means to keep going when the odds are stacked against
              you.
            </p>
          </div>

          {/* ✅ Call to Action */}
          <div className="text-center">
            <Card className="p-8" style={{ backgroundColor: '#4A1A5C' }}>
              <h3 className="text-2xl mb-4 text-white">
                Have Questions About My Positions?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                I believe in transparent governance and want to hear from you.
                Reach out with questions about my policy positions or to share
                your own priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    navigate('/contact', {
                      state: { source: 'Priorities Page - Contact Me' },
                    })
                  }
                  className="px-8 py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: 'white', color: '#4A1A5C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                    e.currentTarget.style.color = '#6B2E8C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#4A1A5C';
                  }}
                >
                  Contact Me
                </button>

                <button
                  onClick={() =>
                    navigate('/contact', {
                      state: {
                        source: 'Priorities Page - Schedule a Meeting',
                      },
                    })
                  }
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
