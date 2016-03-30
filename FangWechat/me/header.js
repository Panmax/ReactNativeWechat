/**
 * Created by pan on 16/3/30.
 */
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

var Header = React.createClass({
    render: function () {
        return (
            <TouchableHighlight
                underlayColor="#7A7A7A"
                onPress={() => {alert('aaa')}}
            >
                <View style={[styles.item]}>
                    <Image
                        style={[styles.img]}
                        source={require('image!header')}
                    />
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.text}>Panmax</Text>
                        <Text style={{marginTop:8, fontSize: 14}}>微信号:  China_JP</Text>
                    </View>
                    <View style={{flex:1}} />
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('image!me_qr')}
                            style={styles.qrImg}
                        />
                        <Image
                            source={require('image!forward')}
                            style={styles.forward}
                        />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    item: {
        height: 88,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderTopColor: '#DEDEDE',
        borderBottomColor: '#DEDEDE',
        alignItems: 'center',
        borderTopWidth: Util.pixel,
        borderBottomWidth: Util.pixel,
        marginTop: 15
    },


    img: {
        height: 67,
        width: 67,
        marginLeft:13,
        marginRight:13,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        borderRadius: 8
    },

    qrImg: {
        height: 17,
        width: 17,
        marginRight:4
    },

    forward: {
        height: 16,
        width: 16,
        marginRight:13
    },

    text: {
        fontSize: 17
    }
});

module.exports = Header;