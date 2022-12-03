import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilos from './estilos';
import { LinearGradient } from 'expo-linear-gradient';
export default function Cabecalho({ navigation }) {

  return (
    <View style={estilos.container}>
      <LinearGradient colors={['white','#6cbdc3']} style={estilos.background}/> 
    </View>
  );
}
