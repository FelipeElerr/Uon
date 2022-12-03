import React, { useEffect, useState, useContext } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { YellowBox } from 'react-native-web'
import { AuthContext } from '../contexts/auth'

import db from '../config/firebase'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'




export default function Scanner() {

    const [vetor, setVetor] = useState([])
    const { hash, setHash } = useContext(AuthContext)
    const { raBanco, setRaBanco } = useContext(AuthContext)
    const vetorAula = []

    const [hasPermission, setHasPermission] = useState(null),
        [scanned, setScanned] = useState(false),
        [type, setType] = useState(BarCodeScanner.Constants.Type.back),
        [X, setX] = useState(0),
        [Y, setY] = useState(0),
        [width, setWidth] = useState(0),
        [height, setHeight] = useState(0)



    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleSucess = ({ bounds, data }, context) => {
        setScanned(true)
        const { origin, size } = bounds
        setX(origin.x)
        setY(origin.y)
        setHeight(size.height)
        setWidth(size.width)
        setHash(data)
        getDisciplina()
        console.log(hash)
    }

    if (hasPermission === null || hasPermission == false) {
        return <Text>No access</Text>
    }

    const getDisciplina = async () => {
        const snapshotDisc = await getDocs(collection(db, 'Disciplina'))
        snapshotDisc.docs.forEach(item => {
            getChamada(item.id)
        }
        )
    };

    const getChamada = async (disciplina) => {
        setVetor([])
        const snapshotCham = await getDocs(collection(db, 'Disciplina', disciplina, 'Chamada'))
        snapshotCham.docs.forEach(item => {
            const Chamada = {
                dia: item.id,
                dados: item.data()
            }
            for (const aula in Chamada.dados) {
                if (Chamada.dados[aula][0] === hash) {
                    console.log(Chamada.dia, disciplina, aula)
                    vetorAula.push(Chamada.dados[aula])
                    vetorAula[0].push("200767")
                    console.log("Vetor aula: ", vetorAula)
                    pushRA(disciplina, Chamada.dia, aula)
                }
            }
        })
    };

    const pushRA = async (disciplina, dia, aula) => {
        try {

            setDoc(doc(db, 'Disciplina', disciplina, 'Chamada', dia), {
                [aula]: vetorAula[0]
            }, { merge: true });

            console.log("Presença computada")

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <SafeAreaView style={tw`flex-1`}>


            <View style={tw`flex-1`}>
                <Text style={tw`text-3xl font-bold text-center`}>
                    QR code scanner
                </Text>

                <BarCodeScanner
                    type={type}
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
                    }}

                    onBarCodeScanned={scanned ? undefined : handleSucess}
                    style={tw`h-full w-full relative`}
                >
                    <View style={{ position: "absolute", Top: YellowBox, top: X, left: X, width: width, height: height, borderColor: "red", borderWidth: 2 }}></View>
                    <View style={tw`flex-1 flex-row bg-transparent m-16`}>
                        <TouchableOpacity
                            style={tw`bg-blue-400 flex-auto self-end p-4`}
                            onPress={() => {
                                setType(
                                    type === BarCodeScanner.Constants.Type.back
                                        ? BarCodeScanner.Constants.Type.front :
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










