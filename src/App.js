// import useGlobalContext from './hooks/useGlobalContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, HomePage, SingleMoviePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/:movieId" element={<SingleMoviePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
