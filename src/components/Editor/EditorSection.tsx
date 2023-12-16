import React, { useEffect, useState } from 'react';
import { sectionData } from '../../constants/editor';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setQuery } from '../../store/slice/requestSlice';

interface EditorSectionProps {
  title: string;
}

const initialQuery = `query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`;

const countLines = (text: string) => {
  return text.split('\n').length;
};

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const dispatch = useAppDispatch();

  const { query } = useAppSelector((state) => state.request);
  const [value, setValue] = useState(query);
  const [numLines, setNumLines] = useState(0);

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = countLines(event.target.value);
    setNumLines(lines);
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setQuery(value));
  };

  useEffect(() => {
    setNumLines(countLines(initialQuery));
  }, []);

  return (
    <>
      <div className="editor__header">
        <div className="editor__title">{title}</div>
      </div>
      <div className="editor__content">
        <div className="editor__numbers">
          {[...Array(numLines).keys()].map((num) => (
            <p key={num + 1}>{num + 1}</p>
          ))}
        </div>
        <div className="editor__text">
          {sectionData.query.label === title && (
            <textarea
              className="editor__query"
              onChange={handleQueryChange}
              value={value}
              rows={numLines}
            />
          )}
        </div>
        <div className="button" onClick={handleSubmit}>
          Применить
        </div>
      </div>
    </>
  );
};

export default EditorSection;
