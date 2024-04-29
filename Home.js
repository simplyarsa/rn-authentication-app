import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import app from './config';
const auth = getAuth(app);

export default function Home({ navigation }) {

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User logged out successfully!')
            navigation.navigate('Login');
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Home
                    </Text>

                    <Text style={styles.subtitle}>
                        Welcome user
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => {
                                handleLogout();
                            }}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>


            </View>
        </SafeAreaView >
    )
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
        backgroundColor: '#DC143C',
        borderColor: '#DC143C',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});


