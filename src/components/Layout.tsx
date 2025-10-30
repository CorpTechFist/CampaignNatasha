import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Endorsements', href: '/endorsements' },
    { name: 'Priorities', href: '/priorities' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  const scrollToGetInvolved = () => {
    if (location.pathname === '/') {
      const getInvolvedSection = document.querySelector('#get-involved');
      if (getInvolvedSection) {
        getInvolvedSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToGetInvolved: true } });
    }
    setMobileMenuOpen(false);
  };

  // Handle scrolling when navigating back to home with scroll state
  useEffect(() => {
    if (location.state?.scrollToGetInvolved) {
      setTimeout(() => {
        const getInvolvedSection = document.querySelector('#get-involved');
        if (getInvolvedSection) {
          getInvolvedSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear the state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F8F9FA'}}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <Logo variant="dark" size="xs" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    location.pathname === item.href ? 'font-medium' : ''
                  }`}
                  style={{
                    color: location.pathname === item.href ? '#6B2E8C' : '#374151'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#6B2E8C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === item.href ? '#6B2E8C' : '#374151'}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="text-white"
                style={{backgroundColor: '#6B2E8C'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A1A5C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B2E8C'}
                onClick={() => window.open('https://secure.actblue.com/donate/natassja-grossman-1', '_blank', 'noopener,noreferrer')}
              >
                Donate
              </Button>
              <Button 
                className="text-white"
                style={{backgroundColor: '#6B2E8C'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A1A5C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B2E8C'}
                onClick={scrollToGetInvolved}
              >
                Get Involved
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
                style={{'--hover-color': '#6B2E8C'}}
                onMouseEnter={(e) => e.target.style.color = '#6B2E8C'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-left text-gray-700 transition-colors block ${
                      location.pathname === item.href ? 'font-medium' : ''
                    }`}
                    style={{color: location.pathname === item.href ? '#6B2E8C' : '#374151'}}
                    onMouseEnter={(e) => e.target.style.color = '#6B2E8C'}
                    onMouseLeave={(e) => e.target.style.color = location.pathname === item.href ? '#6B2E8C' : '#374151'}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  className="w-full text-white"
                  style={{backgroundColor: '#6B2E8C'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1A5C'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#6B2E8C'}
                  onClick={() => {
                    window.open('https://secure.actblue.com/donate/natassja-grossman-1', '_blank', 'noopener,noreferrer');
                    setMobileMenuOpen(false);
                  }}
                >
                  Donate
                </Button>
                <Button 
                  className="w-full text-white"
                  style={{backgroundColor: '#6B2E8C'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1A5C'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#6B2E8C'}
                  onClick={scrollToGetInvolved}
                >
                  Get Involved
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{backgroundColor: '#E3D1EC'}} className="text-gray-900 py-12 border-t border-purple-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <Logo variant="dark" size="sm" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building a Utah where every person has the chance to live with safety, dignity, and opportunity.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-6 text-gray-900">Get Involved</h4>
              <ul className="space-y-3 text-gray-700">
                <li><Link to="/volunteer" className="text-left hover:text-gray-900 transition-colors cursor-pointer" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Volunteer</Link></li>
                <li><button onClick={() => window.open('https://secure.actblue.com/donate/natassja-grossman-1', '_blank', 'noopener,noreferrer')} className="text-left hover:text-gray-900 transition-colors cursor-pointer" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Donate</button></li>
                <li><Link to="/news" className="text-left hover:text-gray-900 transition-colors cursor-pointer" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Events</Link></li>
                <li><Link to="/contact" className="text-left hover:text-gray-900 transition-colors cursor-pointer" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-6 text-gray-900">Connect</h4>
              <ul className="space-y-3 text-gray-700">
                <li><a href="https://www.facebook.com/profile.php?id=61577783504235" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Facebook</a></li>
                <li><a href="https://www.instagram.com/natassja.grossman.4utah?igsh=d3I1MDQ3aW83YWhz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Instagram</a></li>
                <li><a href="mailto:Info@natassjagrossman.com" className="hover:text-gray-900 transition-colors" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>Info@natassjagrossman.com</a></li>
                <li><a href="tel:+18018767082" className="hover:text-gray-900 transition-colors" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#374151'}>(801) 876-7082</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-300" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2 md:space-y-0">
              <p>&copy; 2024 Natassja Grossman for Utah. All rights reserved.</p>
              <p>Website by <a href="https://techfistglobal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" style={{'--hover-color': '#6B2E8C'}} onMouseEnter={(e) => e.target.style.color = '#6B2E8C'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>Techfist Global Inc</a></p>
            </div>
            <p>Paid for by Friends of Natassja Grossman</p>
          </div>
        </div>
      </footer>
    </div>
  );
}