import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import colors from '../Colors'
import { FontAwesome } from 'react-native-vector-icons';
import Welcome from './Welcome';
import styles from '../styles';
import { useState, React } from 'react';

const SignUp = (props) => {
    const [fullName, setFullname] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    return (
        <SafeAreaView style={styles.SignUp_Container}>
            <View style={styles.style}>
                <View style={styles.SignUp}>
                    <FontAwesome name="arrow-left" size={32} color={colors.white} style={{ marginLeft: '-20%' }} onPress={() => {
                        props.navigation.navigate('Welcome');
                    }} />
                    <Text
                        style={styles.Label}>
                        Register
                    </Text>
                </View>
                <Text
                    style={styles.description_signUp}>
                    Create a new account
                </Text>
                <View
                    style={styles.Line}>

                    <View style={styles.container}>

                        <TextInput
                            style={styles.Input_Text}
                            placeholder='Full Name'
                            placeholderTextColor={colors.primary}
                            value={fullName}
                            onChangeText={(text) => setFullname(text)}
                        />
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
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                        />
                        <TouchableOpacity
                            style={
                                styles.Button
                            }
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        >
                            <Text style={styles.Button_Text}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.Conditions}>
                            <FontAwesome name="check" size={16} color={colors.primary} />
                            <Text style={styles.FontAw}>
                                I agree to the Terms and Conditions
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    marginTop: 40,
                    shadowColor: colors.gray,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.4,
                    position: 'absolute'
                }}
                onPress={() => {
                    props.navigation.navigate('Welcome');
                }}
            >
                <Image style={{
                    resizeMode: 'contain',
                    height: 40,
                    width: 40,
                }} source={require('../assets/back-2.png')} />
            </TouchableOpacity> */}

        </SafeAreaView>
    )
}

export default SignUp