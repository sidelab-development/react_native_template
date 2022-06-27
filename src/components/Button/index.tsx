import React from "react";
import { Container, Title } from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}