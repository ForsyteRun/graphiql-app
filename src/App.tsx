import { Outlet } from 'react-router-dom';
import { Header, Footer } from './layout';

function App() {
  return (
    <div className="tygh">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
