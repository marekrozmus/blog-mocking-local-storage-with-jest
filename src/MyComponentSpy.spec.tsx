import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyComponent from './MyComponent';


describe('Testing component', () => {
  it('should call local storage setItem method when button clicked', async () => {
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /set data/i });

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
    mockSetItem.mockImplementation(() => {})

    await userEvent.click(button);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('mydata', 'myvalue');
  });
});