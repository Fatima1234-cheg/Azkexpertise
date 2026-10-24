import { initializeApp, deleteApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updatePassword,
  deleteUser
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc
} from 'firebase/firestore'

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhpIqKcvJ2sGqX1-505y4IkCHtX04secw",
  authDomain: "azkexpertise-f317b.firebaseapp.com",
  projectId: "azkexpertise-f317b",
  storageBucket: "azkexpertise-f317b.firebasestorage.app",
  messagingSenderId: "727106536608",
  appId: "1:727106536608:web:9a249b35d34989d06df5c5",
  measurementId: "G-8BYX4LE6V1"
}

// App principale
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Crée un utilisateur Firebase sans déconnecter l'admin actuel
const createUserAsAdmin = async (email, password) => {
  const secondaryApp = initializeApp(firebaseConfig, 'SecondaryApp_' + Date.now())
  const secondaryAuth = getAuth(secondaryApp)

  try {
    const userCredential = await createUserWithEmailAndPassword(secondaryAuth, email, password)
    const newUser = userCredential.user
    await signOut(secondaryAuth)
    await deleteApp(secondaryApp)
    return newUser
  } catch (error) {
    try { await deleteApp(secondaryApp) } catch (_) {}
    throw error
  }
}

export {
  app,
  auth,
  db,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updatePassword,
  deleteUser,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  createUserAsAdmin
}