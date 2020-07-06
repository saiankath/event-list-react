import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './components/EventList';
import EventInput from './components/EventInput';
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  state = {
    events: [],
    id: uuidv4(),
    event: '',
    editItem: false
  }
  handleEvent = (e) => {
    this.setState({
      event: e.target.value
    })
  };
  eventSubmit = (e) => {
    e.preventDefault(); 
    const newItem = {
      id: this.state.id,
      title: this.state.event
    };
    const updatedItems = [...this.state.events, newItem]
    this.setState({
      events: updatedItems,
      id: uuidv4(),
      event: "",
      editItem: false
    });
  };
  clearEvents = () => {
    this.setState({
      events: []
    });
  };
  deleteEvent = (id) => {
    console.log(this.state.id)
    console.log(this.state.events)

    const filteredItems = this.state.events.filter(event => 
      event.id !== id);
      console.log(filteredItems)
    this.setState({
      events: filteredItems
    })
  };
  editEvent = (id) => {
    const filteredItems = this.state.events.filter(event => event.id !== id);
    const selectedItem = this.state.events.find(event => event.id === id);
    this.setState({
      events: filteredItems,
      event: selectedItem.title,
      id: id,
      editItem: true
    })
  };
  
  render () {
    // console.log(this.state)
    return (
        <div className="container">
          <div className="row">
              <div className=".col-10 mx-auto col-md-8 mt-5">
                <h3 className="text-capitalize text-center">Event Input</h3>
                <EventInput 
                  event={this.state.event}
                  handleEvent={this.handleEvent}
                  eventSubmit={this.eventSubmit}
                  editItem={this.state.editItem}
                />
                <EventList
                  events={this.state.events}
                  clearEvents={this.clearEvents}
                  deleteEvent={this.deleteEvent}
                  editEvent={this.editEvent}
                />
              </div>
          </div>
      </div>
    );
  }
 
}

export default App;
// import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import EventInput from './components/EventInput';
// import EventList from './components/EventList';

// class App extends Component {
//   state = {
//     events: [],
//     event: '',
//     id: uuidv4(),
//     edit: false
//   }
//   handleEvent = (e) => {
//     this.setState({
//       event: e.target.value
//     })
    
//   }
//   eventSubmit = (e) => {
//     e.preventDefault();
//     const newEvent = {
//       id: this.state.id,
//       title: this.state.event
//     }
//     const updatedEvents = [...this.state.events, newEvent]
//     this.setState({
//         events: updatedEvents,
//         event: '',
//         edit: false,
//         id: uuidv4()

//     })
    
//   }
//   clearEvents = () => {
//     this.setState({
//       events: []
//     })
    
//   }
//   deleteEvent = (id) => {
//     // console.log(this.state.events)
//     const filterEvents = this.state.events.filter( event => event.id !== id)
   

//     this.setState({
//       events: filterEvents
//     })
     
//   }
//   editEvent = (id) => {
//     // console.log(id)
//     const filterEvents = this.state.events.filter(event => 
      
//       event.id !== id);
//       console.log(filterEvents)
      
//     const editItem = this.state.events.find(event => event.id === id)
//     this.setState({
//       events: filterEvents,
//       edit: true,
//       // event: editItem.title,

//       id: id
//     })
    
//   };
//   render () {
//     return (
//       <div className="container">
//         <div className="row">
//            <div className="col-10 mx-auto col-md-8 mt-5">
//              <h3 className="text-capitalize text-center ">Event Input</h3>
//                <EventInput 
//                  eventSubmit={this.eventSubmit}
//                  event={this.state.event}
//                  edit={this.state.edit}
//                  handleEvent={this.handleEvent}
//                />
//                <EventList 
//                  deleteEvent={this.deleteEvent}
//                  events={this.state.events}
//                  editEvent={this.editEvent}
//                  clearEvents={this.clearEvents}
//                />
//            </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
