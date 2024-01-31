import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { TextStyles } from '@/theme';
import { getUser } from '@/selectors/UserSelectors';
import { strings } from '@/localization';
import { backgrounImg, phoneImg, email, id, pre, work } from '@/assets';
import ProfileInfoCard from '@/components/ProfileInfoCard';
import Info from '@/components/Info';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export function Home(props) {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  const openDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={backgrounImg} style={{ height: '30%', width: '100%' }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 1,
          top: -10,
        }}
      >
        <Button title="Open Drawer" onPress={openDrawer} color="pink" />
      </TouchableOpacity>

      <View style={{ position: 'absolute', left: 16, top: 15 }}>
        <Text style={styles.textStyle}> MY </Text>
        <Text style={styles.textt}> Profile</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: 16,
          top: 15,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/edit.png')}
            style={{ height: 26, widht: 25, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 15 }}>
          <Image
            source={require('../../assets/images/setting.png')}
            style={{ height: 26, widht: 24, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../assets/images/dp.png')}
        style={{
          height: 230,
          widht: 100,
          resizeMode: 'contain',
          alignSelf: 'center',
          top: 95,
          position: 'absolute',
        }}
      />

      <View>
        <Text
          style={{
            fontSize: 18,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#00405C',
            alignSelf: 'center',
            paddingTop: 60,
          }}
        >
          John Smith
        </Text>
        <Text
          style={{
            fontSize: 15,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#00405C',
            alignSelf: 'center',
            paddingVertical: 20,
            paddingTop: 8,
          }}
        >
          TRN | 2277
        </Text>

        <ProfileInfoCard icon={pre} title={'My pre-alerts'} />
        <ProfileInfoCard
          icon={id}
          title={'id proof'}
          style={{ marginTop: 10 }}
          isShowUpload={true}
        />
        <Info
          icon={email}
          title={'Email Address'}
          mail={'johnsmith88@gmail.com'}
        />
        <Info icon={phoneImg} title={'Phone Number'} mail={'+15846527465666'} />
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '#00405C',
            }}
          >
            Address
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/images/edt.png')}
                style={{
                  margin: 10,
                  //marginHorizontal: 6,
                  //paddingTop: 5,
                  alignItems: 'center',
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  fontSize: 14,
                  resizeMode: 'contain',
                  fontWeight: 'bold',
                  color: '#00405C',
                  //  marginHorizontal: 8,
                  paddingTop: 6,
                  alignItems: 'center',
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Info
        icon={work}
        title={'Weekday(Work)'}
        mail={'2606 Lowndes hill park road'}
      />
      {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/id.png')}
              style={{
                height: 50,
                widht: 40,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                resizeMode: 'contain',
                fontWeight: 'bold'Weekday(Work)
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 13,
              marginHorizontal: 6,
              paddingHorizontal: 10,
              paddingVertical: 7,
              backgroundColor: '#E99C011A',
            }}
          >
            <Image
              source={require('../../assets/images/profile.png')}
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
                marginLeft: 8,
              }}
            >
              upload
            </Text>
          </TouchableOpacity>
        </View> */}

      {/* <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/images/email.png')}
            style={{
              //height: 50,
              //widht: 40,
              resizeMode: 'contain',
              //paddingTop: 20,
              //margin: 10,
              alignSelf: 'center',
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 12,
                resizeMode: 'contain',
                fontWeight: 'bold',
                color: '#A4BFCB',

                paddingTop: 25,
              }}
            >
              Email Address
            </Text>
            <Text
              style={{
                fontSize: 14,
                resizeMode: 'contain',
                fontWeight: 'bold',
                color: '#4B8098',

                paddingTop: 10,
              }}
            >
              johnsmith88@gmail.com
            </Text>
          </View>
        </View> */}

      {/* <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/images/phone.png')}
            style={{
              height: 50,
              alignSelf: 'center',
              widht: 40,
              resizeMode: 'contain',
              paddingTop: 20,
              //margin: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 12,
                resizeMode: 'contain',
                fontWeight: 'bold',
                color: '#A4BFCB',
                paddingTop: 25,
               
              }}
            >
              Phone Number
            </Text>
            <Text
              style={{
                fontSize: 14,
                resizeMode: 'contain',
                fontWeight: 'bold',
                color: '#4B8098',

                paddingTop: 10,
              }}
            >
              +15846527465666
            </Text>
          </View>
        </View> */}

      {/* <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '#00405C',
            }}
          >
            Address
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/images/edt.png')}
                style={{
                  margin: 10,
                  //marginHorizontal: 6,
                  //paddingTop: 5,
                  alignItems: 'center',
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  fontSize: 14,
                  resizeMode: 'contain',
                  fontWeight: 'bold',
                  color: '#00405C',
                  //  marginHorizontal: 8,
                  paddingTop: 6,
                  alignItems: 'center',
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      {/* <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../assets/images/work.png')}
          style={{
            height: 50,
            widht: 40,
            resizeMode: 'contain',
            paddingTop: 20,
            alignSelf: 'center',
            // margin: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 12,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '#A4BFCB',

              paddingTop: 25,
            }}
          >
            Weekday(Work)
          </Text>
          <Text
            style={{
              fontSize: 14,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '#4B8098',

              paddingTop: 10,
            }}
          >
            2606 Lowndes hill park road
          </Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 215,
    width: '100%',
    color: '#F05123',
  },

  textStyle: {
    fontSize: 14,
    color: 'white',
  },
  textt: {
    fontSize: 30,
    color: 'white',
  },
  shadow: {
    borderColor: 'white',
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: 'white',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
