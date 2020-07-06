import React, { Component } from 'react'
import EventItem from './EventItem'

class EventList extends Component {
   render () {
    const { events, editEvent, deleteEvent, clearEvents} = this.props;
    
    return (
        <ul className="list-group my-5">
          <h3 className="text capitalize text-center">
             Todo list
          </h3>
          {events.map(event => {
              return (
                  <EventItem 
                    key={event.id}
                   editEvent={() => editEvent(event.id)}
                    deleteEvent={() => deleteEvent(event.id)}
                    title={event.title}
                   />
              )
          })}
          <button className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearEvents} >Clear events</button>
        </ul>
    )
   }
}

export default EventList

