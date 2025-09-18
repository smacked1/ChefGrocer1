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
  <Text style={stylesPlanner.title}>Weekly Planner</Text>
  <Text style={stylesPlanner.subtitle}>Plan meals and build your grocery list</Text>

  <View style={stylesPlanner.inputRow}>
        <TextInput
          style={stylesPlanner.input}
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
          <Text style={stylesPlanner.item}>• {item}</Text>
        )}
  style={stylesPlanner.list}
      />
    </Layout>
  );
}

const stylesPlanner = StyleSheet.create({
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
