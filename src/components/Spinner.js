import React from 'react'
import tw, { styled, theme } from 'twin.macro'
import { keyframes } from 'goober'

const Container = styled('div')([
  tw`flex flex-1 items-center justify-center text-xl`,
])
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Spinner = styled('div')`
  display: block;
  position: relative;
  font-size: 2em;
  margin: 0 auto 3rem;
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
    border-radius: 50%;
    border: 0.1em solid transparent;
    border-top-color: ${theme`colors.primary`};
    animation: ${rotate} 0.6s linear infinite;
  }
`
const Label = styled('div')([tw`text-lg`])

const SpinnerView = ({ label, ...props }) => (
  <Container {...props}>
    <div>
      <Spinner />
      <Label>{label}</Label>
    </div>
  </Container>
)

export default SpinnerView
