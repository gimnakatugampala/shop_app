import React from 'react'
import { StyleSheet, Text, View ,Platform } from 'react-native'
import { createStackNavigator ,createAppContainer } from 'react-navigation'

import Colors from '../constants/Colors'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'

const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductsDetail:ProductDetailScreen,
    Cart:CartScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)