import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(({links, history }) => {
    return <div className="form-links">
        {
            links.map((link, index) => {
                const result = [];
                result.push(<input type="button" onClick={() => history.push(link.path)} key={index} value={link.value} />);
                if (index < links.length - 1)
                    result.push(<div className="separator" key={index + 1000}>/</div>)
                 return result;
            })
        }
    </div>
})