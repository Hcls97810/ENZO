import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

const LoadingIndicator = (props) =>
    <View style={styles.loadingContainer}>
        <View style={styles.backgroundContainer} />
        <ActivityIndicator
            style={styles.loadingIndicator}
        />
    </View>

export default LoadingIndicator
