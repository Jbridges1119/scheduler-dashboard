import React, { Component } from "react";
import Loading from "components/Loading";
import classnames from "classnames";
import Panel from 'Component/Panel'


const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];



class Dashboard extends Component {
  state = { loading: false };
  render() {
    const dashboardClasses = classnames("dashboard");
   const display = function() {
    data.map((info) => {
      return(
    <Panel key={info.id} id={info.id} label={info.label} value={info.value} />
      )
  })  
   }
  

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses}>
      {display}
      </main>
  }
}

export default Dashboard;
