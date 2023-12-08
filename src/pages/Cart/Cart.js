import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import chatIcon from '../../../assets/chaticon.png';
import logo from '../../../assets/logo.png';

const Cart = ({ navigation }) => {
  const cartItems = [
    {
      id: 1,
      name: 'Camiseta Esportiva 1',
      price: 'R$ 120,00',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Camiseta Esportiva 2',
      price: 'R$ 130,00',
      quantity: 2,
    },
  ];

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };
  const goToProductPage = () => {
    navigation.navigate('ProductScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToProductPage}>
          <Image source={logo} style={styles.icon} />
        </TouchableOpacity>

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Image source={chatIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.cartItemsContainer}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.cartItemsList}
        />
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EEE7',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#2A9F85',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navBarButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#F4EEE7',
  },
  cartItemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#2A9F85',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  checkoutButton: {
    backgroundColor: '#72AB86',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4EEE7',
  },
});

export default Cart;
