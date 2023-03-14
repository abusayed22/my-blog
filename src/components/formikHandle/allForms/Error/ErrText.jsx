import React from 'react';

function ErrText(props) {
    return (
        <div className='text-red'>
            {props.children}
        </div>
    );
}

export default ErrText;