import { Outlet } from 'react-router-dom';
import { Header, Footer } from './layout';
import { Docs } from './components';

function App() {
  return (
    <div className="tygh">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      <Docs />
    </div>
  );
}

export default App;
