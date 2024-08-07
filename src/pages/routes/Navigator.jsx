import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DashboardScreen, LoginScreen } from '../screens';
import ProfilesScreen from '../screens/profiles';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default Navigator;

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="User"
        component={MyTabs}
        options={{drawerLabel: 'test', title: false}}
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={DashboardScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="profiles"
        component={ProfilesScreen}
        options={{title: 'Profiles'}}
      />
    </Tab.Navigator>
  );
}
