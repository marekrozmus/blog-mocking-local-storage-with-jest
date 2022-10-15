import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyComponent from './MyComponent';

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(window, "localStorage", {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
    removeItem: (...args: string[]) => mockRemoveItem(...args),
  },
});

describe('Testing component', () => {
  beforeEach(() => {
    mockSetItem.mockClear();
    mockSetItem.mockClear();
  })

  it('should call local storage setItem method when button clicked', async () => {
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /set data/i });

    await userEvent.click(button);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('mydata', 'myvalue');
  });

  it('should call local storage getItem method when button clicked', async () => {
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /get data/i });

    await userEvent.click(button);
    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith('mydata');
  });

  it('should call local storage removeItem method when button clicked', async () => {
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /remove data/i });

    await userEvent.click(button);
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
    expect(mockRemoveItem).toHaveBeenCalledWith('mydata');
  });
});