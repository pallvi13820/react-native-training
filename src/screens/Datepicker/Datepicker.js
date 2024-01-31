import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { abs } from 'react-native-reanimated';
import { Button } from '@/components';
import dayjs from 'dayjs';

const Datepicker = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [toOpen, setToOpen] = useState(false);
  const [highlight, sethighlight] = useState(false);
  const [active, setActive] = useState(false);
  const [activ, setActiv] = useState(false);
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#4A418B' }}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          right: 10,
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={require('../../assets/images/img.png')}
          style={{
            height: 25,
            widht: 25,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/quesmark.png')}
          style={{
            height: 25,
            widht: 25,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          color: '#FAFBFF',
          fontWeight: 'bold',
          fontSize: 25,
          resizeMode: 'contain',
          paddingTop: 15,
        }}
      >
        Export report
      </Text>

      <Text
        style={{
          color: '#FAFBFF',
          fontWeight: 'bold',
          fontSize: 13,
          resizeMode: 'contain',
          paddingTop: 15,
        }}
      >
        Period from
      </Text>

      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          paddingHorizontal: 10,
          marginVertical: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: '#FAFBFF',
        }}
      >
        <DatePicker
          modal
          mode={'date'}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text
          style={{
            color: '#FAFBFF',
            fontSize: 15,
            paddingVertical: 10,
            top: 10,
          }}
        >
          {dayjs(date).format('DD-MM-YYYY')}
          {/* 04/23/2022 */}
        </Text>
        <Image
          style={{ top: -22, left: 300 }}
          source={require('../../assets/images/date.png')}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: '#FAFBFF',
          fontWeight: 'bold',
          fontSize: 13,
          resizeMode: 'contain',
          paddingTop: 1,
          bottom: 10,
        }}
      >
        To
      </Text>

      <TouchableOpacity
        onPress={() => setToOpen(true)}
        style={{
          bottom: 12,
          paddingHorizontal: 10,
          marginVertical: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: '#FAFBFF',
        }}
      >
        <DatePicker
          modal
          mode={'date'}
          open={toOpen}
          date={toDate}
          onConfirm={date => {
            setToOpen(false);
            setToDate(date);
          }}
          onCancel={() => {
            setToOpen(false);
          }}
        />
        <Text
          style={{
            color: '#FAFBFF',
            fontSize: 15,
            paddingVertical: 10,
            top: 10,
          }}
        >
          {dayjs(toDate).format('DD-MM-YYYY')}
          {/* 05/23/2022 */}
        </Text>
        <Image
          style={{ top: -22, left: 300 }}
          source={require('../../assets/images/date.png')}
        />
      </TouchableOpacity>

      <Text style={{ color: '#FAFBFF', fontSize: 20, padding: 10, bottom: 20 }}>
        Choose exporting format
      </Text>

      <TouchableOpacity
        onPress={() => setActive(!active)}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
          backgroundColor: '#3C346F',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderColor: 'white',
            height: 24,
            width: 24,
            borderRadius: 20,
            borderWidth: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {active && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#FFF',
              }}
            />
          )}
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: '#D9D8EB', fontSize: 15 }}>PDF</Text>
          <Text style={{ color: '#D9D8EB', fontSize: 13 }}>
            With print ability
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiv(!activ)}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
          backgroundColor: '#3C346F',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderColor: 'white',
            height: 24,
            width: 24,
            borderRadius: 20,
            borderWidth: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {activ && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#FFF',
              }}
            />
          )}
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: '#D9D8EB', fontSize: 15 }}>CSV</Text>
          <Text style={{ color: '#D9D8EB', fontSize: 13 }}>Table view</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#FAFBFF',
          height: 50,
          marginTop: 100,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: '#4A418B',
            fontWeight: 'bold',
            fontSize: 15,
            alignSelf: 'center',
            top: 12,
          }}
        >
          Export
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Datepicker;

const styles = StyleSheet.create({});
