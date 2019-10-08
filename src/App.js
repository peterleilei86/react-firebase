import React from 'react'
import {useAuth} from './contexts/auth-context'
import Loader from './Loader'

const loadAuthApp = () => import('./Authenticated-app')
const AuthenticatedApp = React.lazy(loadAuthApp)
const UnauthenticatedApp = React.lazy(() => import('./Unauthenticated-app'))

function App() {
  const {user} = useAuth()

  React.useEffect(() => {
    loadAuthApp()
  }, [])

  return (
    <React.Suspense fallback={<Loader />}>
      {!!user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
