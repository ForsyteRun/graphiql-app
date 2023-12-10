import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setApi } from '../../store/slice/requestSlice';

const Api = () => {
  const { api } = useAppSelector((state) => state.request);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(api);

  const handleSubmit = () => {
    dispatch(setApi(value));
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
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="button" onClick={handleSubmit}>
        Отправить
      </div>
    </div>
  );
};

export default Api;
