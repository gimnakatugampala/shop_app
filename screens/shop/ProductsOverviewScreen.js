import React from 'react'
import { StyleSheet, Text, View , FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function ProductsOverviewScreen() {

    const products = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>} />
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle:'All Products'
}


const styles = StyleSheet.create({})
