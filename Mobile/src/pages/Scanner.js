import React, { useEffect, useState, useContext } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { YellowBox } from 'react-native-web'

import  { AuthContext } from '../contexts/auth'


export default function Scanner() {

    const [hasPermission, setHasPermission] = useState(null),
        [scanned, setScanned] = useState(false),
        [type, setType]= useState(BarCodeScanner.Constants.Type.back),
        [X, setX] = useState(0),
        [Y, setY] = useState(0),
        [width, setWidth] = useState(0),
        [height, setHeight] = useState(0)

    const {setHash} = useContext(AuthContext)
        

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleSucess = ({bounds,data}, context) => {
        const{origin, size} = bounds
        setX(origin.x)
        setY(origin.y)
        setHeight(size.height)
        setWidth(size.width)
        setHash(data)
    }

    if (hasPermission === null || hasPermission == false) {
        return <Text>No access</Text>
    }

    return (
        <SafeAreaView style={tw`flex-1`}>


            <View style={tw`flex-1`}>
                <Text style={tw`text-3xl font-bold text-center`}>
                    QR code scanner
                </Text>
                
                <BarCodeScanner
                    type = {type}
                    barCodeScannerSettings = {{
                        barCodeTypes : [BarCodeScanner.Constants.BarCodeType.qr]
                    }}
                    
                    onBarCodeScanned={scanned ? undefined : handleSucess}
                    style={tw`h-full w-full relative`}
                >
                    <View style={{position:"absolute", Top:YellowBox, top: X, left: X, width:width, height:height, borderColor:"red", borderWidth:2}}></View>
                    <View style={tw`flex-1 flex-row bg-transparent m-16`}>
                        <TouchableOpacity 
                        style={tw`bg-blue-400 flex-auto self-end p-4`}
                        onPress={() => {
                            setType(
                                type===BarCodeScanner.Constants.Type.back
                                ?BarCodeScanner.Constants.Type.front : 
                                BarCodeScanner.Constants.Type.back
                            )
                        }}
                        >
                            <Text style={tw`text-white text-center`}>
                                Flip Camera
                            </Text>
                        </TouchableOpacity>
                    </View>

                </BarCodeScanner>
            </View>
        </SafeAreaView>


    )
}