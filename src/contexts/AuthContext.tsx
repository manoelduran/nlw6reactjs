import { createContext, ReactNode, useEffect, useState } from "react";

import { firebase, auth } from '../services/firebase';

interface AuthContextProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
    signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | undefined>();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                const { displayName, photoURL, uid } = user;
            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account');
            };
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
            }
        })
        return () => {
            unsubscribe();
        }
    },[])
    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        if (result.user) {
            const { displayName, photoURL, uid } = result.user;
            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account');
            };
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}