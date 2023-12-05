// Main.tsx

import GraphiQL from '../components/GraphiQL';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

const Main = () => {
  return (
    <div className="tygh">
      <Header />
      <GraphiQL />
      <Footer />
    </div>
  );
};

export { Main };
