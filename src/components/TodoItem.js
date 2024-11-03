import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                {/* <h6><span className='mx-2 text-primary'><i className='fa fa-check' /></span>{title}</h6> */}
                <h6><input class="form-check-input me-3" type="checkbox" value="" id="firstCheckbox"></input>{title}</h6>
                <div className='todo-icon'>
                    <span className='mx-2 text-success'><i className='fa fa-pencil' onClick={handleEdit} /></span>
                    <span className='mx-2 text-danger' onClick={handleDelete}><i className='fa fa-trash' /></span>
                </div>
            </li>
        )
    }
}