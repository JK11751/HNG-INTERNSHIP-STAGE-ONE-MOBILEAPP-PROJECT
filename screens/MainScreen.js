import React from 'react';
import {Dimensions, View, Text, Image,ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import images from '../constants/images';

const screenWidth = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={styles.img}
    >
      <View style={styles.profileContainer}>
        <Image
          source={images.bimage}
          style={styles.profileImage}
        />
        <Text style={styles.name}>JOHN KERARIO GIMASE</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('GitHub')} style={styles.button}>
        <Text style={styles.buttonText}>Open GitHub</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
 
   

  },
  img: {
    height: "100%",
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20, // Reduce the gap between image/name and button
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    marginTop: 10, // Reduce the gap between image and name
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 100,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
