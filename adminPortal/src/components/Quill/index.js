import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill from 'react-quill';

const Quill = () => {
    const [value, setvalue] = useState('')


    function handleChange(value) {
        setvalue(value)
    }

    return (
        <ReactQuill value={value || ''}
            onChange={() => handleChange()} />
    )
}

export default Quill
