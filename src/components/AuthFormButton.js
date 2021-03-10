import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthFormButton = ({ text, ...others }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} {...others}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 10,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c3551',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AuthFormButton;
