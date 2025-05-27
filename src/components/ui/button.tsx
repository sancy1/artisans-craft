
// // src/components/ui/button.tsx
// 'use client';

// import { clsx } from 'clsx';
// import { ReactNode } from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   variant?: 'primary' | 'secondary' | 'outline';
//   className?: string;
// }

// export function Button({ 
//   children, 
//   variant = 'primary', 
//   className,
//   ...rest 
// }: ButtonProps) {
//   const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  
//   const variantClasses = {
//     primary: 'bg-[#B55B3D] text-white hover:bg-[#9E4F37] focus-visible:outline-[#B55B3D]',
//     secondary: 'bg-[#F9F4EF] text-[#3E3E3E] hover:bg-[#E6E1DC] focus-visible:outline-[#F9F4EF]',
//     outline: 'border border-[#E6E1DC] text-[#3E3E3E] hover:bg-[#F9F4EF] focus-visible:outline-[#E6E1DC]',
//   };

//   return (
//     <button
//       className={clsx(baseClasses, variantClasses[variant], className)}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }












// src/components/ui/button.tsx

'use client';

import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-amber-600 px-4 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 active:bg-amber-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
