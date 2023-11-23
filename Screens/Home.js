import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles'
import colors from '../Colors'

const Home = () => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.menuBar}>
                <TouchableOpacity style={styles.Label}>
                    <Image source={require('../assets/menu.png')} />
                </TouchableOpacity>
                <Text style={[styles.Label, { flex: '1' }]}>Tripoli</Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 120 }}>
                <Image source={require('../assets/cloudy-4.png')} />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>
                <Text style={[styles.Label, { fontSize: 100 }]}>30</Text>
                <Text style={[styles.Label, { fontSize: 20, marginTop: 80 }]}>0</Text>
                <Text style={[styles.Label, { fontSize: 50, marginTop: 70, marginLeft: '-1 %' }]}>C</Text>
            </View>
            <View>

            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: -50 }}>
                <Text style={[styles.Label]}>Thursday</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <View style={[{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, flex: 1 }]}>
                    <Image source={require('../assets/down-arrow.png')} />
                    <Text style={[styles.description]}>15 C</Text>


                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, flex: 1 }}>
                    <Image source={require('../assets/up-arrow.png')} />
                    <Text style={styles.description}>30 C</Text>

                </View>


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <View style={[{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, flex: 1 }]}>
                    <Image source={require('../assets/pure-water.png')} />
                    <Text style={[styles.description]}>58%</Text>
                    <Text>Humidity</Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, flex: 1 }}>
                    <Image source={require('../assets/umbrella.png')} />
                    <Text style={[styles.description]}>15%</Text>
                    <Text>chance</Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, flex: 1 }}>
                    <Image source={require('../assets/wind.png')} />
                    <Text style={[styles.description]}>170KPH</Text>
                    <Text>South</Text>
                </View>

            </View>
        </SafeAreaView>

    )
}

export default Home