import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card } from 'native-base';
import { BaseScreen, Button } from "@components";
import { Theme } from "@theme"

import { connect } from 'react-redux';
import { phoneVerify } from '../../../store/auth';

class ApprovingAccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pincode: '',
        }
    }
    onPressNext() {
        const verifyInfo = {
            email: this.props.auth.user.email,
            token: parseInt(this.state.pincode)
        }
        this.props.dispatch(phoneVerify(verifyInfo));
    }
    componentDidUpdate() {
        if (this.props.auth.user.is_approved && this.props.auth.user.is_phone_verified) {
            this.props.navigation.navigate('ChooseCategory');
        }
    }
    render() {
        return (
            <BaseScreen>
                <View style={styles.container}>
                    <Text style={styles.title}>{'Enter Enzo Access Code'}</Text>
                    <View style={{ paddingHorizontal: Theme.padding.pad4, paddingTop: 150 * Theme.Ratio.H }}>
                        <Card style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                autoCapitalize='none'
                                placeholder='input your code'
                                value={this.state.pincode}
                                onChangeText={(text) => this.setState({ pincode: text })}
                                keyboardType='phone-pad'
                            />
                        </Card>
                        <Button name="Next" onPress={() => this.onPressNext()} />
                    </View>
                </View>
            </BaseScreen>
        )
    }
}

const mapStateToProps = state => {
    const props = {
        auth: state.auth
    };
    return props;
};

export default connect(mapStateToProps)(ApprovingAccountScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Theme.padding.pad2
    },
    title: {
        fontWeight: "bold",
        fontSize: Theme.fontSize.h2,
        color: Theme.colors.White,
        marginTop: 160 * Theme.Ratio.H,
        textAlign: "center",
    },
    text: {
        fontSize: Theme.fontSize.p2,
        color: Theme.colors.White,
        marginTop: 20 * Theme.Ratio.H,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        height: Theme.padding.pad4,
        paddingHorizontal: Theme.padding.pad2,
        alignItems: "center",
        borderRadius: Theme.padding.pad2,
        shadowColor: Theme.colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: Theme.padding.pad0,
        shadowOffset: { width: 1, height: 4 },
        marginBottom: Theme.padding.pad4
    },
    textInput: {
        flex: 1,
        fontSize: Theme.fontSize.p2,
        padding: 0,
        alignItems: "center",
        textAlign: 'center'
    }
})