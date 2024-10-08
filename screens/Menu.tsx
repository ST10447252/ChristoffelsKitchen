import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../assets/types/Colors';
import DishMenu from '../components/DishMenu';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Easing } from 'react-native-reanimated';

const Menu = ({ navigation }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);
  const [filterType, setFilterType] = useState<string | null>(null);

  const [expanded, setExpanded] = useState(false);
  const animatedValue = new Animated.Value(0);
  
  const radius = 120; // Distance from the center to the buttons

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
          setFilteredDishes(JSON.parse(storedDishes)); // Initialize filteredDishes with all dishes
        }
      };
      loadDishes();
    }, [])
  );

  const toggleFilter = () => {
    Animated.timing(animatedValue, {
      toValue: expanded ? 0 : 1,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => setExpanded(!expanded));
  };

  const filterDishes = (courseType: string) => {
    const filtered = dishes.filter(dish => dish.courseType === courseType);
    setFilteredDishes(filtered);
    setFilterType(courseType);
  };

  const resetFilter = () => {
    setFilteredDishes(dishes);
    setFilterType(null);
  };

  const translateX = (angle: number) => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, radius * Math.cos(angle)]
  });

  const translateY = (angle: number) => animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, radius * Math.sin(angle)]
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.pagecontainer} />
      <LinearGradient colors={[Colors.FarrawayBlue, Colors.SimianDarkBlue]} style={styles.Background} />

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/icons/arrow-square-left.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Baithe', color: 'white', fontSize: 20, top: 2.5 }}>Full Menu</Text>
      </View>

      <View style={styles.dishScrollView}>
        <ScrollView>
          {filteredDishes.map((dish, index) => (
            <DishMenu key={index} dish={dish} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterContainer}>
        <Animated.View style={[ { transform: [{ translateX: translateX(0) }, { translateY: translateY(0) }] }]}>
          {expanded && (
            <View style={styles.filterButtons}>
              <TouchableOpacity style={styles.starterButton} onPress={() => filterDishes('Starter')}>
                <Image source={require('../assets/icons/skewers.png')} style={styles.starterButtonIcon} />
                <Text style={styles.starterButtonText}>Starters</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mainmealButton} onPress={() => filterDishes('Main Meal')}>
                <Image source={require('../assets/icons/mainmeal.png')} style={styles.mainmealButtonIcon} />
                <Text style={styles.mainmealButtonText}>Main Meal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.dessertButton} onPress={() => filterDishes('Dessert')}>
                <Image source={require('../assets/icons/ice-cream.png')} style={styles.dessertButtonIcon} />
                <Text style={styles.dessertButtonText}>Desserts</Text>
              </TouchableOpacity>

    
              
            </View>
          )}
        </Animated.View>

        <TouchableOpacity style={styles.plusButton} onPress={toggleFilter}>
          <Image source={require('../assets/icons/plus.png')} style={styles.plusButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SimianDarkBlue,
  },
  Background: {
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  pagecontainer: {
    backgroundColor: 'transparent',
  },
  navbar: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    borderBottomWidth: 3,
    borderColor: Colors.FarrawayBlue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dishScrollView: {
    right: 10,
    marginTop: 20,
    height: 590,
  },
  filterContainer: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    alignItems: 'center',
  },
  filterButtons: {
    padding: 20,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  plusButton: {
    margin: 20,
    position: 'absolute',
    bottom: 300,
    marginTop: 20,
    width: 60,
    height: 60,
    backgroundColor: Colors.FarrawayBlue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100, 
  },
  plusButtonIcon: {
    width: 20,
    height: 20,
  },
  starterButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    backgroundColor: Colors.FarrawayBlue,
  },
  starterButtonIcon: {
    width: 25,
    height: 25,
  },
  starterButtonText: {
    fontSize: 15,
    fontFamily: 'Helvetica-LightOblique',
    color: 'white',
  },
  mainmealButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    backgroundColor: Colors.FarrawayBlue,
  },
  mainmealButtonIcon: {
    width: 25,
    height: 25,
  },
  mainmealButtonText: {
    fontSize: 15,
    fontFamily: 'Helvetica-LightOblique',
    color: 'white',
  },
  dessertButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    backgroundColor: Colors.FarrawayBlue,
  },
  dessertButtonIcon: {
    width: 25,
    height: 25,
  },
  dessertButtonText: {
    fontSize: 15,
    fontFamily: 'Helvetica-LightOblique',
    color: 'white',
  },
  cancelButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    backgroundColor: Colors.SimianGreen,  // Assuming you have a cancel color
  },
  cancelButtonText: {
    fontSize: 15,
    fontFamily: 'Helvetica-LightOblique',
    color: 'white',
  },
});
