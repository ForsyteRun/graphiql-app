import { Outlet } from 'react-router-dom';
import { Footer, Header } from './layout';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
