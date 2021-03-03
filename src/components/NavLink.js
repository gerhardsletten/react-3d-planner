import React from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'
import { Link, useRoute } from 'wouter'

export const Nav = styled('nav')([
  {
    'a.active': tw`underline`,
  },
])

const NavLink = ({ href, children }) => {
  const [isActive] = useRoute(href)
  return (
    <Link
      href={href}
      tw="block mb-2 hocus:underline text-white"
      className={isActive ? 'active' : ''}
    >
      {children}
    </Link>
  )
}

export default NavLink
