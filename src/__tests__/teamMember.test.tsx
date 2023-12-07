import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Katsiaryna, forsyte, nastia } from '../__mocks__/fileMock';
import { TeamMember } from '../components';

describe('TeamMember component', () => {
  it('should be equal forsyte snapshot', () => {
    const { asFragment } = render(<TeamMember developer={forsyte} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be equal forsyte snapshot', () => {
    const { asFragment } = render(<TeamMember developer={Katsiaryna} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be equal forsyte snapshot', () => {
    const { asFragment } = render(<TeamMember developer={nastia} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
