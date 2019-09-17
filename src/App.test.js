import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react'
import App from './App';

const pressEnterOn = (node) => fireEvent.keyDown(node, { key: 'Enter', code: 13 });
const changeOn = (node, value) => fireEvent.change(node, { target: { value } });
const mockOneRequest = (body) => fetch.mockResponseOnce(JSON.stringify(body));

it('renders without crashing', () => {
    const {container} = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
});

it('attempts to fetch the filmography for an actor', async () => {
    const {getByTestId} = render(<App />);

    let filmographyStub = [{title: "Test"}];
    mockOneRequest(filmographyStub);

    const queryInputField = getByTestId('fetch-filmography');
    changeOn(queryInputField, 'test');
    pressEnterOn(queryInputField);

    await waitForElement(() => getByTestId('filmography-list'));

    const list = getByTestId('filmography-list').querySelectorAll('li');
    expect(list.length).toEqual(filmographyStub.length);
});

