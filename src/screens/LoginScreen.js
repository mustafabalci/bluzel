import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthFormButton from '../components/AuthFormButton';
import SocialButton from '../components/SocialButton';
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const { login, googleLogin, fbLogin } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../images/bluzel-logo.png')}
        style={styles.logo}
      />

      <AuthInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="E-Posta"
        iconName="email-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <AuthInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Parola"
        iconName="lock-open-outline"
        secureTextEntry={true}
      />

      <AuthFormButton text="Giriş Yap" onPress={() => alert('clicked')} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Parolamı Unuttum</Text>
      </TouchableOpacity>

      <View>
        <SocialButton
          text="Google ile Giriş Yap"
          iconName="google"
          color="#de4d41"
          bgColor="#f5e7ea"
          onPress={() => alert('google')}
        />
      </View>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.navButtonText}>Üye değil misin? Üye Ol.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 200,
    width: 132,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default LoginScreen;
