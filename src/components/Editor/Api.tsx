import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setApi, setQuery } from '../../store/slice/requestSlice';
import { Localization } from '../../context/LocalContext';

const Api = () => {
  const dispatch = useAppDispatch();
  const { translations } = Localization();

  const { api } = useAppSelector((state) => state.request);
  const [value, setValue] = useState(api);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    dispatch(setApi(value));
    dispatch(setQuery(`query { }`));
    setShowMessage(false);
  };

  return (
    <div className="api">
      <div className="api__content">
        <div className="api__label">API:</div>
        <input
          className="api__input"
          placeholder="введите api"
          name="api"
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
        <div className="attention-message">{translations.attentionApi}</div>
      )}
    </div>
  );
};

export default Api;
