import React from 'react'
import { ActivityIndicator } from 'react-native'

export function Load() {
  return <ActivityIndicator color={'red'} size={50} style={{ flex: 1 }} />
}
