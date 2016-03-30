/**
 * Created by pan on 16/3/30.
 */
var React = require('react-native');
var Util = require('./util');
var Item = require('./message/item');

var {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableHighlight
    } = React;

var Message = React.createClass({
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
                        name="德玛西亚"
                        content="人在塔在!"
                        time="15:07"
                        header={require('image!demaxiya')}
                        topBorder
                        paddingBottomBorder
                        that={this}
                    />
                    <Item
                        name="啦啦啦啦"
                        content="我陪你吃草"
                        time="14:58"
                        header={require('image!header2')}
                        paddingBottomBorder
                        that={this}
                    />
                    <Item
                        name="文件传输助手"
                        content="[图片]"
                        time="13:42"
                        header={require('image!file-manager')}
                        bottomBorder
                        that={this}
                    />
                </View>
            </ScrollView>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFF6',
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

module.exports = Message;