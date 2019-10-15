import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('controls component renders', () => {
    render(<Display />);
})

test('displays if gate is opened/closed and if it is locked/unlocked', () => {
    

    const { getByText } = render(<Display />)
    const unLockedClass = getByText(/Unlocked/i)
    const openClass = getByText(/Open/i)
})

const { getByText } = render(<Display closed={true} unlocked={false}/>)
const closedClass = getByText(/Closed/i)
const lockedClass = getByText(/Locked/i)