import natassjaPortrait from '../assets/4f0454f2a5404a6aa4c97c82035a13ac0ecc285d.png';

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
           src={natassjaPortrait}
           alt="Natassja Grossman - Candidate for Utah"
           className="
             w-full h-full object-cover
             md:object-center
             object-top
             sm:block hidden
           "
           style={{
             filter: 'brightness(1.15) saturate(1.1) contrast(1.05)',
             objectPosition: 'center 0%',
           }}
         />
     
         {/* On mobile, show a smaller/cropped image */}
         <img
           src={natassjaPortrait}
           alt="Natassja Grossman - Candidate for Utah"
           className="
             w-full h-72 object-cover object-top
             sm:hidden block
           "
           style={{
             filter: 'brightness(1.1) saturate(1.05)',
           }}
         />
     
         {/* White overlay to brighten the top/hair area */}
         <div
           className="absolute inset-0"
           style={{
             background:
               'radial-gradient(ellipse 800px 400px at 70% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)',
           }}
         ></div>
     
         {/* Gradient overlay for text readability */}
         <div
           className="absolute inset-0"
           style={{
             background:
               'linear-gradient(to right, rgba(74, 26, 92, 0.90) 0%, rgba(74, 26, 92, 0.6) 40%, transparent 100%)',
           }}
         ></div>
       </div>
      
      {/* Text content overlaid on image */}
      <div className="relative h-full flex items-center justify-center lg:justify-start">
  <div className="px-4 sm:px-8 lg:pl-24 xl:pl-32 max-w-none w-full lg:w-1/2">
    <div className="space-y-4 sm:space-y-6 text-white text-left ml-[50px]">
      <div className="space-y-3">
            <h1
          className="
            leading-tight
            text-5xl
            sm:text-7xl
            lg:text-[140px]
            xl:text-[180px]
            font-bold
          "
        >
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
