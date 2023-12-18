// EditorSection.tsx

import React, { useEffect, useState } from 'react';
import { fetchQuery } from '../../store/slice/requestSlice';
import { initialQuery, sectionData } from '../../constants/editor';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setQuery } from '../../store/slice/requestSlice';
import { countLines } from '../../utils/countLines';
import { EditorSectionProps } from '../../types/interface';

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { api, variables, response, headers, query } = useAppSelector(
    (state) => state.request
  );
  const [value, setValue] = useState(query);
  const [numLines, setNumLines] = useState<number>(0);

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = countLines(event.target.value, value);
    setNumLines(lines);
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setQuery(value));
  };

  useEffect(() => {
    setNumLines(countLines(initialQuery, ''));
    if (response) {
      const lines = countLines(response, '');
      setNumLines(lines);
    }
  }, [response]);

  useEffect(() => {
    dispatch(
      fetchQuery({ api, variables, requestHeaders: headers as Headers, query })
    );
  }, [api, dispatch, headers, query, variables]);

  return (
    <>
      <div className="editor__header">
        <div className="editor__title">{title}</div>
        {sectionData.query.label === title && (
          <div className="editor__buttons">
            <div className="editor__color button"></div>
            <div className="editor__play button" onClick={handleSubmit}></div>
          </div>
        )}
      </div>
      <div className="editor__content">
        <div className="editor__numbers">
          {[...Array(numLines).keys()].map((num) => (
            <p key={num + 1}>{num + 1}</p>
          ))}
        </div>
        <div className="editor__text">
          {sectionData.query.label === title ? (
            <textarea
              className="editor__query"
              onChange={handleQueryChange}
              value={value}
              rows={numLines}
            />
          ) : (
            <pre className="editor__response">{response}</pre>
          )}
        </div>
      </div>
    </>
  );
};

export default EditorSection;
