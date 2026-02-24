import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button onPress={() => {}} title="Press me" />
    );
    expect(getByText('Press me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={mockOnPress} title="Press me" testID="button" />
    );

    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders with correct variant', () => {
    const { getByText } = render(
      <Button onPress={() => {}} title="Delete" variant="danger" />
    );
    expect(getByText('Delete')).toBeTruthy();
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button
        onPress={mockOnPress}
        title="Press me"
        disabled={true}
        testID="button"
      />
    );

    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
