import React from 'react';
import CatatanList from './CatatanList';
import { getInitialData, showFormattedDate } from '../utils';
import CatatanInput from './CatatanInput';
class CatatanApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note: getInitialData(),
            searchKeyword: '',

        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.OnAddCatatanHandler = this.OnAddCatatanHandler.bind(this);
    }

    onDeleteHandler(id){
        const note = this.state.note.filter(notes => notes.id !== id);
        this.setState({note});
    }
    OnAddCatatanHandler({title, body,createdAt}){
        if (title.length > 50) {
            alert('Judul catatan tidak boleh lebih dari 50 karakter!');
            return;
          }
        this.setState((prevState) => {
            return{
                note: [
                    ...prevState.note,
                    {
                        id: Date.now(),
                        title,
                        body,
                        createdAt: createdAt || new Date().toISOString(),
                    }
                ]
            }
        });
    }
    onSearchChangeHandler(event) {
        this.setState({ searchKeyword: event.target.value });
      }
    render() {
        const { note, searchKeyword } = this.state;
        let filteredNote = note;
      
        if (searchKeyword.trim() !== '') {
          filteredNote = note.filter((notes) =>
            notes.title.toLowerCase().includes(searchKeyword.toLowerCase())
          );
        }
      
        return (    
          <div className='note-item__content'>
            <h1>Tambah Catatan</h1>
            <CatatanInput AddCatatan={this.OnAddCatatanHandler} />
            <h1>Catatan Aktif</h1>
            <input
              type='text'
              placeholder='Cari catatan'
              value={searchKeyword}
              onChange={this.onSearchChangeHandler}
            />
            {filteredNote.length === 0 ? (
              <p>Tidak ada catatan</p>
            ) : (
              <CatatanList note={filteredNote} onDelete={this.onDeleteHandler} />
            )}
          </div>
        );
      }

}

export default CatatanApp;