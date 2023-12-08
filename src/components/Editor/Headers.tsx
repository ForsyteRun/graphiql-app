const Headers = () => {
  return (
    <div className="headers">
      <div className="headers__content">
        <div className="headers__label">Заголовок запроса:</div>
        <input className="headers__input" name="headers" value="" />
      </div>
      <div className="button">Применить</div>
    </div>
  );
};

export default Headers;
