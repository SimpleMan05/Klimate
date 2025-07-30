import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/AppComponent/layout.tsx'
import { ThemeProvider } from './components/theme-provider.tsx';
import Dashboard from './pages/dashboard.tsx';
import City from './pages/city.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'  //devtools

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



function App() {

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
