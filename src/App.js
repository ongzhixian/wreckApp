import React, { Component } from "react";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
import "./App.css";
// import {hot} from "react-hot-loader";

const leftContents = (
  <React.Fragment>
    <span className="brand">WreckApp</span>
    <Button label="New" icon="pi pi-plus" className="p-mr-2" />
    <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
    <i className="pi pi-bars p-toolbar-separator p-mr-2" />
    
  </React.Fragment>
);

const rightContents = (
  <React.Fragment>
    <Button icon="pi pi-search" className="p-mr-2" />
    <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
    <Button icon="pi pi-times" className="p-button-danger" />
  </React.Fragment>
);


class App extends Component {

  render() {

    return (
      <div className="App">
        <Toolbar left={leftContents} right={rightContents} />
        
        

        <Button type="submit" label="Submit" icon="pi pi-check" className="p-ml-2" />
      </div>
    );
  }
}

export default App;
// export default hot(module)(App);