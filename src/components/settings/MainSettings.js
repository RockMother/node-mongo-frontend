import React, {Component} from 'react';

import { bindToThis } from '../../utils/utils'

export default class MainSettings extends Component {

    render() {
        return (
            <div className="block">
                <div className="paper">

                    <form className="form">
                        <div className='text'>Main</div>
                        <div className="vertical">
                            <input type="text" placeholder="Title" />
                            <input type="text" placeholder="Background" />
                            <input type="text" placeholder="Menu" />
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}