import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from './styles'
import Chip from './chip'

const TopSection = () => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Chip name='All' selected={true}/>
      <Chip name='International'/>
      <Chip name='League'/>
      <Chip name='Domestic'/>
      <Chip name='Women'/>
    </Container>
  )
}

export default TopSection

const styles = StyleSheet.create({})