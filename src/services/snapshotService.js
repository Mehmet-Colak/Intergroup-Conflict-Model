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
} from "firebase/firestore"

export async function createSnapshot({
  title,
  n1,
  s1,
  gd1,
  ds1,
  c1,
  pd1,
  nr1,
  wr1,
  m1,
  i1,
  r1,
  f1,
  n2,
  s2,
  gd2,
  ds2,
  c2,
  pd2,
  nr2,
  wr2,
  m2,
  i2,
  r2,
  f2,
}) {
  const data = {
    title,
    n1,
    s1,
    gd1,
    ds1,
    c1,
    pd1,
    nr1,
    wr1,
    m1,
    i1,
    r1,
    f1,
    n2,
    s2,
    gd2,
    ds2,
    c2,
    pd2,
    nr2,
    wr2,
    m2,
    i2,
    r2,
    f2,
  }
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

export async function emptySnapshots() {
  const q = query(collection(db, "snapshots"))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach(async (document) => {
    await deleteDoc(doc(db, "snapshots", document.id))
  })
}
