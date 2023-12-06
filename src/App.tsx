import { Outlet } from 'react-router-dom';
import { Footer } from './layout';

function App() {
  return (
    <>
      <main>
        <div className="tygh">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
