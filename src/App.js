import Block from "./components/Block";
import Menu from "./components/Menu";

import React from "react";

import axios from 'axios';

const monthNames = ['January', 'February', 'March',
    'April', 'May','June',
    'July','August','September',
    'October','November','December',];



function App() {
    const [items, setItems] = React.useState([]);
    const [dateState, setDateState] = React.useState([]);
    const [cityState, setCityState] = React.useState([]);
    const [dateIndex, setDateIndex] = React.useState(null);


    React.useEffect(
        () => {
            axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json').then(({data}) =>{
                setItems([...data]);
            });
        }, []
    );

    React.useEffect(() => {
        let array = [];
        for(let arr in items){
            for(let key in items[arr]){
                if(key === 'city') {array.push(items[arr].city)}
            }
        }
        array = [...new Set(array)];
        setCityState(array);
    },[items]);


    React.useEffect(() => {
        let array = [];
        for(let arr in items){
            for(let key in items[arr]){
                if(key === 'date') {array.push(items[arr].date)}
            }
        }
        array.map((item, index) => {array[index] = item.split('.')});
        array.map((item, index) => {array[index] = new Date(item[2], item[1]-1, item[0])});
        array.map((item, index) => {array[index] = monthNames[item.getMonth()]});
        array = [...new Set(array)];
        setDateState(array);
    },[items]);

    return (
      <div className="page">
          <div className="wrapper">

              <p className="header">Event Listing</p>

              <nav className="menu">
                  <Menu type={'City'}
                        options={cityState}
                        indexState={setDateIndex}
                  />
                  <Menu type={'Month'}
                        options={dateState}
                        indexState={setDateIndex}
                  />
              </nav>

              <div className="content">
                  {items.map((arr, index) =>
                      {
                          return  ((+(arr.date.split('.')[1]) === monthNames.indexOf(dateIndex) + 1) ||
                              (arr.city === dateIndex))
                                &&
                              <Block
                              key={`${index}__${arr.name}`}
                              {...arr} />;
                      }
                  )
                  }
              </div>
          </div>
      </div>
  );
}

export default App;
