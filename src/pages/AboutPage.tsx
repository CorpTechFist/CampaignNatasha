import { Card } from '../components/ui/card';
import { Heart, Users, Shield } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import aboutHeroImage from 'asset/5dc22cb875e1c6014fa82dc698be4a69e3394e35.png';
import portraitImage from 'asset/e205e87eafe84b0099a7fed9ed3a56d21fa6a6c6.png';
import newPortraitImage from 'asset/f10f1755d3173a16f2bf65025713d8f9960edc4e.png';
import rightPortraitImage from 'asset/3e1f0e09123bfdadf36fd79df2530328202b86e7.png';

export function AboutPage() {
  return (
    <>
      {/* Custom Hero */}
      <section className="relative overflow-hidden w-screen" style={{height: '600px', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
        <div className="absolute inset-0">
          {/* Gradient background - purple gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(74, 26, 92, 0.75) 0%, rgba(74, 26, 92, 0.4) 50%, rgba(74, 26, 92, 0.2) 100%)'
          }}></div>
        </div>
        
        {/* Text content overlaid on image */}
        <div className="relative h-full flex items-center">
          <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-3xl">
            <div className="space-y-6 text-white">
              <div className="space-y-4">
                <h1 className="lg:text-6xl leading-tight text-[96px]" style={{color: '#FFFFFF'}}>
                  About
                </h1>
              </div>
            </div>
          </div>
          <img 
            src={rightPortraitImage}
            alt="Natassja Grossman with daughter"
            className="absolute bottom-0 h-full object-contain"
            style={{
              maxWidth: '500px',
              objectPosition: 'bottom right',
              right: '40px'
            }}
          />
        </div>
      </section>
      <section id="about" className="py-20" style={{backgroundColor: '#F8F9FA'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm not a career politician. I'm a mom who's tired of seeing families like ours ignored.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* My Promise */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Heart className="h-16 w-16" style={{color: '#A76BCF'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">My Promise</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                    I promise to be a voice for families like mine. The people working hard, raising kids, and striving for stability in a system that often overlooks us. I will always lead with compassion, honesty, and courage, and I'll never forget who I'm here to serve: you.
                  </p>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Users className="h-16 w-16" style={{color: '#6B2E8C'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">My Story</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                    As a single LGBT mom, I've walked the path many Utah families know too well — facing uncertainty, rebuilding from scratch, and fighting every day for something better. Through my work as a community organizer, I've seen how our neighbors struggle with the same challenges I've faced. I made my daughter a promise for a brighter future, and I refuse to let the current direction of our state break that promise. That's why I'm running — not just for my family, but for every family that deserves the chance to thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* My Fight */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Shield className="h-16 w-16" style={{color: '#8B4FAF'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-6 text-gray-900">My Fight for You</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl">
                    As a single mom who's faced real challenges, I know what it means to fight for what matters. I'm running to ensure every Utah family has the same opportunities I want for mine:
                  </p>
                  <div className="space-y-4 max-w-4xl">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#8B4FAF'}}></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">True Equality for Everyone:</strong> Building a Utah where your zip code, background, or who you love doesn't determine your future.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#8B4FAF'}}></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Protecting Our Immigrant Neighbors:</strong> Standing up for hardworking families who make our communities stronger and deserve to feel safe and welcome.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#8B4FAF'}}></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Defending LGBTQ+ Lives:</strong> Fighting for our children and neighbors to live authentically, with dignity and the full protection of the law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              I've worked full-time, studied full-time, and parented full-time. I know what it means to keep going when the odds are stacked against you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
