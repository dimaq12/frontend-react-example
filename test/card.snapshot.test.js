
import renderer from 'react-test-renderer';
import React from 'react';
import Card from '../modules/Root/components/Card'

describe('Todo component renders the todo correctly', () => {
  it('renders correctly', () => {
    const card = { id: 1, title:'title', items:[{id: 1, name: 'name', done: false}] };
    const rendered = renderer.create(
      <Card card={card} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});