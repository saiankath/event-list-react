import React, { Component } from 'react'

class EventItem extends Component  {
      render () {
        const { title, deleteEvent, editEvent } = this.props;
    
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
              <h6>{title}</h6>
              <div className="todo-icon">
              <span className="mx-2 text-success" onClick={editEvent}>
                  <i className="fas fa-pen" />
              </span>
              <span className="mx-2 text-danger" onClick={deleteEvent}>
                  <i className="fas fa-trash" />
              </span>
              </div>
            </li>
        );
      }
}

export default EventItem
