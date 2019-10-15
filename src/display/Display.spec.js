import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('controls component renders', () => {
    render(<Display />);
})

test('displays if gate is opened/closed and if it is locked/unlocked', () => {
    

    const { getByText } = render(<Display />)
     getByText(/Unlocked/i)
     getByText(/Open/i)
})

test('display closed is true and unlocked is false', () => {

    const { getByText } = render(<Display closed={true} unlocked={false}/>)
  getByText(/Closed/i)
  getByText(/Locked/i)
})
