import React, { createContext, useState, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { LoaderContext } from '../contexts/LoaderProvider';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { showLoader, hideLoader, showToast } = useContext(LoaderContext);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          showLoader();

          if (validateEmail(email) && validatePassword(password)) {
            try {
              await auth().signInWithEmailAndPassword(email, password);
              hideLoader();
            } catch (e) {
              console.log(e);
              hideLoader();
              showToast('E-Posta veya parola yanlış.');
            }
          } else {
            hideLoader();
            showToast('E-Posta veya parola yanlış.');
          }
        },
        register: async (email, password) => {
          showLoader();
          if (validateEmail(email) && validatePassword(password)) {
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
                      showToast('Kayıt olurken bir hata meydana geldi.');
                    });
                })
                .catch((error) => {
                  console.log('Something went wrong with sign up: ', error);
                  showToast('Kayıt olurken bir hata meydana geldi.');
                });
            } catch (e) {
              console.log(e);
              showToast('Kayıt olurken bir hata meydana geldi.');
              hideLoader();
            }
          } else {
            showToast(
              'Lütfen geçerli bir e-posta adresi ve en az 6 haneli bir parola girin.',
            );
            hideLoader();
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
