import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list: [],
      item: ""
    }
  }
  handleChange=(event)=>{
    this.setState((preState)=>({
      ...preState,
      item : event.target.value
    }))
  }
  handleAddItem = () => {
    const { item, list } = this.state; 
    //tương đương item=this.state.item
    // là cú pháp destructuring assignment
    if(item){
      this.setState((pre)=>({
        ...pre,
        list: [...list,item],
        item: ''
      }))
      document.getElementById('an').value='';
    }
  }
    
  render(){
    return(
      <div style={{margin: 'auto',textAlign:'center'}}>
          <h1>Todo List</h1>
          <input id='an' type="text" onChange={(event)=>{
            this.handleChange(event);
          }}/>
          <button onClick={this.handleAddItem}>Add</button>
          <br/> <br/> <br/> <br/> <br/> <br/> 
          <table style={{width:'500px',margin:'auto'}}  className={'table table-light'}>
                    <thead>
                    <tr >
                        <th colSpan="2" >công việc cần làm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((e, i) => (
                        <tr>
                            <td>{i+1}:</td>
                            <td>{e}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
      </div>
      
    )
    
  }
}
export default App;
