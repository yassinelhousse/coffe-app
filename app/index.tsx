import { router } from "expo-router";
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <ImageBackground
      source={require('../assets/images/dark-coffee.jpg')}
      style={styles.background}
      imageStyle={styles.imageStyle}
      resizeMode="cover"
      
      >
        <View style={styles.titleContainer}>

          <Text style={styles.title}>Coffe Shop</Text>
          <Text style={styles.subtitle}>welcome to cosy coffe corner, 
            where every cup is a delightfull for you.</Text>
            
            <Pressable style={styles.button} onPress={() => router.push('/menu')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>

        </View>
        <View style={styles.indicator}>

        </View>

      </ImageBackground>
      

  );
  
};
const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    height:'80%',
    overflow:'hidden',
    backgroundColor: '#F7F6F6BA',
    
    
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    

  },

  titleContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:200,
    
    
  },
  title:{
    fontSize:48,
    color:'#FEFEFE',
    fontFamily:'Rowdies',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom:19,

    
  },
  subtitle:{
    fontSize:20,
    color:'#C3C0C0',
    textAlign:'center',
    width:'80%',
    fontFamily:'italic',
    lineHeight:24,
    
    

  },
  button:{
    position:'absolute',
    bottom:50,
   
    backgroundColor:'#947257D9',
    alignItems:'center',
    borderRadius:13,
    width:'70%',
    height:80,
    justifyContent:'center',
    

  },

  buttonText:{
    color:'#FEFEFE',
    fontSize:32,
    fontFamily:'Roboto', 
    fontWeight:400,
    fontStyle: 'italic',
    


  },
  indicator:{
    position:'absolute',
    backgroundColor:'#333',
    width:170,
    height:6,
    borderRadius:3,
    bottom:15,
    right:'31%',
    

  
  },




})



