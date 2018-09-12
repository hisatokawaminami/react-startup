import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);

  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElaspedWaitTime(),
    6000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  componentWillMount() {
      console.log('componentWillMount');
    }

    componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate');
      return true;
    }

    componentWillUpdate() {
      console.log('componentWillUpdate');
    }

    componentDidUpdate() {
      console.log('componentDidUpdateeeeeeeee');
    }

  updateTicketElaspedWaitTime(){
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }



  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList } />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
