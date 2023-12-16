import { useState } from 'react';
import { setVariables } from '../../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../../store/types';

const Variables = () => {
  const dispatch = useAppDispatch();

  const { variables } = useAppSelector((state) => state.request);
  const [value, setValue] = useState(variables);

  const handleSubmit = () => {
    dispatch(setVariables(value));
  };

  return (
    <div className="variables">
      <div className="variables__content">
        <div className="variables__label">Переменные:</div>
        <input
          className="variables__input"
          name="variables"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="button" onClick={handleSubmit}>
        Применить
      </div>
    </div>
  );
};

export default Variables;
