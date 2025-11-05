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
    <section
      className="relative overflow-hidden w-screen"
      style={{
        height: '100vh',
        minHeight: '500px',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Natassja Grossman - Candidate for Utah"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(1.1) saturate(1.05) contrast(1.05)',
          }}
        />

        {/* Light overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 400px at 70% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)',
          }}
        />

        {/* Purple gradient for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(74, 26, 92, 0.9) 0%, rgba(74, 26, 92, 0.6) 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-6 sm:px-10 lg:px-20">
        <div className="max-w-2xl space-y-4 text-white">
          <h1
            className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ color: '#FFFFFF' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-purple-50">
              {subtitle}
            </p>
          )}
          {showButton && (
            <button
              onClick={onButtonClick}
              className="mt-4 px-6 py-3 bg-white text-purple-800 font-semibold rounded-full shadow hover:bg-purple-100 transition"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
