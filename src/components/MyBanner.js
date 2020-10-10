import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = (props) => {

  function checkAktiveStatus(){
  }
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <View style={styles.new_view}>
      <View style={styles.aktif} >
      <Text style={styles.text}>{props.title}</Text>
      <Text> {props.desc}</Text>
      </View>
     
    {props.isActive || <Text> Aktif Degil</Text>}
      
      </View> 
      
    </View>
  );
};

export default MyBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  new_view:{   
    flexDirection:'row', 
    
    alignItems:"center"
  },
  aktif:{
    flex:1,
    
    
  }
});