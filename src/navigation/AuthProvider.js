import React, { createContext, useState, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { LoaderContext } from '../contexts/LoaderProvider';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          showLoader();
          try {
            await auth().signInWithEmailAndPassword(email, password);
            hideLoader();
          } catch (e) {
            console.log(e);
            hideLoader();
          }
        },
        register: async (email, password) => {
          showLoader();
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                hideLoader();
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    firstName: '',
                    lastName: '',
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  .catch((error) => {
                    hideLoader();
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              .catch((error) => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
