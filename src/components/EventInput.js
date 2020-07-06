import React, { Component } from 'react'

class EventInput extends Component {
    render() {
        const { event, handleEvent, edit, eventSubmit } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={eventSubmit}>
                   <div className="input-group">
                     <div className="input-group-prepend">
                        <div className="input-group-text bg-primary" >
                         <i className="fas fa-book" />
                        </div>
                     </div>
                     <input type="text" placeholder="Add event" className="form-control text-capitalize" value={event} onChange={handleEvent}/>
                   </div>
                   <button type="submit"  disabled={event ? false : true} className={edit ? "btn btn-success btn-block mt-3" : "btn btn-block btn-primary text-uppercase mt-3"}>
                       {edit ? 'Edit Item' : 'Add Item'}
                   </button>
                </form>
            </div>
        )
    }
}

export default EventInput
