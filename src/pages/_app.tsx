import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar/navbar';
import Login from './login/index';

const App = (): React.ReactElement => {
  return (
    <ChakraProvider>
      <Navbar />
      <Login />
    </ChakraProvider>
  )
}

export default App;