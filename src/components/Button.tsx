import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import React from "react";

interface ButtonProps {
  className?: string;
  size?: "sm" | "default" | "lg";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  onClick,
  ...props
}: ButtonProps & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>)) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  // If href is provided, render as anchor tag
  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick();
      }
      // Handle smooth scroll for anchor links
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    return (
      <a 
        href={href} 
        className={`${classes} inline-block no-underline`}
        onClick={handleClick}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={classes} onClick={onClick} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
