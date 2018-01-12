import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import AddEntry from './components/AddEntry'
import {Ionicons, FontAwesome} from '@expo/vector-icons'
import History from './components/History'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {TabNavigator, StackNavigator} from 'react-navigation'
import {white, purple}from './utils/colors'
import {Constants} from 'expo'
import DetailEntry from './components/DetailEntry'
import Live from './components/Live'

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const Tabs = TabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        }
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        }
    },
    Live: {
        screen: Live,
        navigationOptions: {
            tabBarLabel: 'Live',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>
        }
    }
}, {
    navigationOptions: {
      header:  null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DetailEntry: {
        screen: DetailEntry,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
})

export default class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}