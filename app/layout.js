import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import NavBar from './componenet/NavBar';
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eziane`s portfolio',
  description: 'Created by Eziane Abderrahim',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white p-5 m-0 font-firaCode rounded-[8px]">
        <div className=' p-0 m-0 border border-primary rounded-[8px]'>
          <NavBar />
          {children}
          <footer className='h-[50px] border border-secondary bg-primary rounded-b-[8px]'>
            foooter
          </footer>
        </div>
      </body >
    </html >
  )
}
