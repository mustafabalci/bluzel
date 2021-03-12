import React, { createContext, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  View,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        showLoader: () => {
          setShowLoader(true);
        },
        hideLoader: () => {
          setShowLoader(false);
        },
        showToast: (message) => {
          ToastAndroid.show(message, 2000);
        },
      }}>
      <Modal animationType="slide" transparent={true} visible={showLoader}>
        <View style={styles.centeredView}>
          <View>
            <ActivityIndicator color="#FFFFFF" size="large" />
          </View>
        </View>
      </Modal>
      {children}
    </LoaderContext.Provider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
