import React from 'react'
import { StyleSheet, Text, View ,Platform } from 'react-native'
import { createStackNavigator ,createAppContainer } from 'react-navigation'

import Colors from '../constants/Colors'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'

const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductsOverviewScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)