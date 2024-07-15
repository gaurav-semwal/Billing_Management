import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, ExpenseForm} from '../screens';
import Settingsscreen from '../screens/Settingsscreen';
import WalletLedger from '../screens/WalletLedger';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AllExpenses from '../screens/AllExpenses';
import Sale from '../screens/Sale';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarStyle: { backgroundColor: '#fff' },
      tabBarActiveTintColor: '#385dab',
      tabBarInactiveTintColor: '#8a8a87',
    }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true, headerStyle: {backgroundColor: '#385dab'}, headerTitleStyle: {color: '#fff', alignSelf: 'center'},  tabBarIcon: ({ color,   size }) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        ),}}
      />

      {/* <Tab.Screen
        name="Add Expenses"
        component={AddExpenseForm}
        options={{
          headerStyle: {backgroundColor: '#385dab'},
          headerTitleStyle: {color: '#fff', alignSelf: 'center'},
          headerTitleAlign: 'center',
          tabBarIcon: ({ color,   size }) => (
            <Ionicons name="calculator-sharp" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="arrow-back" size={26} color="#fff" />
            </TouchableOpacity>
          ),
          headerShown: true,
        }}
      /> */}

<Tab.Screen name='Expenses' component={AllExpenses} options={{headerShown: true, headerStyle: {backgroundColor: '#385dab'}, headerTitleStyle: {color: '#fff', alignSelf: 'center'},  tabBarIcon: ({ color,   size }) => (
            <Ionicons name="calculator-sharp" size={size} color={color} />
          ),}}/>

     
      <Tab.Screen name='Invoice' component={Sale} options={{headerShown: true, headerStyle: {backgroundColor: '#385dab'}, headerTitleStyle: {color: '#fff', alignSelf: 'center'}, tabBarIcon: ({ color,   size }) => (
            <FontAwesome5 name="sort-amount-up" size={size} color={color} />
          ), headerStyle: {backgroundColor: '#385dab'}, headerTitleStyle: {color: '#fff', alignSelf: 'center'}, }}/>
      <Tab.Screen name='Setting' component={Settingsscreen} options={{headerShown: true, tabBarIcon: ({ color,   size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ), headerStyle: {backgroundColor: '#385dab'}, headerTitleStyle: {color: '#fff', alignSelf: 'center'}, }}/>
    </Tab.Navigator>
  );
};

export default BottomTab;
