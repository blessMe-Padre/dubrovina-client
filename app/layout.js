import { Inter } from 'next/font/google';
import './globals.css';

import { Footer, Header } from './components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Дубровина',
  description: 'Стоматологическая клиника доктора Дубровиной',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
