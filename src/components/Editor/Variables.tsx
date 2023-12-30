import { useState } from 'react';
import { setVariables, setInfo } from '../../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { Localization } from '../../context/LocalContext';

const Variables = () => {
  const dispatch = useAppDispatch();
  const { translations, language } = Localization();
  const { variables } = useAppSelector((state) => state.request);
  const [value, setValue] = useState(variables);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    dispatch(setVariables(value));
    dispatch(setInfo(language));
    setShowMessage(false);
  };

  return (
    <div className="variables">
      <div className="variables__content">
        <div className="variables__label">{translations.variables}</div>
        <input
          className="variables__input"
          name="variables"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setShowMessage(true);
          }}
        />
      </div>
      <div className="button" onClick={handleSubmit}>
        {translations.submit}
      </div>
      {showMessage && (
        <div className="attention-message">
          {translations.attentionVariables}
        </div>
      )}
    </div>
  );
};

export default Variables;
