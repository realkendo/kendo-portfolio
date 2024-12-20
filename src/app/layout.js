import './globals.css'
import Header from './components/Header';


export const metadata = {
  title: 'Your Portfolio',
  description: 'A showcase of my work and skills',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

