import { View, Text } from 'react-native';
import estilos from './estilos';

export default function Materia({ nome, professor }) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>{nome}</Text>
      <Text style={estilos.texto}>{professor}</Text>
    </View>
  );
}
