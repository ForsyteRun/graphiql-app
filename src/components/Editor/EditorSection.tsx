import React, { useEffect, useMemo, useRef, useState } from 'react';
import { fetchQuery } from '../../store/slice/requestSlice';
import {
  initialQuery,
  sectionDataRu,
  sectionDataEn,
} from '../../constants/editor';
import { Localization } from '../../context/LocalContext';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setQuery, setInfo } from '../../store/slice/requestSlice';
import { countLines } from '../../utils/countLines';
import { EditorSectionProps } from '../../types/interface';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { language } = Localization();
  const { api, variables, response, headers, query } = useAppSelector(
    (state) => state.request
  );
  const [value, setValue] = useState(query);
  const [numLines, setNumLines] = useState<number>(0);
  const editorRef = useRef<HTMLDivElement | null>(null);

  // const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const lines = countLines(event.target.value, value);
  //   setNumLines(lines);
  //   setValue(event.target.value);
  // };

  const handleSubmit = () => {
    dispatch(setQuery(value));
    dispatch(setInfo(language));
  };

  const sectionData = useMemo(() => {
    if (language === 'ru') {
      return sectionDataRu;
    }
    return sectionDataEn;
  }, [language]);

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

  useEffect(() => {
    setValue(query);
  }, [query]);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: value,
        extensions: [EditorView.lineWrapping, javascript(), oneDark],
      });

      const editor = new EditorView({
        state: startState,
        parent: editorRef.current,
      });

      return () => {
        editor.destroy();
      };
    }
  }, [value]);

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
            <div className="editor__query" ref={editorRef}></div>
          ) : (
            <pre className="editor__response">{response}</pre>
          )}
        </div>
      </div>
    </>
  );
};

export default EditorSection;
