import React from 'react';
import CatatanItemBody from './CatatanItemBody';
import DeleteButton from './DeleteButton';

function CatatanItem ({title, body, createdAt, id, onDelete}){
    return(
        <div className='note-item'>
            <CatatanItemBody title={title} body={body} createdAt={createdAt}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}
export default CatatanItem;