import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function CartItem(props) {
    return (
        <View style={styles.CartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.mainText}>{props.quantity}</Text> <Text style={styles.title}>{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
               {props.deletable && <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23}  color="red" />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    itemData:{
        flexDirection:'row',
        alignItems:'center'
    },
    quantity:{
        color:'#888',
        fontSize:16
    },
    mainText:{
        fontSize:16
    },
    deleteButton:{
        marginLeft:20
    }
})
