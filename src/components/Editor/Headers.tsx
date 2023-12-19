import { useState } from 'react';
import { setHeaders } from '../../store/slice/requestSlice';
import { useAppDispatch } from '../../store/types';
import { useLocalization } from '../../context/LocalContext';

const Headers = () => {
  const dispatch = useAppDispatch();
  const { translations } = useLocalization();

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    dispatch(setHeaders(value));
  };

  return (
    <div className="headers">
      <div className="headers__content">
        <div className="headers__label">{translations.headers}</div>
        <input
          className="headers__input"
          name="headers"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="button" onClick={handleSubmit}>
        {translations.submit}
      </div>
    </div>
  );
};

export default Headers;
