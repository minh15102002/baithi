import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Cart from '../screens/Cart';
import LoginScreen from '../screens/LoginScreen';
import RegiterScreen from '../screens/RegiterScreen';

const Stack = createStackNavigator();

const Stacks = () =>  {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,}}
        >
        
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Resgiter" component={RegiterScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
      
      
      {/* <Stack.Screen name="Settings" component={Settings} />  */}
    </Stack.Navigator>
  );
}
export default Stacks;
