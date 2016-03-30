/**
 * Created by pan on 16/3/30.
 */
var React = require('react-native');
var Util = require('../util');
var Chat = require('./chat');

var {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    TouchableHighlight
    } = React;

var Item = React.createClass({
    startChat: function (title) {
        this.props.that.props.navigator.push({
            title: title,
            component: Chat,
            rightButtonIcon: require('image!user-icon')
        })
    },

    render: function () {
        var name = this.props.name;
        return (
            <TouchableHighlight
                underlayColor="#7A7A7A"
                onPress={() => this.startChat(name)}
            >
                <View>
                    {this.props.topBorder? (
                        <View style={{flex: 1, flexDirection:'row'}}>
                            <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', flex:1}} />
                        </View>
                    ): null}
                    <View style={[styles.item]}>
                        <View style={styles.itemContent}>
                            <Image
                                style={[styles.header]}
                                source={this.props.header}
                            />
                            <View style={{width:(Util.size.width-160)}}>
                                <Text
                                    style={styles.text}
                                    numberOfLines={1}
                                >{this.props.name}</Text>
                                <Text
                                    numberOfLines={1}
                                    style={styles.contentText}
                                >{this.props.content}</Text>
                            </View>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.timeText}>{this.props.time}</Text>
                        </View>
                    </View>
                    {this.props.bottomBorder? (
                        <View style={{flex: 1, flexDirection:'row'}}>
                            <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', flex:1}} />
                        </View>
                    ): null}
                    {this.props.paddingBottomBorder? (
                        <View style={{flex: 1, flexDirection:'row'}}>
                            <View style={{height: Util.pixel,backgroundColor: '#fff', width:10}}/>
                            <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', width:Util.size.width-10}} />
                        </View>
                    ): null}
                </View>
            </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    item: {
        height: 67.5,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
    },

    itemContent: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderTopColor: '#DEDEDE',
        borderBottomColor: '#DEDEDE',
        alignItems: 'center'
    },

    header: {
        height: 51,
        width: 51,
        marginLeft:10,
        marginRight:13,
        borderRadius: 4
    },

    time: {
        marginTop:12,
        marginRight: 12
    },

    timeText: {
        fontSize: 12,
        color: '#7A7A7A'
    },

    text: {
        fontSize: 16.5,
    },

    contentText: {
        color: '#7A7A7A',
        marginTop: 8
    }
});

module.exports = Item;