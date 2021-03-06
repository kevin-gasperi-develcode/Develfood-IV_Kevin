import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { ButtonStandard } from '../../../components/buttonStandard'
import { HeaderRegister } from '../../../components/headerRegister'
import {
  Container,
  Content,
  SubTitle,
  Title,
  ViewImage,
  Wrapper,
} from './styles'

export function RegisterSucess() {
  const theme = useTheme()
  const navigation = useNavigation()

  const onSignInPressed = () => {
    navigation.navigate('SignIn' as never)
  }

  return (
    <Container>
      <HeaderRegister />
      <Content>
        <ViewImage source={theme.icons.girl_success} />
        <Wrapper>
          <Title>Cadastro Finalizado!</Title>
          <SubTitle>
            Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
            economizar com super cupons Develfood.
          </SubTitle>
          <ButtonStandard title="Concluir" onPressed={onSignInPressed} />
        </Wrapper>
      </Content>
    </Container>
  )
}
