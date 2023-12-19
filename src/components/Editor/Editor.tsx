import { useMemo } from 'react';
import { sectionDataRu, sectionDataEn } from '../../constants/editor';
import EditorSection from './EditorSection';
import { useLocalization } from '../../context/LocalContext';

const Editor = () => {
  const { language } = useLocalization();
  const sectionData = useMemo(() => {
    if (language === 'ru') {
      return sectionDataRu;
    }
    return sectionDataEn;
  }, [language]);
  return (
    <div className="editor">
      <div className="editor__wrapper">
        <div className="editor__left">
          <div className="editor__query ">
            <EditorSection title={sectionData.query.label} />
          </div>
        </div>
        <div className="editor__right">
          <div className="editor__response">
            <EditorSection title={sectionData.response.label} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
