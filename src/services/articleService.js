import { db } from "../firebaseConfig"
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"

export async function createArticle({ title, body, date, location }) {
  
  const data = { title, body, date, location }
  console.log(data)
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(40))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export async function createSnapshot({ title, date, n1, n2, r1, r2, p1, p2, t1, t2, c1, c2 }){
  const data = { title, date, n1, n2, r1, r2, p1, p2, t1, t2, c1, c2 }
  console.log(data)
  const docRef = await addDoc(collection(db, "snapshots"), data)
  return { id: docRef.id, ...data }
}

export async function fetchSnapshot() {
  const documents = await getDocs(
    query(collection(db, "snapshots"), orderBy("title", "date"), limit(40))
  )
  return documents.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}