import React, { Component } from 'react';
// import MaterialTable from 'material-table'; 


class BattleTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(json => {
        console.log(json[0]);
         this.setState({
            isLoaded: true,
            items: json,
         });
      });
  }
comp
  render(){
    
    let { isLoaded, items } = this.state;
    
    return (
      <div>
        {/* <div>{isLoaded}</div> */}
        <div>
          {
            items.map(item => (
              <div key={item._id}>
                <h1>{item.title}</h1>
                <h1>{item.content}</h1>
              </div>
            ))
          };
        </div>
        {/* <MaterialTable
          title="Editable Example"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        /> */}
      </div>
    );
  }
}

export default BattleTable;