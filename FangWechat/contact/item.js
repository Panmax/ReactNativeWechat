/**
 * Created by pan on 16/3/30.
 */
var React = require('react-native');
var Util = require('../util');

var {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    TouchableHighlight
    } = React;

var Item = React.createClass({
    render: function () {
        return (
            <TouchableHighlight
                underlayColor="#7A7A7A"
                onPress={() => {alert('aaa')}}
            >
                <View>
                    {this.props.topBorder? (
                        <View style={{flex: 1, flexDirection:'row'}}>
                            <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', flex:1}} />
                        </View>
                    ): null}
                    <View style={[styles.item]}>
                        <Image
                            style={[styles.header]}
                            source={this.props.header}
                        />
                        <View style={{width:(Util.size.width-100)}}>
                            <Text
                                style={styles.text}
                                numberOfLines={1}
                            >{this.props.title}</Text>
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
        height: 54,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center'
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
        height: 35,
        width: 35,
        marginLeft:10,
        marginRight:13,
    },


    text: {
        fontSize: 16.5,
    },
});

module.exports = Item;