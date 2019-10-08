import firebase from './config'

const localStorageKey = '__USER_CREDENTIAL_TOKEN__'

const auth = firebase.auth()

const register = async (email, password) => {
  try {
    const {user} = await auth.createUserWithEmailAndPassword(email, password)
    const token = await user.getIdToken()
    window.localStorage.setItem(localStorageKey, token)
    return user
  } catch (error) {
    console.log(error)
    throw new Error('Register user went wrong!')
  }
}

const login = async (email, password) => {
  try {
    const {user} = await auth.signInWithEmailAndPassword(email, password)
    const token = await user.getIdToken()
    window.localStorage.setItem(localStorageKey, token)
    return user
  } catch (error) {
    console.log(error)
    throw new Error('logging in went wrong!')
  }
}

const getToken = () => window.localStorage.getItem(localStorageKey)

const getUser = () => {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null)
  }
  return Promise.resolve(auth.currentUser)
}

const logout = async () => await auth.signOut()

export {register, login, logout, getUser}
