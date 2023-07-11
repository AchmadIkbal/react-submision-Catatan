import React from "react";

function CatatanItemBody ({title, body, createdAt}){
    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <h5 className="note-item__date">{createdAt}</h5>
            <h6 className="note-item__body">{body}</h6>
        </div>
    )
}

export default CatatanItemBody;