import { ChakraProvider } from '@chakra-ui/react'
import Login from './login/index';

const App = (): React.ReactElement => {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App;