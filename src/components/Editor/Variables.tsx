import { useState } from 'react';
import { setVariables } from '../../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { useLocalization } from '../../context/LocalContext';

const Variables = () => {
  const dispatch = useAppDispatch();
  const { translations } = useLocalization();
  const { variables } = useAppSelector((state) => state.request);
  const [value, setValue] = useState(variables);

  const handleSubmit = () => {
    dispatch(setVariables(value));
  };

  return (
    <div className="variables">
      <div className="variables__content">
        <div className="variables__label">{translations.variables}</div>
        <input
          className="variables__input"
          name="variables"
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

export default Variables;
