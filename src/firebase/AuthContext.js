import React, { useContext, useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from './firebaseConfig'; // You'll create this next

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [currentUser, setCurrentUser] = useState(null);
  const [isPaidUser, setIsPaidUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsPaidUser(data.isPaid || false);
          setIsAdmin(data.isAdmin || false);
        } else {
          setIsPaidUser(false);
          setIsAdmin(false);
        }
      } else {
        setIsPaidUser(false);
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isPaidUser, isAdmin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
