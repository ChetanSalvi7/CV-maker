import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Component/Home'));

function App() {
  return (

    <>
      <Suspense fallback={<div class="loading"></div>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
