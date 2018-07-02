import React from 'react'

export default ({fields, primaryButtonValue, onSubmitClicked, isVertical}) => {
    const formClassName = 'form' + (isVertical? ' vertical': '');
    return (
        <form className={ formClassName }>
            {
                fields.map((field, index) => 
                     <input type={field.type} key={index} placeholder={field.placeholder} /> 
                )
            }
            <input className="primary-button" type="submit" value={primaryButtonValue} onClick={onSubmitClicked} />
        </form>
    );
}