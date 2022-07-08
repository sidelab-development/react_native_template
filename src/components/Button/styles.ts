import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.constants.screen_padding}px;
`

export const Title = styled.Text`
  color: #222222;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
`