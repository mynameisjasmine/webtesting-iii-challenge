import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

test('controls component renders', () => {
    render(<Controls />);
})

test('display button toggle state', () => {
    const  gateClosed = jest.fn()
    const  gateLocked = jest.fn()

    const { getByText } = render(<Controls toggleLocked={gateLocked} toggleClosed={gateClosed}/>);
    const toggleClose = getByText(/toggleClosed/)
})

