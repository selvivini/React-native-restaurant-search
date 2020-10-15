import React ,{useState}from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



const SearchBar = ({term, onChangeTerm, onTermSubmit}) =>{
   
    
    return (
        
    <View style= {styles.backgroundStyle}>
        <AntDesign name="search1" style = {styles.iconStyle} />
        <TextInput style= {styles.inputStyle} 
        placeholder="Search" value={term} autoCapitalize ="none" autoCorrect={false}
        onChangeText = {onChangeTerm}
        onEndEditing= {onTermSubmit}
            />
            
    </View>
    )
}


const styles= StyleSheet.create({
    backgroundStyle:{
        backgroundColor: "#D5D8DC",
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: "row",
        marginTop:10,
        marginBottom: 10
    },
    inputStyle:{
     flex:1,
     fontSize: 18
     
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;