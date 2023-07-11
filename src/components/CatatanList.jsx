import React from 'react';
import CatatanItem from './CatatanItem';
import { showFormattedDate } from '../utils';

function CatatanList({ note, onDelete }) {
  return (
    <div className='notes-list'>
      {note.map((notes) => (
        <CatatanItem
          key={notes.id}
          id={notes.id}
          title={notes.title}
          body={notes.body}
          createdAt={showFormattedDate(notes.createdAt)} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CatatanList;