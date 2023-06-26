import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="success" />
      <Button color="danger" />
      <GlobalStyle />
    </ThemeProvider>
  )
}
