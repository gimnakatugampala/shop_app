import React from 'react'
import { StyleSheet, Text, View , FlatList ,Platform ,Button } from 'react-native'
import { useSelector ,useDispatch } from 'react-redux'
import * as cartActions from '../../store/actions/cart'
import ProductItem from '../../components/shop/ProductItem'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import HeaderCustom from '../../components/UI/HeaderButtons'
import Colors from '../../constants/Colors'

export default function ProductsOverviewScreen(props) {

    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    const selectItemHandler = (id,title) => {
        props.navigation.navigate('ProductsDetail',{
            productId:id,
            productTitle:title
        })
    }

    return (
        <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <ProductItem 
            onSelect={() => {
                selectItemHandler(itemData.item.id,itemData.item.title)
            }}
            image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} 
            //onViewDetail={() => {
           // props.navigation.navigate('ProductsDetail',{productId:itemData.item.id,productTitle:itemData.item.title})}} 
           />} >
              <Button color={Colors.primary} title="View Details" onPress={() => {
                        selectItemHandler(itemData.item.id,itemData.item.title)
                    }
              } />
             <Button color={Colors.primary} title="To Cart" onPress={() => {
                 dispatch(cartActions.addToCart(itemData.item))
             }} />
        </FlatList>
    )
}

ProductsOverviewScreen.navigationOptions = navData =>  {
    return{
    headerTitle:'All Products',
    headerLeft:(<HeaderButtons HeaderButtonComponent={HeaderCustom}>
        <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {
            navData.navigation.toggleDrawer()
        }} />
    </HeaderButtons>),
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderCustom}>
        <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {
            navData.navigation.navigate('Cart')
        }} />
    </HeaderButtons>)
    }
}


const styles = StyleSheet.create({})
