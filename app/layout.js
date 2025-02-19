// import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import { Montserrat, Manrope } from 'next/font/google';
import './globals.css';

import { Cursor, Footer, Header } from './components';

// const montserrat = Montserrat({ subsets: ['latin'] })

// const Manrope = localFont({
//   src: "./fonts/Manrope-Regular.woff2",
//   variable: '--font-family',
//   weight: "100 900",
// });

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext'],
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext'],
});

const Trajan = localFont({
  src: "./fonts/trajan_pro_3.woff2",
  variable: '--second-family',
  weight: "100 900",
});

export const metadata = {
  title: 'Дубровина',
  description: 'Стоматологическая клиника доктора Дубровиной',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${manrope.className} ${montserrat.variable} ${Trajan.variable}`}>
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
