import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from './Colors';
import colors from './Colors';

const styles = StyleSheet.create({
    general: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Login_container: {
        marginHorizontal: 22, flex: 1, alignItems: 'center', marginTop: 12,
        justifyContent: 'center'
    },
    homeContainer: {
        flex: 1,
        backgroundColor: colors.primary
    },
    menuBar: {
        flexDirection: 'row',
        direction: 'rtl'
    },
    Moh_edit: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    first_image: {
        height: 90, width: 90, transform: [{ translateX: 40 },
        { translateY: -150 }, { rotate: '-20deg' }]
    },
    second_image: {
        height: 150, width: 150,
        transform: [{ translateX: -10 },
        { translateY: -30 }]
    }, Last_image:
    {
        height: 80, width: 80, transform: [{ rotate: '20deg' }, { translateY: -80 }, { translateX: -50 }]
    },
    Label: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: 800,
        color: Colors.white,
    },
    description: {
        marginTop: 5,
        fontSize: 20,
        color: Colors.black,
        alignItems: "flex-start"
    },
    Button: {
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        marginTop: 40,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 4
    },
    Button_Text: {
        fontSize: 20,
        fontWeight: 600,
        color: '#f0f0f0'
    },
    Button_login: {
        paddingHorizontal: 50,
        paddingVertical: 20,

    },
    Button_login_Text: {
        fontSize: 17,
        fontWeight: 600,
        color: '#f0f0f0'
    },
    SignUp_Container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    style: {
        marginHorizontal: 22, flex: 1, alignItems: 'center', marginTop: 12
    },
    description_signUp: {
        color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 20
    },
    Line: {
        backgroundColor: 'white',
        height: 700,
        width: 460,
        borderTopLeftRadius: 130,
        paddingTop: 50,
        alignItems: 'left',
        paddingLeft: 70,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        justifyContent: 'center'
    }, Input_Text: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.gray,
        padding: 10,
        borderRadius: 20,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    Conditions: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
    FontAw: { marginLeft: 10, fontSize: 14, color: Colors.primary },
    Icons: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
    },
    IconsButton: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 40,
        shadowColor: Colors.gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        position: 'absolute'
    }
});

export default styles