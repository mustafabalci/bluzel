import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthInput = ({ iconName, labelValue, placeholder, ...others }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.icon}>
        <Icon name={iconName} size={25} color="#DDDDDD" />
      </View>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholder}
        numberOfLines={1}
        placeholderTextColor="#DDDDDD"
        {...others}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#5c3551',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#DDDDDD',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default AuthInput;
