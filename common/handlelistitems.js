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
    button: {
        alignSelf: 'flex-end',
        padding: 100,
        borderColor: '#ededed',
        borderWidth: 10,
        borderRadius: 4,
        marginRight: 50,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    //     alignItems: 'center'
    },
})

export default HandleListItems