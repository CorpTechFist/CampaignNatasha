import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { ChevronRight, Heart, Users, Shield } from 'lucide-react';
import natassjaPortrait from 'asset/4f0454f2a5404a6aa4c97c82035a13ac0ecc285d.png';
 
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
      <section id="home" className="relative overflow-hidden w-screen" style={{height: '600px', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
        {/* Full-width portrait image background */}
        <div className="absolute inset-0">
          <img 
            src={natassjaPortrait}
            alt="Natassja Grossman - Candidate for Utah"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.15) saturate(1.1) contrast(1.05)',
              objectPosition: 'center 0%'
            }}
          />
          
          {/* White overlay to brighten the top/hair area */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 800px 400px at 70% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)'
          }}></div>
          
          {/* Gradient overlay for text readability - purple gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(74, 26, 92, 0.90) 0%, rgba(74, 26, 92, 0.6) 40%, transparent 100%)'
          }}></div>
        </div>
        
        {/* Text content overlaid on image */}
        <div className="relative h-full flex items-center">
          <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-3xl">
            <div className="space-y-6 text-white">
              <div className="space-y-4">
                <h1 className="lg:text-6xl leading-tight text-[96px]">
                  A Voice for<br/>
                  <span style={{color: '#4A1A5C'}}>Every Family</span>
                </h1>
                <p className="text-xl leading-relaxed max-w-lg text-purple-50">
                  Single mom, community organizer, and fierce advocate for equity, freedom, and opportunity in Utah.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="text-white shadow-lg px-8 py-3"
                  style={{backgroundColor: '#6B2E8C'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A1A5C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B2E8C'}
                  onClick={() => scrollToSection('#about')}
                >
                  Learn My Story
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 text-gray-900">Mission Statement</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg p-8 mb-8" style={{backgroundColor: '#F8F9FA'}}>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                My mission is simple: to build a Utah where every person has the chance to live with safety, dignity, and opportunity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                That means protecting the programs that help families get back on their feet, ensuring schools and healthcare are strong and accessible, and fighting for the rights of every community — women, immigrants, LGBTQ+ people, working families, and future generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe government should work for people, not against them. And I believe that together, we can create a Utah that reflects our values of fairness, compassion, and resilience.
              </p>
            </div>

            <div className="text-center">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1672862673441-edba894df3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1dGFoJTIwc3RhdGUlMjBjYXBpdG9sJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU5Mzk3NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Utah State Capitol Building"
                className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 text-white relative overflow-hidden" style={{backgroundColor: '#4A1A5C'}}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{backgroundColor: '#8B4FAF'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full" style={{backgroundColor: '#A76BCF'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full" style={{backgroundColor: '#C7A2DC'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6">Join the Movement</h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: '#C7A2DC'}}></div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Together, we can build a Utah where every voice matters and every family thrives
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#C7A2DC'}}></div>
                  <p className="text-lg text-purple-100 leading-relaxed">
                    I'm not a career politician. I'm a mom who's tired of seeing families like ours ignored. I believe it's time for a new generation to stand up and make our voices heard.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#A76BCF'}}></div>
                  <p className="text-lg text-purple-100 leading-relaxed">
                    You don't have to be a political insider to make change. You just have to care—and I care deeply about our community, our kids, and our future.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#8B4FAF'}}></div>
                  <p className="text-lg text-purple-100 leading-relaxed">
                    Join me, and together we can turn Utah County into a place where people feel seen, valued, and represented.
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl mb-4 text-[rgb(9,3,3)]">Ready to Make a Difference?</h3>
                <p className="text-[rgb(24,12,23)] mb-6">Every movement starts with people like you. Choose how you want to get involved.</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="text-white w-full"
                    style={{backgroundColor: '#6B2E8C'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B4FAF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B2E8C'}
                    onClick={() => {
                      navigate('/contact');
                    }}
                  >
                    Volunteer Today
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white border-2 w-full"
                    style={{
                      borderColor: 'white', 
                      borderWidth: '2px',
                      backgroundColor: 'transparent',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = '#6B2E8C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'white';
                    }}
                    onClick={() => {
                      window.open('https://secure.actblue.com/donate/natassja-grossman-1', '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column - Visual */}
            <div className="relative">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxZHxkaXZlcnNlJTIwcGVvcGxlJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1OTI4NjI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="People working together in community"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Overlay stats */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl text-gray-900 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl text-gray-900 mb-1">Together</div>
                    <div className="text-sm text-gray-600">We Rise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
