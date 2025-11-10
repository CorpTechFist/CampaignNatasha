import natassjaPortrait from '../assets/4f0454f2a5404a6aa4c97c82035a13ac0ecc285d.png';
import natassjamobile from '../assets/heromobile.jpeg';
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
     <section
        id="home"
        className="relative w-screen overflow-hidden"
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        {/* ✅ Responsive height control */}
        <style>{`
          /* Default: Mobile */
          #home {
            height: 160px !important;
          }

          /* Tablet and above */
          @media (min-width: 640px) {
            #home {
              height: 400px !important;
            }
          }

          /* Large and extra-large */
          @media (min-width: 1024px) {
            #home {
              height: 600px !important;
            }
          }
        `}</style>
      {/* === Background Layer === */}
           <div className="absolute inset-0">
             {/* Desktop/Tablet Image */}
             <img
               src={natassjaPortrait}
               alt="Natassja Grossman - Candidate for Utah"
               className="hidden sm:block w-full h-full object-cover object-center"
               style={{
                 filter: 'brightness(1.15) saturate(1.1) contrast(1.05)',
                 objectPosition: 'center top',
               }}
             />
   
             {/* Mobile Image */}
             <img
               src={natassjamobile}
               alt="Natassja Grossman - Candidate for Utah"
               className="block sm:hidden w-full h-full object-cover object-top"
               style={{
                 filter: 'brightness(1.05) saturate(1.05)',
               }}
             />
     
       {/* ✅ White + Purple Gradient Overlay */}
    <div className="absolute inset-0">
      {/* Soft white light blend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 65% 25%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 80%)',
          mixBlendMode: 'soft-light',
        }}
      ></div>

      {/* Smooth purple gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(74, 26, 92, 0.8) 0%, rgba(74, 26, 92, 0.57) 35%, rgba(74, 26, 92, 0.25) 60%, transparent 100%)',
        }}
      ></div>
    </div>
  </div>
        {/* === Responsive Text Styling === */}
<style>{`
  /* Default: Mobile */
 
  .hero-heading {
    font-weight: 700;
    line-height: 1.1;
    font-size:20px;
    margin-top:10px;
  }

  .hero-subtext {
    font-size: 12px;
    line-height: 1.3;
    max-width: 240px; /* control width for natural wrapping */
    word-break: keep-all;
  }

  .hero-button {
    padding: 6px 12px;
    font-size: 10px;
    
  }

  /* Tablet and above */
  @media (min-width: 640px) {
    .hero-heading {
      font-size: 48px;
    }
    .hero-subtext {
      font-size: 18px;
      line-height: 1.4;
      max-width: 480px;
    }
    .hero-button {
      padding: 10px 18px;
      font-size: 16px;
    }
  }

  /* Large screens */
  @media (min-width: 1024px) {
    .hero-heading {
      font-size: 100px;
    }
    .hero-subtext {
      font-size: 28px;
      line-height: 1.2;
      max-width: 600px;
    }
    .hero-button {
      padding: 14px 24px;
      font-size: 18px;
    }
  }

  /* Extra large (optional fine-tune) */
  @media (min-width: 1280px) {
    .hero-heading {
      font-size: 100px;
    }
  }
`}</style>
      {/* Text content overlaid on image */}
   <div className="relative h-full flex items-center justify-center lg:justify-start">
    <div className="px-4 sm:px-8 lg:pl-24 xl:pl-32 max-w-none w-full lg:w-1/2">
      <div className="space-y-4 sm:space-y-6 text-white text-left ml-[30px] sm:ml-[50px]">
        <div className="space-y-3">
          <h1 className="hero-heading">
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
