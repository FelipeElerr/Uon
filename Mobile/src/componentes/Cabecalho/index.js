import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilos from './estilos';

export default function Cabecalho({ navigation }) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Matérias 6° semestre</Text>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.replace('Login')}>
        <Icon 
          name={'log-out'} 
          size={20} 
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}
