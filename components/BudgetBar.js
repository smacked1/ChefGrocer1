import { View, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function BudgetBar({ spent, budget }) {
  const percent = Math.min((spent / budget) * 100, 100);
  const barColor = spent > budget ? 'red' : colors.accentGreen;

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: colors.textDark }}>{`$${spent} / $${budget}`}</Text>
      <View style={{ height: 10, backgroundColor: '#eee', borderRadius: 5 }}>
        <View style={{ width: `${percent}%`, height: 10, backgroundColor: barColor, borderRadius: 5 }} />
      </View>
    </View>
  );
}
