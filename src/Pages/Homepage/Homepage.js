import React from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { Link } from 'wouter'

function Homepage() {
  return (
    <div tw="p-4 flex flex-1 items-center justify-center">
      <div tw="text-center">
        <h1 tw="text-3xl font-bold text-primary mb-4">
          Trying out React + THREEJS
        </h1>
        <p css={tw`text-lg mb-4`}>
          Example used CRA, twin-macro, wouter and react-three-fiber
        </p>
        <Link
          href="/planner"
          tw="bg-primary text-xl shadow-md text-white inline-block px-4 py-1 rounded hocus:(shadow-2xl ring-4 ring-gray-800 ring-opacity-50)"
        >
          Enter 3D planner »
        </Link>
      </div>
    </div>
  )
}

export default Homepage
