import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdTokenResult,
  type User,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import type { AuthUser, Role } from '../types/auth'

export async function loginWithEmailPassword(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}

export async function registerWithEmailPassword(email: string, password: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  return cred.user
}

export async function logout() {
  await signOut(auth)
}

async function getUserWithRole(user: User): Promise<AuthUser> {
  const idTokenResult = await getIdTokenResult(user)
  const role = idTokenResult.claims.role as Role | undefined

  return {
    uid: user.uid,
    email: user.email,
    role: role ?? null,
  }
}

export function subscribeToAuthChanges(
  callback: (user: AuthUser | null) => void,
  errorCallback?: (error: unknown) => void,
) {
  return onAuthStateChanged(
    auth,
    async (firebaseUser) => {
      if (!firebaseUser) {
        callback(null)
        return
      }

      try {
        const userWithRole = await getUserWithRole(firebaseUser)
        callback(userWithRole)
      } catch (err) {
        console.error('Error getting user role', err)
        errorCallback?.(err)
        callback({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: null,
        })
      }
    },
    (error) => {
      console.error('Auth state change error', error)
      errorCallback?.(error)
      callback(null)
    },
  )
}

