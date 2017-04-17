import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class HandleListItems extends Component {

    render() {        
        const { items, handleAdd, handleRemove } = this.props
        
        return (
            <View style={styles.buttons} >
                <Button onPress={handleAdd} title='Add'/>
                <Button onPress={handleRemove} title='Remove'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})

export default HandleListItems