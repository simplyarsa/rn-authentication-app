import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import app from './config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default function Signup({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

    const handleClick =async () => {
        try {
            await createUserWithEmailAndPassword(auth, form.email, form.password);
            form.email='';
            form.password='';
            navigation.navigate('Home');
            console.log('User created successfully!');
        } catch (error) {
            let e=error.code.split('/')[1];
            e=e.replaceAll('-',' ');
            e=e.charAt(0).toUpperCase() + e.slice(1);
            setError(e);
        }
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>

          <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{
                uri: 'https://vendotic.com/public/uploads/large/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png',
              }} />
          
            <Text style={styles.title}>
                Sign Up
            </Text>

            <Text style={styles.subtitle}>
            Create a new account
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="abc@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                    handleClick();
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.formLink}>{error}</Text>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Already have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
