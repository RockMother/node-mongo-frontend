import React, {Component} from 'react';

import { bindToThis } from '../../utils/utils'

export default class PostSettings extends Component {

    render() {
        return (
            <div className="block">
                <div className="paper">

                    <form className="form">
                        <div className='text'>Post</div>
                        <div className="vertical">
                            <input type="text" placeholder="Width" />
                            <input type="text" placeholder="Background" />
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}