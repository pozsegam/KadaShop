import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTE } from './navigation/routes';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={`${ROUTE.PRODUCTS}`} element={<Home />} />
          <Route path={`${ROUTE.PRODUCT_DETAILS}/:id`} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
