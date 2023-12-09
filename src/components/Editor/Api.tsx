import React, { useState } from 'react';

const Api = () => {
  const [apiTitle, setApiTitle] = useState<string>(
    'https://rickandmortyapi.com/graphql'
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiTitle(event.target.value);
  };

  return (
    <div className="api">
      <div className="api__content">
        <div className="api__label">API:</div>
        <input
          className="api__input"
          placeholder="введите api"
          name="api"
          value={apiTitle}
          onChange={handleChange}
        />
      </div>
      <button className="button">Отправить</button>
    </div>
  );
};

export default Api;
