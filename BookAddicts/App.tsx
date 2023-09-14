import React from 'react';
import { View, Text, StyleSheet , Image, ImageBackground} from 'react-native';




const HomePage = () => {
  return ( 
    
    
    
    <View style={styles.container}>
      <Text style={styles.heading}>Book Addicts</Text> 
      <Text style={styles.description}></Text>

      
  <View style={styles.imagecontainer}>
  <ImageBackground
    source={require('./romance.jpg')} 
    style={styles.ImageBackground}/>

    <Text style={styles.description}>The Title:</Text>
    <Text style={styles.description}>Author Name:</Text>
    <Text style={styles.description}>Number Of Pages:</Text>
    <Text style={styles.description}>Genre:</Text>
</View>

  </View>
 
 );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -50,
    textDecorationLine:'underline',
    
    textAlign: 'center',
  },
  description: {
    fontSize: 26,
    textAlign: 'center',
    color: 'black',
    marginTop:40,
    textDecorationLine:'underline',
  },
  imagecontainer: {
  alignItems: 'center',
    
  },
  ImageBackground: {
    width: 300,
    height: 450,
    marginTop:50,
    
  },

});






export default HomePage;
