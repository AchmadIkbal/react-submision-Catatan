import React from 'react';
import CatatanList from './CatatanList';
import { getInitialData, showFormattedDate } from '../utils';
import CatatanInput from './CatatanInput';

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getInitialData(),
      searchKeyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.OnAddCatatanHandler = this.OnAddCatatanHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const note = this.state.note.filter((notes) => notes.id !== id);
    this.setState({ note });
  }

  OnAddCatatanHandler({ title, body, createAt }) {
    this.setState((prevState) => {
      return {
        note: [
          ...prevState.note,
          {
            id: Date.now(),
            title,
            body,
            createAt: createAt || new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
  }

  render() {
    const { note, searchKeyword } = this.state;

    let filteredNotes;
    if (searchKeyword) {
      filteredNotes = note.filter((notes) =>
        notes.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    } else {
      filteredNotes = note;
    }

    return (
      <div className='note-item__content'>
        <h1>Tambah Catatan</h1>
        <CatatanInput AddCatatan={this.OnAddCatatanHandler} />
        <h1>Catatan Aktif</h1>
        <input
          type='text'
          placeholder='Cari catatan...'
          value={searchKeyword}
          onChange={this.onSearchHandler}
        />
        <CatatanList note={filteredNotes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default CatatanApp;