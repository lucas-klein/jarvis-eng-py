import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Menu from '../Menu';

describe('Menu', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Menu />);
    expect(getByTestId('menu-component')).toBeDefined();
  });

  it('executes onPress event when pressed', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Menu onPress={mockPress} />);
    const button = getByTestId('menu-button');

    fireEvent.press(button);
    expect(mockPress).toHaveBeenCalled();
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Menu backgroundColor='red' />);
    expect(getByTestId('menu-component').props.style.backgroundColor).toEqual('red');
  });
});
