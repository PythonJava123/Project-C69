import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super()
        this.state = {
     hasCameraPermission: null,
     scanned: false,
     scannedData: '',
     buttonState: 'normal'

        }
    }
    getCameraPermission = async () =>{

        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status === 'granted',
        })

    }

    handleBarCodeScanned = async ({type,data}) => {

this.setState({

    scanned: 'true',
    scannedData: 'data',
    buttonState: 'normal',

})

    }

    render(){
        const hasCameraPermission = this.state.hasCameraPermission;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if(buttonState === 'clicked' && hasCameraPermission){
            return(
                <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
            )
        }
        else if( buttonState === 'normal'){
        return(
            <View style={styles.container}>
                <Text style={styles.displayText}>{hasCameraPermission === true ? this.state.scannedData : 'Requesting Camera Permission'}
                </Text>
                <Image source={require('../assets/barcode.jpeg')} style={{width: 200, height: 200}}></Image>
            <TouchableOpacity onPress={this.getCameraPermission} style={styles.scanButton}>
            <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
            </View>
        )
    }
    }
}

const styles = StyleSheet.create({

container: {

flex: 1,
justifyContent: 'center',
alignItems: 'center'

},

displayText:{

fontSize: 15,
textDecorationLine: 'bold',

},

scanButton:{

backgroundColor: 'red',
padding: 10,
margin: 10,

},

buttonText: {

fontSize: 20

},

})