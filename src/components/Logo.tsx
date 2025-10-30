import logoImage from '../assets/d5f06d88b292c646654d009343286d6b655ec6c7.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizeClasses = {
    xs: 'h-16',
    sm: 'h-24',
    md: 'h-48',
    lg: 'h-64'
  };

  return (
    <div className="flex items-center">
      <img 
        src={logoImage}
        alt="Natassja Grossman for Utah"
        className={`${sizeClasses[size]} w-auto object-contain mix-blend-multiply`}
      />
    </div>
  );
}