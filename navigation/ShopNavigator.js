import React from 'react'
import { StyleSheet, Text, View ,Platform } from 'react-native'
import { createStackNavigator ,createAppContainer , createDrawerNavigator } from 'react-navigation'

import Colors from '../constants/Colors'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import { Ionicons } from '@expo/vector-icons'

const defaultNavOptions = {
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductsDetail:ProductDetailScreen,
    Cart:CartScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions:defaultNavOptions
})

const OrderNavigator = createStackNavigator({
    Orders:OrdersScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions:defaultNavOptions
})

const ShopNavigator = createDrawerNavigator({
    Products:ProductsNavigator,
    Orders:OrderNavigator
},{
    contentOptions:{
        activeTintColor:Colors.primary
    }
})

export default createAppContainer(ShopNavigator)