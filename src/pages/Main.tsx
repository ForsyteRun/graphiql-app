import { Docs } from '../components';
import Api from '../components/Editor/Api';
import Editor from '../components/Editor/Editor';
import Headers from '../components/Editor/Headers';
import Variables from '../components/Editor/Variables';

const Main = () => {
  return (
    <div className="container main">
      <h1 className="main__title">GraphiQL Editor</h1>
      <Api />
      <Headers />
      <Variables />
      <Editor />
      <Docs />
    </div>
  );
};

export default Main;
