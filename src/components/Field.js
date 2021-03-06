import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {

    static contextType = LanguageContext;

    render() {
        const name = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className='ui field'>
                <label>{name} : </label>
                <input />
            </div>
        )
    }
}
