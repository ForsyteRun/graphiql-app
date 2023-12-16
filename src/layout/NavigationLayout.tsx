import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function NavigationLayout() {
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

export default NavigationLayout;
