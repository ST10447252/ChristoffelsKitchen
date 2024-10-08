import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../assets/types/Colors';

const DishMenu = ({ dish,}) => {
    return (
        <View style={styles.cardcontainer}>
        <View style={styles.card}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.courseType}>{dish.courseType}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>R {dish.price} .00</Text>
            </View>
        </View>
    );
};


export default DishMenu

const styles = StyleSheet.create({
    cardcontainer: {
        flexDirection: 'row',
        left: 20,
    },
    card: {
        padding: 20,
        backgroundColor: Colors.MatteBlue,
        height: 550,
        width: 350,
        borderRadius: 20,
        gap: 20,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    dishName: {
        fontFamily: 'Baithe',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    courseType: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 20,
        color: 'white'


    },
    description: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 18,
        color: '#999',
    },
    price: {
        fontFamily: 'Baithe',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
})