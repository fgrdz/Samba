import 'react';
import { Header } from './components/header';
import { CardComponent } from './components/cardComponent';
import { ThemeProvider } from './components/theme-provider';


function App() {
  return (
    <ThemeProvider>
      <Header/>
      <div className='w-full h-screen flex justify-center'>
        <CardComponent/>
      </div>
    </ThemeProvider>
  )
}

export default App
