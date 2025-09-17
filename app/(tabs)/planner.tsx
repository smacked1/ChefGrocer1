import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';
import { useState } from 'react';

export default function PlannerScreen() {
  const [items, setItems] = useState(['Chicken', 'Broccoli', 'Rice']);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  return (
    <Layout>
      <Text style={styles.title}>Weekly Planner</Text>
      <Text style={styles.subtitle}>Plan meals and build your grocery list</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add item..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" color={colors.primary} onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item}</Text>
        )}
        style={styles.list}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: colors.textDark
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10
  },
  input: {
    flex: 1,
    borderColor: colors.divider,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.textLight
  },
  list: {
    marginTop: 20
  },
  item: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 6
  }
});
