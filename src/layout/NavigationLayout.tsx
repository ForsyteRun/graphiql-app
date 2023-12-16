import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function NavigationLayout() {
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

export default NavigationLayout;
