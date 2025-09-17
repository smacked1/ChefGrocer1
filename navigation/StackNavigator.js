import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import GroceryList from '../screens/GroceryList';
import Planner from '../screens/Planner';
import Recipes from '../screens/Recipes';
import Settings from '../screens/Settings';
import Paywall from '../screens/Paywall';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="GroceryList" component={GroceryList} />
			<Stack.Screen name="Planner" component={Planner} />
			<Stack.Screen name="Recipes" component={Recipes} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Paywall" component={Paywall} />
		</Stack.Navigator>
	);
}
