import React from 'react'
import { StyleSheet, Text, View ,Image, Button ,TouchableOpacity ,TouchableNativeFeedback , Platform } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function ProductItem(props) {

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.OS >= 21){
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.product}>
            <TouchableCmp onPress={props.onSelect} useForeground>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:props.image}} />
            </View>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart} />
            </View>
        </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    details:{
        alignItems:'center',
        height:'20%',
        padding:10
    },
    title:{
        fontSize:18,
        marginVertical:4
    },
    price:{
        fontSize:14,
        color:'#888'
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'20%',
        paddingHorizontal:20
    },
    imageContainer:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    }
})
