import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../assets/types/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import DishView from '../components/DishView'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = ({ navigation }) => {
    
    const [dishes, setDishes] = useState<Dish[]>([]);

    type Dish = {
        name: string;
        courseType: string;
        description: string;
        price: string;
    };
    useFocusEffect(
        React.useCallback(() => {
            const loadDishes = async () => {
                const storedDishes = await AsyncStorage.getItem('dishes');
                if (storedDishes) {
                    setDishes(JSON.parse(storedDishes));
                }
            };
            loadDishes();
        }, [])
    );
  return (
      <View style={styles.container}>
          <SafeAreaView style={styles.pagecontainer} />
          <LinearGradient
              colors={[Colors.SimianGreen, Colors.SimianDarkGreen]}
              style={styles.Background} />
                <View>
                   <Text style={styles.Pager}>
                     Christoffel's Kitchen
                   </Text>
                </View>
                <View style={styles.navbar}>
                      <TouchableOpacity onPress={()=> navigation.navigate('Chefslogin')}>
                            <Image source={require('../assets/icons/chef.png')} style={styles.Icons}/>
                     </TouchableOpacity>
             
                     <TouchableOpacity>
                             <Image source={require('../assets/icons/user.png')} style={styles.Icons}/>
                     </TouchableOpacity>
                 </View>
          <View style={styles.highlights}>
              <ScrollView horizontal style={styles.mealscrollview}>
              {dishes.map((dish, index) => (
                    <DishView key={index} dish={dish} />
                ))}
              </ScrollView>
          </View> 

          <View style={styles.indicator}>
              <Image source={require('../assets/icons/arrow-right.png')} style={{width: 24, height: 24, right: 30,}}/>
          </View>


          <TouchableOpacity style={styles.menubutton} onPress={()=> navigation.navigate('Menu')}>
              <Image source={require('../assets/icons/menu.png')} style={{ width: 34, height: 34, }} />
              <Text style={{fontSize: 15, color: 'white'}}>
                  Menu
              </Text>
          </TouchableOpacity>


          
          
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Colors.SimianDarkGreen,
        
       
    },
    Background: {
        height: '75%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

    },
    pagecontainer: {
        backgroundColor: 'transparent',
        
    },

    Pager: {
        fontFamily: 'Baithe',
        fontSize: 20,
        padding: 10,
        marginHorizontal: 10,
        color: 'white'
    },

    navbar: {
        marginHorizontal: 10,
        bottom: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.SimianGreen,
        borderRadius: 20,

        
    },

    highlights: {
       margin: 10,
        right: 20,
        width: '100%',
    },

    mealscrollview: {
       
    },

   
    indicator: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    menubutton: {
        bottom: 30,
        margin: 20,
        padding: 20,
        backgroundColor: Colors.SimianGreen,
        borderRadius: 20,
        width: 90,
        alignItems: 'center',
    },



    Icons: {
        width: 34,
        height: 34,
        
    
    },

    
   
})