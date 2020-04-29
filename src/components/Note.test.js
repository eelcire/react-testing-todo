import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test note' } };

console.log({ ...props });

describe('Note', () => {
  let note = mount(<Note {...props} />);

  it('renders the note text', () => {
    expect(note.find('div').text()).toEqual(props.note.text);
  });
});
