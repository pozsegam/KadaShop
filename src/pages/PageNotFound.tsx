import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { ROUTE } from '../navigation/routes';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
        <meta name="description" content="Something went wrong" />
      </Helmet>

      <div className="container mt-20  flex flex-col items-center text-center">
        <h1 className="text-main-purple text-5xl font-black w-1/2 mb-4">
          Oooops! You weren't supposed to see this.
        </h1>
        <p className="text-dark-text text-3xl font-thin mb-8">
          The page you're looking for, doesn't exist.
        </p>
        <button
          onClick={() => navigate(`${ROUTE.PRODUCTS}`)}
          className="bg-black text-2xl text-white text-semibold py-2 px-7 rounded-full">
          Return to Home
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
