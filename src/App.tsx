import { Outlet } from 'react-router-dom';
import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
