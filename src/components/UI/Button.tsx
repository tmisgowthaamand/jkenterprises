import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'scrapInquiry' | 'granuleCheckout' | 'secondary' | 'outline' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

export function Button({ 
  variant = 'secondary', 
  size = 'md', 
  href, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium font-["Inter"] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    scrapInquiry: 'bg-[#317039] text-white hover:bg-[#285a2f] focus:ring-[#317039]',
    granuleCheckout: 'bg-[#FF5B04] text-white hover:bg-[#e64f03] focus:ring-[#FF5B04]',
    secondary: 'bg-[#FAFAFA] text-[#2C2C2C] border border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    outline: 'bg-transparent text-[#FF5B04] border-2 border-[#FF5B04] hover:bg-[#FF5B04] hover:text-white focus:ring-[#FF5B04]',
    primary: 'bg-[#FF5B04] text-white hover:bg-[#e64f03] focus:ring-[#FF5B04]'
  };

  const finalClassName = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}