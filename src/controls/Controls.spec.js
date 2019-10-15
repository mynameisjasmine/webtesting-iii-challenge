import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('controls component renders', () => {
    render(<Controls />);
})

test('display button toggle state', () => {
    const  gateClosed = jest.fn()
    const  gateLocked = jest.fn()

    const { getByText } = render(<Controls toggleLocked={gateLocked} toggleClosed={gateClosed}/>);
      getByText(/Lock Gate/i)
      getByText(/Close Gate/i)
})

test('if close and locked gate will not open', () => {
  
    const  gateClosed = jest.fn()
    const  gateLocked = jest.fn()

    const { getByText } = render(<Controls toggleLocked={gateLocked} toggleClosed={gateClosed} locked={true} closed={true}/>);
     
    fireEvent.click(getByText(/Lock Gate/i))
    expect(gateLocked).toHaveBeenCalled()
    fireEvent.click(getByText(/Open Gate/i))
    expect(gateClosed).not.toHaveBeenCalled()
})
