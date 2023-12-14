import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const GraphQL = () => {
  const { isVisible, titleRef } = useIntersectionObserver();

  return (
    <div
      className={`welcome__title ${isVisible ? 'visible' : ''}`}
      ref={titleRef}
    >
      <div className="container">
        <h1 className={`title-animation ${isVisible ? 'visible' : ''}`}>
          <span>GraphQL</span> — это возможность использовать всю мощь
          <span> GraphQL</span>.
        </h1>
        <span className="welcome__description">
          сделай запрос в свою собственную вселенную
        </span>
        <p>
          Задача состоит в том, чтобы реализовать playground/IDE для работы с
          запросами GraphQL. GraphQL - это язык запросов, используемый
          клиентскими приложениями для обработки данных. GraphQL ассоциируется с
          таким понятием, как schema, которое позволяет организовать создание,
          чтение, обновление и удаление данных в приложении. GraphiQL - это
          инструмент с открытым исходным кодом. Помимо самого ide для работы с
          запросами GraphQL, реализованы возможности авторизации, чтобы
          предоставить доступ к инструменту только авторизованным пользователям.
        </p>
      </div>
    </div>
  );
};

export { GraphQL };
