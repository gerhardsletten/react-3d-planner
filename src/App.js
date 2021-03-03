import React, { Suspense } from 'react'
import 'twin.macro'
import { theme } from 'twin.macro'
import { createGlobalStyles } from 'goober/global'
import { Switch, Route, Link } from 'wouter'

import NavLink, { Nav } from 'components/NavLink'
import Spinner from 'components/Spinner'
import NotFound from './Pages/NotFound/NotFound'

const Homepage = React.lazy(() => import('./Pages/Homepage/Homepage'))
const Planner = React.lazy(() => import('./Pages/Planner/Planner'))

const GlobalStyles = createGlobalStyles`
  body {
    background-color: ${theme`colors.gray.700`};
  }
`

function App() {
  return (
    <div tw="text-white flex bg-gray-700 flex-col min-h-screen">
      <GlobalStyles />
      <header tw="p-4 bg-gray-800 border-b border-gray-700">
        <Link href="/" tw="text-primary font-bold text-lg">
          React 3D planner
        </Link>
      </header>
      <main tw="flex-1 flex flex-col md:flex-row">
        <aside tw="bg-gray-800 p-4 md:w-64">
          <Nav>
            <NavLink href="/">Homepage</NavLink>
            <NavLink href="/planner">3d planner</NavLink>
          </Nav>
        </aside>
        <div tw="flex-1 flex flex-col overflow-hidden">
          <Suspense fallback={<Spinner label="Loading page" />}>
            <Switch>
              <Route path="/" component={Homepage} />
              <Route path="/planner" component={Planner} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default App
