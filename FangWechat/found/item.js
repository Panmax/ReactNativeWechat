/**
 * Created by pan on 16/3/29.
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
                        style={[styles.img]}
                        source={this.props.icon}
                    />
                    <View>
                        <Text style={styles.text}>{this.props.title}</Text>
                    </View>
                    <View style={{flex:1}} />
                    <View>
                        <Image
                            source={require('image!forward')}
                            style={styles.forward}
                        />
                    </View>
                </View>
                {this.props.bottomBorder? (
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', flex:1}} />
                    </View>
                ): null}
                {this.props.paddingBottomBorder? (
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{height: Util.pixel,backgroundColor: '#fff', width:15}}/>
                        <View style={{height: Util.pixel,backgroundColor: '#DEDEDE', width:Util.size.width-15}} />
                    </View>
                ): null}
            </View>
        </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    item: {
        height: 43.5,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderTopColor: '#DEDEDE',
        borderBottomColor: '#DEDEDE',
        alignItems: 'center'
    },

    img: {
        height: 25,
        width: 25,
        marginLeft:15,
        marginRight:18
    },

    forward: {
        height: 16,
        width: 16,
        marginRight:13
    },

    text: {
        fontSize: 16.5
    }
});

module.exports = Item;