import React ,{useState, useEffect}from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../Api/yelp'

const ResultsShowScreen = ({ route}) =>{
const id = route.params.id
const[result, setResult] = useState({});


const getResult = async (id)=>{
const response = await yelp.get(`/${id}`)
setResult(response.data);
}

useEffect(()=>{
 getResult(id)
}, [])

if(!result){
    return null;
}

    return <View>
        <Text>{result.name}</Text>
        <FlatList
        data = {result.photos}
        keyExtractor = {(photo)=> photo}
        renderItem = {({item})=>{
        return <Image style = {styles.imageStyle} source = {{uri: item}}/>
        }}
        />
    </View>
}

const styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width: 300
    }
});

export default ResultsShowScreen;