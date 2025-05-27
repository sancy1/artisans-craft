
// // src/app/layout.tsx

// import '@/globals.css';
// import { Inter, Cardo } from 'next/font/google';
// import { DM_Serif_Display } from 'next/font/google';
// import { Providers } from './providers';
// import ClientHeader from '../components/layout/ClientHeader';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' });

// export const metadata = {
//   title: 'Artisan Marketplace',
//   description: 'A curated marketplace for handcrafted goods',
// };

// const cardo = Cardo({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-cardo',
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
//       <body className="bg-[#F9F4EF] text-[#3E3E3E] antialiased font-sans flex flex-col min-h-screen">
//         <Providers>
//           <ClientHeader />
//           <main className="flex-grow max-w-7xl mx-auto px-6 pt-4">
//             {children}
//           </main>
//           <footer className="px-6 py-8 bg-[#F0ECE8] text-center text-sm text-[#6C6C6C]">
//             &copy; {new Date().getFullYear()} Handcrafted Haven Marketplace. WWD430 Team 12
//           </footer>
//         </Providers>
//       </body>
//     </html>
//   );
// }








// // src/app/layout.tsx

// import '@/globals.css';
// import { Inter } from 'next/font/google';
// import { DM_Serif_Display } from 'next/font/google';
// import { Providers } from './providers';
// import ClientHeader from '../components/layout/ClientHeader';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' });

// export const metadata = {
//   title: 'Artisan Marketplace',
//   description: 'A curated marketplace for handcrafted goods',
// };


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
//       <body className="bg-[#F9F4EF] text-[#3E3E3E] antialiased font-sans flex flex-col min-h-screen">
//         <Providers>
//           <ClientHeader />
//           <main className="flex-grow max-w-7xl mx-auto px-6 pt-4">
//             {children}
//           </main>
//           <footer className="px-6 py-8 bg-[#F0ECE8] text-center text-sm text-[#6C6C6C]">
//             &copy; {new Date().getFullYear()} Handcrafted Haven Marketplace. WWD430 Team 12
//           </footer>
//         </Providers>
//       </body>
//     </html>
//   );
// }













// src/app/layout.tsx

// import type { Metadata } from 'next'
// import { Inter, Cardo } from 'next/font/google'
// import './globals.css'
// import { Providers } from './providers'
// import Header from '../components/layout/header';

// export const metadata: Metadata = {
//   title: 'Handcrafted Haven',
//   description: 'Artisan Marketplace',
// }

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const cardo = Cardo({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-cardo',
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${cardo.variable} min-h-screen bg-amber-50`}>
//         <Providers>
//           <header className="bg-amber-800 text-amber-50 p-4 shadow-md">
//             <div className="container mx-auto flex justify-between items-center">
//               <h1 className="text-2xl font-serif font-bold">Handcrafted Haven</h1>
//               <div className="flex items-center space-x-4">
//                 <Header />
//               </div>
//             </div>
//           </header>
//           <main className="container mx-auto p-4">
//             {children}
//           </main>
//         </Providers>
//       </body>
//     </html>
//   )
// }





// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Cardo } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '../components/layout/header';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
  description: 'Artisan Marketplace',
}

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cardo',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cardo.variable} min-h-screen bg-amber-50`}>
        <Providers>
          <header className="bg-amber-800 text-amber-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
              <h1 className="text-2xl font-serif font-bold">Handcrafted Haven</h1>
              
              <div className="flex items-center gap-6">
                <nav>
                  <ul className="flex space-x-6">
                    <li>
                      <Link href="/" className="hover:text-amber-200 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-amber-200 transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-amber-200 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                
                <div className="ml-6">
                  <Header />
                </div>
              </div>
            </div>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}