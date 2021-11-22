import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useSelector } from 'react-redux'
import CartItem from '../../components/shop/CartItem'


export default function CartScreen() {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => {
        const transformedCartItems = []
        for(const key in state.cart.items){
            transformedCartItems.push({
                productId:key,
                productTitle:state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
                quantity:state.cart.items[key].quantity,
                sum:state.cart.items[key].sum,
            })
        }
        return transformedCartItems
    })

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
            <Text style={styles.summaryText}>Total : <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
            <Button title="Order Now" color={Colors.primary} disabled={cartItems.length === 0} />
            </View>
           <FlatList data={cartItems} keyExtractor={item =>item.productId} renderItem={itemData => <CartItem quantity={itemData.item.quantity} title={itemData.item.productTitle} amount={itemData.item.sum} onRemove={() => {}} />} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        backgroundColor:'white'
    },
    summaryText:{
        fontSize:18,
    },
    amount:{
        color:Colors.primary
    }
})
