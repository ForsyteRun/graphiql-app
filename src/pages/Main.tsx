import Api from '../components/Editor/Api';
import Editor from '../components/Editor/Editor';
import Headers from '../components/Editor/Headers';
import Variables from '../components/Editor/Variables';

const Main = () => {
  return (
    <div className="main">
      <h1>GraphiQL Editor</h1>
      <Api />
      <Headers />
      <Variables />
      <Editor />
    </div>
  );
};

export default Main;
