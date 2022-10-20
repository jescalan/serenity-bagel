import Image from 'next/image'
import logo from './img/logo.svg'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Testing</title>
      </head>
      <body>
        <header>
          <Image src={logo} alt="" />
        </header>
        {children}
      </body>
    </html>
  )
}
