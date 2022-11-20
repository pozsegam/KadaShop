import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading/Loading';
import { ROUTE } from './navigation/routes';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Loading />}>
        <HashRouter>
          <Routes>
            <Route path={`${ROUTE.PRODUCTS}`} element={<Home />} />
            <Route
              path={`${ROUTE.PRODUCT_DETAILS}/:id`}
              element={<Details />}
            />
          </Routes>
        </HashRouter>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
