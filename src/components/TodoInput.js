import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <span className='input-group-text bg-primary text-white'><i className='fa fa-book'></i></span>
                        <input type='text' className='form-control text-capitalize' placeholder='add an item to your list' value={item} onChange={handleChange} />
                    </div>
                    <div className='d-grid mt-3'>
                        <button type='submit' className={editItem ? 'btn btn-success text-capitalize' : 'btn btn-primary text-capitalize'}>{editItem ? 'edit item' : 'add item'}</button>
                    </div>
                </form>
            </div>
        )
    }
}