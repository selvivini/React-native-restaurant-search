// refer to documentation for react native navigation
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

const stack = createStackNavigator();

const App = () =>{
 return  (
  <NavigationContainer>
        <stack.Navigator initialRouteName= "Search">                                         
            <stack.Screen name = "Search" component = {SearchScreen} options= {{title: "Business Search"}}/>
            <stack.Screen name = "ResultsShow" component = {ResultsShowScreen}/>
            </stack.Navigator>
    </NavigationContainer>
    )
}




export default App;