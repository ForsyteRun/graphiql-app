import React, { useState } from 'react';
import { sectionData } from '../../constants/editor';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setQuery } from '../../store/slice/requestSlice';

interface EditorSectionProps {
  title: string;
}

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const countLines = (text: string) => {
    return text.split('\n').length;
  };

  const { query } = useAppSelector((state) => state.request);

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

  const dispatch = useAppDispatch();

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = countLines(event.target.value);
    setNumLines(lines);
    dispatch(setQuery(event.target.value));
  };

  const [numLines, setNumLines] = useState(countLines(initialQuery));

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
              value={query}
              rows={numLines}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditorSection;
