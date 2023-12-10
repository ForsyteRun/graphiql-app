import React from 'react';
import { useAppSelector } from '../../store/types';
import { useGraphqlRequest } from '../../utils/graphqlRequest';

interface EditorSectionProps {
  title: string;
}

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const { query, response } = useAppSelector((state) => state.request);
  useGraphqlRequest(query);
  const result = JSON.stringify(JSON.parse(response), null, 2);
  return (
    <>
      <div className="editor__header">
        <div className="editor__title">{title}</div>
      </div>
      <div className="editor__content">
        <div className="editor__text">
          <pre>{result}</pre>
        </div>
      </div>
    </>
  );
};

export default EditorSection;
