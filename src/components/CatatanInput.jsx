import React from 'react';
import { showFormattedDate } from '../utils';

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      remainingChar: 50,
    };

    this.OnTitleChangeEventHandler = this.OnTitleChangeEventHandler.bind(this);
    this.OnBodyChangeEventHandler = this.OnBodyChangeEventHandler.bind(this);
    this.OnSubmitEventHandler = this.OnSubmitEventHandler.bind(this);
  }

  OnTitleChangeEventHandler(event) {
    const { value } = event.target;
    const remainingChar = 50 - value.length;

    this.setState({
      title: value,
      remainingChar,
    });
  }

  OnBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  OnSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    const createdAt = new Date().toISOString(); // Menggunakan format tanggal ISO 8601

    this.props.AddCatatan({ title, body, createdAt }); // Mengirim createdAt yang baru ke handler AddCatatan

    // Reset form setelah submit
    this.setState({
      title: '',
      body: '',
      remainingChar: 50,
    });
  }

  render() {
    const { title, body, remainingChar } = this.state;

    return (
      <div>
        <form className="note-input" action="" onSubmit={this.OnSubmitEventHandler}>
          <input
            type="text"
            placeholder="Masukkan Title"
            name=""
            id=""
            value={title}
            onChange={this.OnTitleChangeEventHandler}
          />
          <p>Jumlah karakter tersisa: {remainingChar}</p>
          <input
            type="text"
            placeholder="Masukkan Content"
            name=""
            id=""
            value={body}
            onChange={this.OnBodyChangeEventHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default CatatanInput;