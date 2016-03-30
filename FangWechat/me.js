/**
 * Created by pan on 16/3/30.
 */
var React = require('react-native');
var Header = require('./me/header');
var Item = require('./found/item');

var {
    ScrollView,
    StyleSheet,
    View
    } = React;

var Me = React.createClass({
    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Header
                    title="aaa"
                />

                <View style={styles.group}>
                    <Item
                        title="相册"
                        topBorder
                        paddingBottomBorder
                        icon={require('image!album')}
                    />
                    <Item
                        title="收藏"
                        paddingBottomBorder
                        icon={require('image!collection')}
                    />
                    <Item
                        title="钱包"
                        paddingBottomBorder
                        icon={require('image!wallet')}
                    />
                    <Item
                        title="优惠券"
                        bottomBorder
                        icon={require('image!youhuiquan')}
                    />
                </View>

                <View style={styles.group}>
                    <Item
                        title="表情"
                        topBorder
                        bottomBorder
                        icon={require('image!expression')}
                    />
                </View>

                <View style={styles.group}>
                    <Item
                        title="设置"
                        topBorder
                        bottomBorder
                        icon={require('image!setting')}
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

module.exports = Me;