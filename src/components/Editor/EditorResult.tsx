import React from 'react';
import { useAppSelector } from '../../store/types';
import { useGraphqlRequest } from '../../utils/graphqlRequest';
interface EditorSectionProps {
  title: string;
}

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const { response } = useAppSelector((state) => state.request);
  useGraphqlRequest();
  return (
    <>
      <div className="editor__header">
        <div className="editor__title">{title}</div>
      </div>
      <div className="editor__content">
        <div className="editor__text">
          <pre style={{ textAlign: 'left' }}> {response} </pre>
        </div>
      </div>
    </>
  );
};

export default EditorSection;
