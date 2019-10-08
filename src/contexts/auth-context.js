import React from 'react'
import {getUser, login, register, logout} from '../firebase/api'
import {useAsync} from 'react-async'
import Loader from '../Loader'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const {data, error, isPending, isSettled, isRejected, reload} = useAsync({
    promiseFn: getUser
  })

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <Loader />
    }
    if (isRejected) {
      return (
        <div>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }

  const loggingin = (email, password) => login(email, password).then(reload)
  const registering = (email, password) => register(email, password).then(reload)

  return (
    <AuthContext.Provider value={{data, loggingin, registering}}>
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}
