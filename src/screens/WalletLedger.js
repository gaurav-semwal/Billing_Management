import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WalletLedgerScreen = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  const data = [
    {
      key: '1',
      date: '2024-05-01 18:24:40',
      name: 'User 1',
      mobile: '9876987698',
      email: 'user1@gmail.com',
      address: 'Chd, Chandigarh Chandigarh',
      credit : '',
      debit : '',
    },
    // Add more items here
  ];

  const onFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDatePicker(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDatePicker(Platform.OS === 'ios');
    setToDate(currentDate);
  };
  const formatDate = (date) => {
    // Format the date as 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const renderItem = ({item}) => (
    <View style={styles.userInfoContainer}>
      <Text style={styles.label}>Date : {item.date}</Text>
      <Text style={styles.label}>Name : {item.name}</Text>
      <Text style={styles.label}>Mobile No. : {item.mobile}</Text>
      <Text style={styles.label}>Email ID : {item.email}</Text>
      <Text style={styles.label}>Address : {item.address}</Text>
      <Text style={styles.label}>Credit Amount : {item.credit}</Text>
      <Text style={styles.label}>Debit Amount : {item.debit}</Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowFromDatePicker(true)} style={{width:'40%', justifyContent: 'space-between'}}>
          <TextInput
            label="From Date"
            value={formatDate(fromDate)}    
            mode="outlined" 
            editable={false}    
           
          />
          <Fontisto name="date" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowToDatePicker(true)} style={{width:'40%', justifyContent: 'space-between'}}>
          <TextInput
            label="To Date"
            value={formatDate(fromDate)}  
            mode="outlined"
            editable={false}
          />
          <Fontisto name="date" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <Icon
          name="magnify"
          size={26}
          style={styles.searchIcon}
          color={'#fff'}
        />
      </View>

      {showFromDatePicker && (
        <DateTimePicker
          value={fromDate}
          mode="date"
          display="default"
          onChange={onFromDateChange}
        />
      )}
      {showToDatePicker && (
        <DateTimePicker
          value={toDate}
          mode="date"
          display="default"
          onChange={onToDateChange}
        />
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginHorizontal: 8, 
    marginBottom: 10, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    marginTop: '4%'
  },
  userInfoContainer: {
    padding: 20,
    backgroundColor: '#d0ddf2',
    marginHorizontal: 4,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchIcon: {
    marginRight: '4%',
    backgroundColor: '#385dab',
    borderRadius: 50,
    padding: 6,
    // height: 40,
    // width: 40,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: '30%',
    marginRight:8,
  },
});

export default WalletLedgerScreen;
