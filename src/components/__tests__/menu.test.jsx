import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Menu from '../Menu';

describe('Menu component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Menu />);
    expect(getByTestId('menuComponent')).toBeTruthy();
  });

  it('executes the onPress function when button is clicked', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Menu onPress={onPress} />);

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).toBeCalled();
  });

  it('applies correct backgroundColor', () => {
    const backgroundColor = 'blue';
    const { getByTestId } = render(<Menu backgroundColor={backgroundColor} />);

    const menuComponent = getByTestId('menuComponent');
    expect(menuComponent.props.style.backgroundColor).toBe(backgroundColor);
  });
});
