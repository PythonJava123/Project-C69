import * as React from 'react';
import { Text, View, TouchableOpacity, Stylesheet} from 'react-native';

export default class OtherScreen extends React.Component{
    render(){
        return(
            <View style={{marginTop:150, marginLeft:100}}>
                <Text>Dummy screen used for the tab navigation. Other screen has Bar Code Scanner</Text>
            </View>
        )
    }
}