import { Pressable, StyleSheet, Text, View, FlatList,Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Customer_Api, Get_Sales_Api } from '../api/authApi';
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';

const Sale = ({ navigation }) => {
  const [customer, setCustomer] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [salesData, setSalesData] = useState([]);

  const onPressPlusButton = () => {
    navigation.navigate('Add Invoice');
  };

  useFocusEffect(
    React.useCallback(() => {
      getCustomer();
    }, [])
  );

  const getCustomer = async () => {
    try {
      const response = await Customer_Api();
      console.log(response.data);
      if (response.msg === 'Data loaded successfully.') {
        setCustomer(response.data);
      } else {
        Toast.show({
          text1: response.msg,
          type: 'error',
        });
      }
    } catch (error) {
      console.log('Login Error:', error);
      Toast.show({
        text1: 'Error',
        type: 'error',
      });
    }
  };

  const getInvoice = async (customerId) => {
    try {
      const response = await Get_Sales_Api(customerId);
      console.log(response.data);
      if (response.msg === 'Data loaded successfully.') {
        setSalesData(response.data);
      } else {
        Toast.show({
          text1: response.msg,
          type: 'error',
        });
      }
    } catch (error) {
      console.log('Error:', error);
      Toast.show({
        text1: 'Error',
        type: 'error',
      });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getCustomer();
      if (selectedCustomer) {
        getInvoice(selectedCustomer); 
      }
    }, [selectedCustomer])
  );

  const handleCustomer = (itemValue) => {
    setSelectedCustomer(itemValue);
    getInvoice(itemValue);
  };

  const navigateedit=(item)=>{
    navigation.navigate('Edit Invoice',{ itemId: item.id })
  }

  const renderItem = ({ item }) => (
    <View style={styles.invoiceItem}>
      <View style={styles.contentbottom}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.invoiceText}>Invoice: </Text>
          <Text style={styles.invoiceText1}>{item.invoice}</Text>
        </View>
        <Text style={styles.status}>{item.payment_status}</Text>
      </View>
  
      <View style={styles.contentbottom}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.invoiceText}>Invoice Date: </Text>
          <Text style={styles.invoiceText1}>{item.invoice_date}</Text>
        </View>
        <View style={styles.rps}>
          <Text style={styles.text}>₹{item.amt}</Text>
        </View>
      </View>
  
      <View style={styles.contentbottom}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.invoiceText}>Due Date: </Text>
          <Text style={styles.invoiceText1}>{item.due_date}</Text>
        </View>
        <Pressable
          style={{ backgroundColor: '#fff', borderRadius: 50, alignItems: 'center', padding: 3 }}
          onPress={() => navigateedit(item)}>
          <MaterialCommunityIcons name="playlist-edit" size={26} color="black" />
        </Pressable>
      </View>
  
      <View style={styles.button}>
        <Pressable style={styles.button1} onPress={() => Linking.openURL(item.admin_copy)}>
          <MaterialCommunityIcons name="eye" size={26} color="black" style={{ marginRight: 5 }} />
          <Text style={styles.buttontext}>Admin Invoice</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={() => Linking.openURL(item.customer_copy)}>
          <MaterialCommunityIcons name="eye" size={26} color="black" style={{ marginRight: 5 }} />
          <Text style={styles.buttontext}>Customer Invoice</Text>
        </Pressable>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCustomer}
          style={styles.picker}
          onValueChange={handleCustomer}>
          <Picker.Item label="Select Customer" value="" />
          {customer.map((src, index) => (
            <Picker.Item key={index} label={src.name} value={src.id} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.plusButtonContainer}>
        <Pressable style={styles.plusButton} onPress={onPressPlusButton}>
          <AntDesign name="plus" size={35} color="#dbdad3" />
        </Pressable>
      </View>
    </View>
  );
};

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#959990',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 6,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  plusButtonContainer: {
    position: 'absolute',
    backgroundColor: '#385dab',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    alignSelf: 'flex-end',
    bottom: 20,
    right: 20,
  },
  plusButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invoiceItem: {
    backgroundColor: '#ebeff5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  invoiceText: {
    fontSize: 13,
    fontWeight: '600'
  },
  invoiceText1: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black'
  },
  status: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 4,
  },
  contentbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
    rps: {
      backgroundColor: '#385dab',
      padding: 5,
      borderRadius: 5
  },
  text: {
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttontext: {
    fontSize: 16,
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderColor: '#625bc5',
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black'
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700'
  }
});
