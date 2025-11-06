import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useLocation, useNavigate } from 'react-router-dom';

export function ContactPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialSubject =
    location.state?.source === "Priorities Page - Schedule a Meeting"
      ? "Priorities – Schedule a Meet"
      : location.state?.source === "Volunteer Coordinator"
      ? "Volunteer Coordinator"
      : "";

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your EmailJS IDs
  const SERVICE_ID = 'service_7vvgtse';
  const TEMPLATE_ID = 'template_qbniem2';
  const PUBLIC_KEY = 'zUpnf7tygd8DbNcQN';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
          sourcePage:
            location.state?.source || "Contact Page",
        },
        PUBLIC_KEY
      );

      toast.success("✅ Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('❌ Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <>
      <PageHero title="Contact" />
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I want to hear from you. Whether you have questions, want to volunteer, or just want to share your story, let's connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl mb-6 text-gray-900">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="firstName">Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me what's on your mind..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full text-white"
                  style={{backgroundColor: '#6B2E8C'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A1A5C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B2E8C'}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Contact Volunteer Coordinator Button */}
              <Button 
                size="lg"
                variant="outline"
                className="mt-6 border border-purple-700 w-full"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#6B2E8C',
                  color: '#6B2E8C',
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
                  navigate('/contact', {
                    state: { source: 'Volunteer Coordinator' },
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Contact Volunteer Coordinator
              </Button>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 mr-3" style={{color: '#6B2E8C'}} />
                  <h3 className="text-xl text-gray-900">Email</h3>
                </div>
                <a href="mailto:Info@natassjagrossman.com" className="text-gray-600 hover:text-purple-600 transition-colors">Info@natassjagrossman.com</a>
                <p className="text-sm text-gray-500 mt-2">We'll get back to you within 24 hours</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 mr-3" style={{color: '#8B4FAF'}} />
                  <h3 className="text-xl text-gray-900">Phone</h3>
                </div>
                <a href="tel:+18018767082" className="text-gray-600 hover:text-purple-600 transition-colors">(801) 876-7082</a>
                <p className="text-sm text-gray-500 mt-2">Campaign office hours: Mon-Fri 9AM-6PM</p>
              </Card>

              {/* <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 mr-3" style={{color: '#A76BCF'}} />
                  <h3 className="text-xl text-gray-900">Campaign Office</h3>
                </div>
                <p className="text-gray-600">123 Main Street<br />Provo, UT 84601</p>
                <p className="text-sm text-gray-500 mt-2">Open for volunteers and visitors</p>
              </Card> */}

              {/* <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-3" style={{color: '#6B2E8C'}} />
                  <h3 className="text-xl text-gray-900">Upcoming Events</h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 pl-4" style={{borderColor: '#8B4FAF'}}>
                    <p className="text-gray-900">Town Hall Meeting</p>
                    <p className="text-sm text-gray-600">Saturday, Dec 7, 2PM</p>
                    <p className="text-sm text-gray-500">Provo Community Center</p>
                  </div>
                  <div className="border-l-4 pl-4" style={{borderColor: '#A76BCF'}}>
                    <p className="text-gray-900">Coffee with the Candidate</p>
                    <p className="text-sm text-gray-600">Tuesday, Dec 10, 10AM</p>
                    <p className="text-sm text-gray-500">Local Coffee Shop</p>
                  </div>
                </div>
              </Card> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
