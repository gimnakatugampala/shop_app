import React from 'react'
import { StyleSheet, Text, View , FlatList } from 'react-native'
import { useSelector ,useDispatch } from 'react-redux'
import * as cartActions from '../../store/actions/cart'
import ProductItem from '../../components/shop/ProductItem'

export default function ProductsOverviewScreen(props) {

    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    return (
        <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <ProductItem image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetail={() => {
            props.navigation.navigate('ProductsDetail',{productId:itemData.item.id,productTitle:itemData.item.title})
        }} onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item))
        }} />} />
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle:'All Products'
}


const styles = StyleSheet.create({})
