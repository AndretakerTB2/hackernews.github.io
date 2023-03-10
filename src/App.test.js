import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, { Search, Button, Table } from './App';

describe('App', () => {

  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

test('Good snapshot bro', () => {
  const component = renderer.create(
    <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});