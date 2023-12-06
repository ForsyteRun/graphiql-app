import { Outlet } from 'react-router-dom';
import { Footer, Header } from './layout';

function App() {
  return (
    <>
      <Header />
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
