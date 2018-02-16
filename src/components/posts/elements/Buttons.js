import React from 'react';
import './Buttons.css';

export default ({onSaveClicked, onCancelClicked, onDeleteClicked, onTemplateClicked}) => {
    const buttons = [];
    if (onTemplateClicked)
        buttons.push(<div className="button" key="1" onClick={onTemplateClicked}>Templates</div>);
    if (onSaveClicked)
        buttons.push(<div className="button green" key="2" onClick={onSaveClicked}>Save</div>);
    if (onDeleteClicked)
        buttons.push(<div className="button red" key="3" onClick={onDeleteClicked}>Delete</div>);
    if (onCancelClicked)
        buttons.push(<div className="button" key="4" onClick={onCancelClicked}>Cancel</div>);            

    return (
        <div className="buttons">
            {buttons}
        </div>
    );    
}


