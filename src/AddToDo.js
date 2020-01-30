import React,{Component} from 'react'

import {View,TextInput,Button} from 'react-native'


export default class AddToDo extends Component {
    state = {
        text:''
    }

    onChangeText = (text) => {
        this.setState({text});
    }
    onPress = () => {
        const { onAdded } = this.props;
        onAdded(this.state.text);
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeText}></TextInput>
                <Button title="A" onPress={this.onPress}></Button>
            </View>
        )
    }
}