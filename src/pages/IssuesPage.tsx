import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';
import { GraduationCap, Heart, Home, Users, Briefcase, Leaf } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export function IssuesPage() {
  const issues = [
    {
      icon: <GraduationCap className="h-8 w-8" style={{color: '#6B2E8C'}} />,
      title: "Education",
      description: "Ensuring every child has access to quality education, from early childhood through higher education. Supporting teachers and investing in our schools."
    },
    {
      icon: <Heart className="h-8 w-8" style={{color: '#A76BCF'}} />,
      title: "Healthcare",
      description: "Making healthcare accessible and affordable for all families. Protecting reproductive rights and mental health services."
    },
    {
      icon: <Home className="h-8 w-8" style={{color: '#8B4FAF'}} />,
      title: "Housing",
      description: "Addressing the housing crisis with policies that make homeownership achievable and protect renters from exploitation."
    },
    {
      icon: <Users className="h-8 w-8" style={{color: '#C7A2DC'}} />,
      title: "Civil Rights",
      description: "Fighting for equality and justice for all communities, including LGBTQ+ rights, immigrant protections, and racial equity."
    },
    {
      icon: <Briefcase className="h-8 w-8" style={{color: '#6B2E8C'}} />,
      title: "Economic Justice",
      description: "Supporting working families with fair wages, affordable childcare, and policies that help people build economic security."
    },
    {
      icon: <Leaf className="h-8 w-8" style={{color: '#8B4FAF'}} />,
      title: "Environment",
      description: "Protecting Utah's natural beauty and addressing climate change for future generations while supporting clean energy jobs."
    }
  ];

  return (
    <>
      <PageHero title="Issues" />
      <section id="issues" className="py-20" style={{backgroundColor: '#F8F9FA'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-gray-900">Key Issues</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the fights that matter most to Utah families. Together, we can build policies that work for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {issues.map((issue, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {issue.icon}
                <h3 className="text-xl ml-3 text-gray-900">{issue.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{issue.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">Detailed Policy Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                My policy positions are rooted in lived experience and community input. I believe in evidence-based solutions that address the real challenges facing Utah families.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every policy I support will be evaluated through the lens of equity, effectiveness, and impact on working families. Because good policy should lift everyone up, not leave people behind.
              </p>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1676313496173-e3b325353087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY3klMjBpc3N1ZXMlMjBoZWFsdGhjYXJlJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1OTM5Nzk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Policy documents and healthcare"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
