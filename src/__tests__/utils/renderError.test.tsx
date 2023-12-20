import '@testing-library/jest-dom';
import { onRenderError } from '../../utils/renderError';

describe('onRenderError fn', () => {
  const TYPE_ERROR = 'TypeError';
  it('should return incorrect API string', () => {
    const error = onRenderError(TYPE_ERROR);

    expect(error).toEqual('Incorrect API. Please try again!');
  });

  it('should return incorrect requset string', () => {
    const error = onRenderError('any error');

    expect(error).toEqual('Incorrect requset. Please try again!');
  });
});
