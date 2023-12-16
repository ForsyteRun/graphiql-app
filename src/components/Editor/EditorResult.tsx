import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { fetchQuery } from '../../store/slice/requestSlice';
interface EditorSectionProps {
  title: string;
}

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const { api, variables, response, headers, query } = useAppSelector(
    (state) => state.request
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchQuery({ api, variables, requestHeaders: headers as Headers, query })
    );
  }, [api, dispatch, headers, query, variables]);

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
