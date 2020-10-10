import React from 'react';
import {TouchableOpacity, Text, ImagePropTypes, StyleSheet} from 'react-native';

const MyButton = (props) => {
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={()=> console.log('Hello')}
        onLongPress={()=> alert("This is an alert")}
        >
        <Text style={styles.text_container}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width:200,
        height:50,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'center'
        
    },
    text_container:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
})