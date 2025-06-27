import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-[#00A58D] hover:bg-[#008d79] text-white',           
  secondary: 'bg-[#FF8760] hover:bg-[#e66f4a] text-white',         
  accent: 'bg-[#B96053] hover:bg-[#a65044] text-white',            
  outline: 'border border-[#00A58D] hover:bg-[#F5FFFE] text-[#00A58D]',
  ghost: 'bg-transparent hover:bg-[#F5FFFE] text-[#021613]',       
  danger: 'bg-red-500 hover:bg-red-600 text-white',                
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = React.forwardRef(({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  asChild = false,
  href,
  to,
  ...props
}, ref) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A58D] disabled:opacity-50 disabled:pointer-events-none';

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (asChild) {
    return React.cloneElement(children, {
      className: styles,
      ref,
      ...props,
    });
  }

  if (href) {
    return (
      <a href={href} className={styles} ref={ref} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={styles} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
