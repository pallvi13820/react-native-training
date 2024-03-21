import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ms } from 'react-native-size-matters';

const NotificationUi = () => {
  const notificationsData = [
    {
      id: 1,
      message: 'We have Assigned the driver for your booking',
      date: 'on Mon, Sep. 26 at 10:00 AM',
      driverName: 'Jack Aranda',
      vehicleNumber: 'BL 182 232',
    },
  ];

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
      <View style={styles.divider} />
      <View style={styles.notificationDetail}>
        <Text style={styles.notificationLabel}>Driver Name:</Text>
        <Text>{item.driverName}</Text>
      </View>
      <View style={styles.notificationDetail}>
        <Text style={styles.notificationLabel}>Vehicle Number:</Text>
        <Text>{item.vehicleNumber}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Image
            source={require('../assets/images/backArrow.png')}
            style={styles.backArrowImage}
          />
        </View>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: ms(20),
  },
  header: {
    flexDirection: 'row',
    marginTop: ms(40),
  },
  backButton: {
    width: ms(42),
    height: ms(42),
    borderRadius: ms(30),
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: ms(5),
  },
  backArrowImage: {
    height: ms(15),
    width: ms(12),
    resizeMode: 'contain',
  },
  title: {
    marginLeft: ms(20),
    fontSize: ms(30),
    color: '#0F0F0F',
    fontWeight: 'bold',
  },
  notificationContainer: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(6),
    marginVertical: ms(10),
    backgroundColor: '#FFFF',
    borderRadius: ms(30),
    elevation: ms(5),
    shadowColor: 'black',
    marginHorizontal: ms(3),
    marginTop: ms(30),
  },
  notificationMessage: {
    color: 'black',
    fontSize: ms(15),
    fontWeight: 'bold',
  },
  notificationDate: {
    color: 'black',
    fontSize: ms(15),
    fontWeight: 'bold',
  },
  divider: {
    borderTopWidth: ms(2),
    borderColor: '#E6E6E6',
    marginVertical: ms(15),
  },
  notificationDetail: {
    flexDirection: 'row',
  },
  notificationLabel: {
    color: 'black',
    fontSize: ms(15),
    fontWeight: 'bold',
  },
});

export default NotificationUi;
