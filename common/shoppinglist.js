import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ShoppingList extends Component {

    render() {
        const { items } = this.props
        itemView = this.buildItemList()
        return (
            <View>
                <Text></Text>
                <Text>Shopping List: {items.length}</Text>
                {itemView}
            </View>
        )
    }

    buildItemList() {
        const { items } = this.props

        itemView = []
        for (i=0; i<items.length; i++) {
            item = items[i];
            itemView.push(
                <Text key= {i}>{item.quantity}x {item.name}</Text>
            )
        }
        return itemView;
    }
}
