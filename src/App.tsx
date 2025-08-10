import 'react';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';
import { ProfilePage } from './pages/profilePage';


function App() {
  return (
    <ThemeProvider>
      <Header/>
      <div className='w-full h-screen flex'>
        <ProfilePage/>
      </div>
    </ThemeProvider>
  )
}

export default App
