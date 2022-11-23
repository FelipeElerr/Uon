import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner() {

    const [hasPermission, setHasPermission] = useState(null),
        [scanned, setScanned] = useState(false)

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleSucess = ({ type, data }) => {
        setScanned(true)
    }

    if (hasPermission === null || hasPermission == false) {
        return <Text>No access</Text>
    }

    return (
        <View style={tw`w-full h-full`}>
            <Text style={tw`text-3xl font-bold text-center`}>
                QR code scanner
            </Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleSucess}
                style={tw`h-full w-full`}
            />
        </View>
    )
}