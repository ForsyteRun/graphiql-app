const Api = () => {
  return (
    <div className="api">
      <div className="api__content">
        <div className="api__label">API:</div>
        <input
          className="api__input"
          placeholder="введите api"
          name="api"
          value="https://rickandmortyapi.com/apiql"
        />
      </div>
      <div className="button">Отправить</div>
    </div>
  );
};

export default Api;
