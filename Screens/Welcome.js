import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Colors';
import style from '../styles';
export default function Welcome(props) {
    return (
        <LinearGradient
            colors={[Colors.primary, Colors.secondray]}
            style={style.general}
        >
            <View style={style.container}>
                <View style={style.Moh_edit}>
                    <Image
                        style={style.first_image}
                        source={require('../assets/balloons.png')}
                    />
                    <Image
                        style={style.second_image}
                        source={require('../assets/tv-2.png')}
                    />
                    <Image
                        style={style.Last_image}
                        source={require('../assets/balloons.png')}
                    />

                </View>
                <Text
                    style={style.Label}
                >
                    WELCOME TO OUR SALES FOR THIS MONTH
                </Text>
                <Text
                    style={style.description}
                >
                    Join us to buy what you want at the best discount.
                </Text>
                <TouchableOpacity style={
                    style.Button
                }
                    onPress={() => {
                        props.navigation.navigate('SignUp');
                    }}>
                    <Text
                        style={style.Button_Text}>
                        Join Us Now !
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={
                    style.Button_login
                }
                    onPress={() => {
                        props.navigation.navigate('Login');
                    }}>
                    <Text
                        style={style.Button_login_Text}>
                        Already have an account ?Login
                    </Text>

                </TouchableOpacity>

            </View>

        </LinearGradient>
    )
}

