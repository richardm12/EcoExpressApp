import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Componente para mostrar un contacto
const ContactItem = ({ name, phone }) => {
  return (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactPhone}>{phone}</Text>
    </View>
  );
};

// Componente para mostrar la lista
const ContactList = ({ contacts }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ContactItem name={item.name} phone={item.phone} />
      )}
    />
  );
};

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Richard Moreno', phone: '0991111111' },
    { id: '2', name: 'Juan Pérez', phone: '0982222222' },
    { id: '3', name: 'María López', phone: '0973333333' },
  ]);

  const addContact = () => {
    const newContact = {
      id: Math.random().toString(),
      name: 'Nuevo Contacto',
      phone: '0964444444',
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contactos</Text>

      <Button title="Agregar contacto" onPress={addContact} />

      <View style={styles.listContainer}>
        <ContactList contacts={contacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 20,
  },
  contactItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
});