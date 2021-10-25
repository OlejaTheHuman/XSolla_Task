import Block from "./components/Block";
import Menu from "./components/Menu";

import React from "react";

import axios from 'axios';



function App() {

    const [items, setItems] = React.useState([]);
    React.useEffect(
        () => {
            axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json').then(({data}) =>{
                console.log([...data]);
                setItems([...data]);
                console.log('state', items);
            });
        }, []
    );

  return (
      <div className="page">
          <div className="wrapper">

              <p className="header">Event Listing</p>

              <nav className="menu">
                  <Menu type={'City'} options={['Amsterdam','Perm','Moscow', 'London']}/>
                  <Menu type={'Month'} options={['January', 'February', 'March',
                                                 'April', 'May','June',
                                                 'July','August','September',
                                                 'October','November','December',]}/>
              </nav>

              <div className="content">
                  {items.map((arr, index) => <Block
                      key={`${index}__${arr.name}`}
                      {...arr} />)
                  }
              </div>
          </div>
      </div>
  );
}

export default App;
