import { ButtonContainer, ButtonVarColor } from './Button.styles'

interface IButtonProps {
  color?: ButtonVarColor
}

export function Button({ color = 'primary' }: IButtonProps) {
  return <ButtonContainer varColor={color}>Enviar</ButtonContainer>
}
