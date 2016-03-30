/**
 * Created by pan on 16/3/29.
 */
var React = require('react-native');
var Item = require('./found/item');

var {
    StyleSheet,
    View,
    ScrollView
    } = React;

var Found = React.createClass({
    render: function () {
        return (
            <ScrollView style={styles.container}>
                <View style={[styles.group, {marginTop: 15}]}>
                    <Item
                        title="朋友圈"
                        icon={require('image!pengyouquan')}
                        topBorder
                        bottomBorder
                    />
                </View>

                <View style={styles.group}>
                    <Item
                        title="扫一扫"
                        icon={require('image!scanning')}
                        topBorder
                        paddingBottomBorder
                    />
                    <Item
                        title="摇一摇"
                        icon={require('image!shake')}
                        bottomBorder
                    />
                </View>

                <View style={styles.group}>
                    <Item
                        title="附近的人"
                        icon={require('image!nearby')}
                        topBorder
                        paddingBottomBorder
                    />
                    <Item
                        title="漂流瓶"
                        icon={require('image!bottle')}
                        bottomBorder
                    />
                </View>

                <View style={styles.group}>
                    <Item
                        title="购物"
                        icon={require('image!shopping')}
                        topBorder
                        paddingBottomBorder
                    />
                    <Item
                        title="游戏"
                        icon={require('image!game')}
                        bottomBorder
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
    group: {
        marginTop: 20
    }
});

module.exports = Found;