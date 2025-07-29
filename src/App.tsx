import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/AppComponent/layout.tsx'
import { ThemeProvider } from './components/theme-provider.tsx';
import Dashboard from './pages/dashboard.tsx';
import City from './pages/city.tsx'
function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path = '/' element = {<Dashboard />} ></Route>
            <Route path = '/city/:cityName' element = {<City />} ></Route>
            <Route path = '/' element = {<Dashboard />} ></Route>

          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
