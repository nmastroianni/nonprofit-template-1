import * as React from 'react'
import { Open_Sans } from 'next/font/google'
import { Oswald } from 'next/font/google'
const body = Open_Sans({ subsets: ['latin'] })
const heading = Oswald({ subsets: ['latin'] })
import Navbar from './Navbar'

const Layout = ({ children, footer, navigation }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const toggleMenu = setState => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1000) {
      setState(true)
    } else if (scrolled <= 1000) {
      setState(false)
    }
  }
  React.useEffect(() => {
    const toggleMenuVisibility = () => {
      toggleMenu(setIsScrolled)
    }
    window.addEventListener('scroll', toggleMenuVisibility)
    return () => {
      window.removeEventListener('scroll', toggleMenuVisibility)
    }
  }, [isScrolled])
  return (
    <div className="relative">
      <a
        href="#main-content"
        className=" btn-warning btn fixed -left-[320px] top-12 z-10 transform opacity-50 focus:translate-x-[380px] focus:opacity-100 "
      >
        Press Enter to Skip to Main Content
      </a>
      <div className={`relative flex min-h-screen flex-col ${body.className}`}>
        <Navbar
          id="navbar"
          heading={heading}
          data={navigation?.data}
          isScrolled={isScrolled}
        />
        <main id="main-content" className="h-[3000px]">
          {children}
        </main>
        {/* <Footer {...footer} />
        <Consent /> */}
      </div>
    </div>
  )
}
export default Layout
