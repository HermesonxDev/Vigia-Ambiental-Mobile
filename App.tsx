import { GlobalProvider } from './src/hooks/Global';
import Routes from './src/routes';

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  )
}