import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';



test('dashboard renders', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})




test('contains controls and displays in dashboard component', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
    getByText(/unlocked/i);
    getByText(/open/i);
});