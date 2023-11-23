import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../Colors';
import { FontAwesome } from 'react-native-vector-icons';
import styles from '../styles';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView style={styles.SignUp_Container}>
            <View style={styles.Login_container}>

                <Text
                    style={styles.Label}>
                    Login
                </Text>
                <Text
                    style={styles.description}>
                    Please enter your credentials
                </Text>
                <View
                    style={styles.Line}>

                    <View style={styles.container}>

                        <TextInput
                            style={styles.Input_Text}
                            placeholder='Email Address'
                            placeholderTextColor={colors.primary}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.Input_Text}
                            placeholder='Password'
                            placeholderTextColor={colors.primary}
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => {
                                props.navigation.navigate('Home');

                            }}
                        >
                            <Text style={styles.Button_Text}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.Conditions}>
                            <FontAwesome name="check" size={16} color={colors.primary} />
                            <Text style={styles.FontAw}>
                                Remember me
                            </Text>
                        </View>


                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.IconsButton}
                onPress={() => {
                    props.navigation.navigate('Welcome');
                }}
            >
                <Image style={styles.Icons} source={require('../assets/back-2.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login