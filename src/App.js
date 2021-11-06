import React, { Component } from "react";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';


import Dashboard from "./components/dashboard.js";
import Home from "./components/home.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./App.css";
// import {hot} from "react-hot-loader";

const leftContents = (
  <React.Fragment>
    <span className="brand">WreckApp</span>

    <Button label="Page 1" className="p-button-text" />
    <Button label="Page 2" className="p-button-text" />
    <Button label="Page 3" className="p-button-text" />

    {/* <Button label="New" icon="pi pi-plus" className="p-mr-2" />
    <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
    <i className="pi pi-bars p-toolbar-separator p-mr-2" /> */}

  </React.Fragment>
);

const rightContents = (
  <React.Fragment>
    <Button label="Page 7" className="p-button-text" />
    <Button label="Page 8" className="p-button-text" />
    <Button label="Page 9" className="p-button-text" />

    {/* <Button icon="pi pi-search" className="p-mr-2" />
    <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
    <Button icon="pi pi-times" className="p-button-danger" /> */}
  </React.Fragment>
);


class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <Toolbar left={leftContents} right={rightContents} /> */}

        {/* <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          <Routes>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router> */}

        {/* <div className="p-grid">
          <div className="p-col prose">

            <p>
              When the day came, its searching light showed the ravages in poor Lucy’s strength. She was hardly able to turn her head, and the little nourishment which she could take seemed to do her no good. At times she slept, and both Van Helsing and I noticed the difference in her, between sleeping and waking. Whilst asleep she looked stronger, although more haggard, and her breathing was softer; her open mouth showed the pale gums drawn back from the teeth, which thus looked positively longer and sharper than usual; when she woke the softness of her eyes evidently changed the expression, for she looked her own self, although a dying one. In the afternoon she asked for Arthur, and we telegraphed for him. Quincey went off to meet him at the station.
            </p>

            <p>
              When he arrived it was nearly six o’clock, and the sun was setting full and warm, and the red light streamed in through the window and gave more colour to the pale cheeks. When he saw her, Arthur was simply choking with emotion, and none of us could speak. In the hours that had passed, the fits of sleep, or the comatose condition that passed for it, had grown more frequent, so that the pauses when conversation was possible were shortened. Arthur’s presence, however, seemed to act as a stimulant; she rallied a little, and spoke to him more brightly than she had done since we arrived. He too pulled himself together, and spoke as cheerily as he could, so that the best was made of everything.
            </p>

            <p>
              It was now nearly one o’clock, and he and Van Helsing are sitting with her. I am to relieve them in a quarter of an hour, and I am entering this on Lucy’s phonograph. Until six o’clock they are to try to rest. I fear that to-morrow will end our watching, for the shock has been too great; the poor child cannot rally. God help us all.
            </p>

            <Button type="submit" label="Submit" icon="pi pi-check" className="p-ml-2" />
            
          </div>
        </div>

        <div></div> */}

        
      </div>
    );
  }
}

export default App;
// export default hot(module)(App);