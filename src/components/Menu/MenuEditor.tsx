import React, { useState, useEffect } from 'react';

function MenuEditor() {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    return (
        <div className="container">
            <p>Menu editor</p>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default MenuEditor
