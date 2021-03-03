import React from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { Link, useLocation } from 'wouter'

function Homepage(props) {
  const [location] = useLocation()
  return (
    <div tw="p-4">
      <h1 tw="text-3xl font-bold text-primary mb-4">
        The page "{location}" was not found
      </h1>
      <p css={tw`text-lg mb-4`}>
        Please return to{' '}
        <Link href="/" tw="text-primary underline hocus:(no-underline)">
          the homepage
        </Link>
      </p>
    </div>
  )
}

export default Homepage
