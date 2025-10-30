import natassjaPortrait from 'asset/4f0454f2a5404a6aa4c97c82035a13ac0ecc285d.png';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
}

export function PageHero({ 
  title, 
  subtitle, 
  showButton = false, 
  buttonText = 'Learn More',
  onButtonClick,
  backgroundImage
}: PageHeroProps) {
  const bgImage = backgroundImage || natassjaPortrait;
  
  return (
    <section className="relative overflow-hidden w-screen" style={{height: '600px', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
      {/* Full-width portrait image background */}
      <div className="absolute inset-0">
        <img 
          src={bgImage}
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
              <h1 className="lg:text-6xl leading-tight text-[96px]" style={{color: '#FFFFFF'}}>
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl leading-relaxed max-w-lg text-purple-50">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
