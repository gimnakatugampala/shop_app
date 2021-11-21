import React from 'react'
import { StyleSheet, Text, View , FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'

export default function ProductsOverviewScreen(props) {

    const products = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <ProductItem image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetail={() => {
            props.navigation.navigate('ProductsDetail',{productId:itemData.item.id,productTitle:itemData.item.title})
        }} onAddToCart={() => {}} />} />
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle:'All Products'
}


const styles = StyleSheet.create({})
