import React from 'react'
import { StyleSheet, Text, View ,FlatList ,Platform ,Button} from 'react-native'
import { useSelector , useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButtons';
import Colors from '../../constants/Colors';

import * as productsActions from '../../store/actions/products'

export default function UserProductsScreen() {

    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
             image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onSelect={() => {}}>
            <Button color={Colors.primary} title="Edit" onPress={() => {}} />
             <Button color={Colors.primary} title="Delete" onPress={() => {
                 dispatch(productsActions.deleteProduct(itemData.item.id))
             }} />
            </ProductItem>}
        />
    )
}

UserProductsScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Products',
      headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
    };
  };

const styles = StyleSheet.create({})
