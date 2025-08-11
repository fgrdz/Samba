import 'react';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';
import { ProfilePage } from './pages/profilePage';
import { Dashboard } from './pages/dashboard';


function App() {
  return (
    <ThemeProvider>
      <Header/>
      <div className='w-full h-screen flex'>
        <Dashboard/>
      </div>
    </ThemeProvider>
  )
}

export default App
