import React, { Component } from "react";
import Loading from "components/Loading";
import classnames from "classnames";
import Panel from "components/Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.selectPanel = this.selectPanel.bind(this);
  }


  state = { loading: false, focused: null };

  selectPanel(id) {
    this.setState({
     focused: id
    });
   }
  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

   
    const panels = (
      this.state.focused
        ? data.filter((panel) => this.state.focused === panel.id)
        : data
    ).map((panel) => {
      return (
        <Panel
          key={panel.id}
          id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={this.selectPanel}
          onClick={() => this.selectPanel()}
        />
      );
    });

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
