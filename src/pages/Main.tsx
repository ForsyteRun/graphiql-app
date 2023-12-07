import { Outlet } from 'react-router-dom';
import { Footer } from '../layout';

const Main = () => {
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
};

export default Main;
