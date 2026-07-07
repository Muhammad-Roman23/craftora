import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "./firebase";

const categoryRef = collection(db, "categories");

// Create

export const createCategory = async (name) => {
  return await addDoc(categoryRef, {
    name,
    createdAt: serverTimestamp(),
  });
};

// Read

export const subscribeCategories = (callback) => {
  const q = query(categoryRef, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const categories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(categories);
  });
};

// Update

export const updateCategory = async (id, name) => {
  await updateDoc(doc(db, "categories", id), {
    name,
  });
};

// Delete

export const deleteCategory = async (id) => {
  await deleteDoc(doc(db, "categories", id));
};