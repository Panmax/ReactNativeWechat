/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var Util = require('./FangWechat/util');
var Icon = require('react-native-vector-icons/FontAwesome');
var Message = require('./FangWechat/message');
var Contact = require('./FangWechat/contact')
var Found = require('./FangWechat/found');
var Me = require('./FangWechat/me');

var {
    AppRegistry,
    View,
    StyleSheet,
    TabBarIOS,
    Text,
    NavigatorIOS,
    StatusBar,
    Image
    } = React;

StatusBar.setBarStyle('light-content');

var fangWechat = React.createClass({
    getInitialState: function () {
        return {
            selectedTab: 'message'
        }
    },

    selectTab: function (tab) {
        this.setState({
            selectedTab: tab
        })
    },

    addNavigator: function (component, title) {
        return (
            <NavigatorIOS
                style={{flex:1}}
                barTintColor="#000"
                titleTextColor="#fff"
                rightButtonIcon={require('image!plus')}
                tintColor="#fff"
                initialRoute={{
                    component: component,
                    title: title
                }}
            />
        )
    },

    getIcon: function (icon) {
        return (
            <Image
                style={{height: 40, width:40}}
                source={icon}
            />
        )
    },

    render: function () {
        var img = require('image!message');
        return (
            <TabBarIOS
                tintColor="#45b640"
                barTintColor="#F5F6F8"
            >
                <TabBarIOS.Item
                    icon={img}
                    selectedIcon={require('image!message_fill')}
                    title="微信"
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => this.selectTab('message')}
                >
                    {this.addNavigator(Message, '微信')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('image!contact')}
                    selectedIcon={require('image!contact_fill')}
                    title="通讯录"
                    selected={this.state.selectedTab === 'contact'}
                    onPress={() => this.selectTab('contact')}
                >
                    {this.addNavigator(Contact, '通讯录')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('image!found')}
                    selectedIcon={require('image!found_fill')}
                    title="发现"
                    selected={this.state.selectedTab === 'found'}
                    onPress={() => this.selectTab('found')}
                >
                    {this.addNavigator(Found, '发现')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('image!me')}
                    selectedIcon={require('image!me_fill')}
                    title="我"
                    selected={this.state.selectedTab === 'me'}
                    onPress={() => this.selectTab('me')}
                >
                    {this.addNavigator(Me, '我')}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('fangWechat', () => fangWechat);
