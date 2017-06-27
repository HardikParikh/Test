'use strict';

    import React, {
        StyleSheet,
        View,
        TouchableHighlight,
        Text,
        Dimensions,
    } from 'react-native';

    var NextPage = require('./nextPage.ios.js');

    var rootPage = React.createClass({
        goDerper: function() {
            this.props.navigator.push({
                title: 'nextPage',
                component: NextPage,
                navigationBarHidden: true,
                passProps: {myElement: 'text'}
            });
        },
        render: function(){
            return(
                <View style={styles.container}>
                    <TouchableHighlight
                        onPress={() => this.goDerper()}>
                        <Text>We must go derper</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    })

    var styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    });
    module.exports = rootPage;