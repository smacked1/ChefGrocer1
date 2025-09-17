import Layout from '../components/Layout';
import { Text } from 'react-native';
import { fonts } from '../theme/fonts';

export default function GroceryList() {
  return (
    <Layout>
      <Text style={fonts.title}>Grocery List</Text>
      {/* Add grocery list logic here */}
    </Layout>
  );
}
