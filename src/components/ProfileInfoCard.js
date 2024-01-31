import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { profile } from '@/assets';

const ProfileInfoCard = ({ icon, title, style,isShowUpload=false }) => {
  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Image
          source={icon}
          style={{
            height: 34,
            widht: 34,
            resizeMode: 'contain',
            marginHorizontal: 10,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            marginleft: 10,
            marginright: 10,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#00405C',
            alignSelf: 'center',
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 130,
            borderRadius: 15,
            marginTop: 6,
            paddingHorizontal: 8,
            paddingVertical: 5,
          }}>
      {isShowUpload && <TouchableOpacity
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 13,
            marginHorizontal: 6,
            paddingHorizontal: 5,
            paddingVertical: 5,
            backgroundColor: '#E99C011A',
        }}
      >
        
        <Image
          source={profile}
          style={{
            resizeMode: 'contain',
            
          }}
        />
        

        <Text
          style={{
            fontSize: 10,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#E99C01',
            marginLeft: 9,
            marginright: 10,
            padding: 3,
            paddingHorizontal: 1
          }}
        >
          upload
        </Text>
      </TouchableOpacity> }
      </View>
  
    </View>
  );
};

export default ProfileInfoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    
  },
});
