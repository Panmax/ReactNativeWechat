/**
 * Created by pan on 16/3/30.
 */
var React = require('react-native');
var Util = require('./util');
var Item = require('./contact/item');

var {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableHighlight
    } = React;

var Contact = React.createClass({
    render: function () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.search}>
                    <View style={styles.searchBtn}>
                        <TouchableHighlight>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>
                                    <Image
                                        style={{height: 14, width: 14, marginRight:6}}
                                        source={require('image!search')}
                                    />
                                    <Text style={{fontSize:14, color: '#7A7A7A'}}>搜索</Text>
                                </View>
                                <View>
                                    <Image
                                        style={{height: 15, width: 15, marginRight:6}}
                                        source={require('image!microphone')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

                <View>
                    <Item
                        title="新的朋友"
                        header={require('image!new-friend')}
                        topBorder
                        paddingBottomBorder
                    />
                    <Item
                        title="群聊"
                        header={require('image!group')}
                        paddingBottomBorder
                    />
                    <Item
                        title="标签"
                        header={require('image!tag')}
                        paddingBottomBorder
                    />
                    <Item
                        title="公众号"
                        header={require('image!gongzhonghao')}
                        bottomBorder
                    />
                </View>
            </ScrollView>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF6',
        flex: 1,
    },
    search: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    searchBtn: {
        height: 26,
        borderColor: '#DEDEDE',
        borderWidth: Util.pixel,
        borderRadius: 4,
        flex: 1,
        backgroundColor: '#fff',
        marginLeft:7,
        marginRight:7,
        justifyContent: 'center'
    }
});

module.exports = Contact;