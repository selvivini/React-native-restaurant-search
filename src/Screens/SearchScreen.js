import React,{useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResutsList from '../components/ResultsList';


const SearchScreen = ({navigation})=>{

    
    const [term, setTerm]  =  useState('');
    const[ searchApi, results,errorMessage] = useResults();
    
    const resultsByPrice = (price) =>{
      return  results.filter((result) =>{
        //   price = '$', price ='$$', price = '$$$'
          return result.price === price
      })
    }
    return <>
        <SearchBar term = {term} 
        onChangeTerm = {setTerm} 
        onTermSubmit = {searchApi}
        />
        {errorMessage ?<Text> {errorMessage}</Text> : null}
        <ScrollView>
        <ResutsList navigation ={navigation} results = {resultsByPrice('$')}title = "Costlier"/>
        <ResutsList navigation = {navigation} results = {resultsByPrice('$$')}title = "BitPricier"/>
        <ResutsList navigation = {navigation} results = {resultsByPrice('$$$')} title = "BigSpender" />
        </ScrollView>
    </>
}


const styles = StyleSheet.create({});

export default SearchScreen;