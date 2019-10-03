import firebase from './config'

const register = async ({email, password}) => {
  return await firebase.auth().createUserWithEmailAndPassword(email, password)
}

const login = async ({email, password}) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}

const logout = async () => await firebase.auth().signOut()

export const auth = {
  register,
  login,
  logout
}
