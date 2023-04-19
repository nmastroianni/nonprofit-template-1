import * as React from 'react'
import { Oswald } from 'next/font/google'
const heading = Oswald({ subsets: ['latin'] })
const Heading = ({ as: Comp = 'h2', size = null, children, className }) => {
  return (
    <Comp
      className={`${heading.className} ${
        size === '7xl'
          ? `text-6xl leading-[4rem] lg:text-7xl`
          : size === '6xl'
          ? `text-5xl lg:text-6xl`
          : size === '5xl'
          ? `text-4xl lg:text-5xl`
          : size === '4xl'
          ? `text-3xl lg:text-4xl`
          : size === '3xl'
          ? `text-2xl lg:text-3xl`
          : size === '2xl'
          ? `text-xl lg:text-2xl`
          : size === 'xl'
          ? `text-lg lg:text-xl`
          : `prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto`
      } ${className}`}
    >
      {children}
    </Comp>
  )
}
export default Heading
