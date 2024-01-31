import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components';
import * as ImagePicker from 'react-native-image-picker';

const ImageCustom = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.5,
      };

      const response = await ImagePicker.launchCamera(options);
      console.log('responseCamera', response)

      if (response?.assets?.[0]?.uri) {
       
        setImageUri(response.assets[0].uri);
       
      }
    } catch (error) {
      console.error('Error opening camera: ', error);
    }
  };
  const openGallery = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.5,
      };

      const response = await ImagePicker.launchImageLibrary(options);
      if (response?.assets?.[0]?.uri) {
        setImageUri(response.assets[0].uri);
      }
     
    }catch (error) {
      console.error('Error opening gallery: ', error);
    }
  };

  console.log(imageUri)
  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text>No Image Selected</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
   
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default ImageCustom;
