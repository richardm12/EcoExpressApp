import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

// COMPONENTE PERSONALIZADO (Tarjeta de Perfil)
const ProfileCard = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default function App() {

  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.container}>

      <ProfileCard>

        <Image
  source={require('./assets/perfil.jpg')}
  style={styles.image}
/>

        <Text style={styles.name}>Ricahrd Moreno</Text>
        <Text style={styles.email}>morenorichard963@gmail.com</Text>

        <TextInput
          placeholder="Actualizar número de teléfono"
          value={telefono}
          onChangeText={setTelefono}
          style={styles.input}
        />

        <Button
          title="Guardar cambios"
          onPress={() => alert('Cambios guardados')}
        />

      </ProfileCard>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});