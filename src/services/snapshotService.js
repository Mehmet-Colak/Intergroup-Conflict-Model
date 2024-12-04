import { db } from "../firebaseConfig"
import {
  collection,
  doc,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"

export async function createSnapshot({ title, n1, n2, r1, r2, p1, p2, t1, t2, c1, c2 }){
  const data = { title, n1, n2, r1, r2, p1, p2, t1, t2, c1, c2 }
  console.log(data)
  const docRef = await addDoc(collection(db, "snapshots"), data)
  return { id: docRef.id, ...data }
}

export async function fetchSnapshots() {
  const documents = await getDocs(
    query(collection(db, "snapshots"), orderBy("title"), limit(40))
  )
  return documents.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export async function emptySnapshots(){
  const q = query(collection(db, "snapshots"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(db, "snapshots", document.id));
  });
}