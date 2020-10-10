import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import MyBanner from './components/MyBanner';

import MyButton from './components/MyButton';

const food_data = [
  {
    id: 0,
    title: 'Çorbalar',
    desc: 'Birbirinden leziz çorbalar!',
    color: '#e57373',
    isActive: false,
    
  },
  {
    id: 1,
    title: 'Ara Sıcaklar',
    desc: 'Lezzetlei aparetifler',
    color: '#81d4fa',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ana Yemekler',
    desc: 'Doyurucu lezzetler',
    color: '#ffd54f',
    isActive: false,
  },
  {
    id: 3,
    title: 'Alkolsüz İçecekler',
    desc: 'Buz gibi serinletici lezzetler',
    color: '#cfd8dc',
    isActive: false,
  },
];


const App=()=> {
  return(
    <View>

      {food_data.map((food) => {
          return(
            
            <MyBanner 
            title={food.title}
            desc={food.desc}
            color={food.color}
            isActive={food.isActive}
          
            /> 
          
          )

        })}

        <MyButton buttonTitle="Yenile"/>
      
    </View>
  )
}; 

export default App;

const styles = StyleSheet.create({
  text_1:{
    backgroundColor: 'red',
    color: 'black',
    padding:10,
    margin:15,
  
  },
  text_2:{
    backgroundColor: 'yellow',
    color: 'black',
    padding:10,
    margin:15,


  },
  text_3:{
    backgroundColor:'pink',
    color: 'black',
    padding:10,
    margin:15,


  }

});