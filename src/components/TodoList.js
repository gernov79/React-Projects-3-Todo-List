import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
                <ul className='list-group list-group-flush my-3'>
                    <h3 className='text-capitalize text-center'>list</h3>
                    {
                        items.map(item => {
                            return(
                                <TodoItem key={item.id} title={item.title} handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)} />
                            )
                        })
                    }
                    <div className='d-grid mt-5'>
                        <button type='button' className='btn btn-danger text-capitalize' onClick={clearList}>clear list</button>
                    </div>
                </ul>
        )
    }
}