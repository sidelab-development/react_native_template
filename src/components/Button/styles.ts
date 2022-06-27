import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 200px;
  background-color: '#696969';
  border-radius: 15px;
  align-items: center;
  padding: ${({ theme }) => theme.constants.custom_padding}%;
`

export const Title = styled.Text`
  color: '#000000';
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
`