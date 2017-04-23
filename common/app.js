import React, { Component } from 'react';
import { View } from 'react-native';

import ShoppingList from './shoppinglist'
import HandleListItems from './handlelistitems'

export default class App extends Component {
  constructor() {
    super();
    shoppingListItems = [
        {
          name: 'bread',
          quantity: 1
        },
        {
          name: 'chocolate',
          quantity: 1000
        },
        {
          name: 'milk',
          quantity: 3
        }
      ];
    this.state = {
      listItems : shoppingListItems
    }
  }

  render() {
      const handleAdd = () => {
          this.state.listItems.push({
                name: 'new',
                quantity: 10
            });
          this.setState(this.state)

        };
        const handleRemove = () => {
          this.state.listItems.pop();
          this.setState(this.state)

        };

    return (
      <View>
        <ShoppingList items={shoppingListItems}/>
        <HandleListItems items={shoppingListItems} handleAdd={handleAdd} handleRemove={handleRemove}/>
      </View>
    );
  }
}
