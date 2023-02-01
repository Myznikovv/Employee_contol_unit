import './app.css'


import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppPanel from "../app-panel/app-panel";
import EmployeeList from "../employee-list/employee-list";
import AppAddEmployee from "../app-add-employee/app-add-employee";

import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "John", salary: 1000, increase:true, id:1},
                {name: "Ivan", salary: 2000, increase:false, id:2},
                {name: "Vitaly", salary: 5000, increase:true, id:3},
                {name: "Artem", salary: 3000, increase:false, id:4}
            ],
            currId:5
        }
    }


    deleteItem = (id)=>{
        this.setState(({data})=>{
            return{
                data: data.filter(elem => elem.id !== id )
            }
        })
    }

    createEmployee= (name, salary)=>{
        this.setState(({data, currId})=>{
            const newEmployee = {
                name: name ,
                salary:salary,
                increase: false,
                id:currId
            }
            return{
                currId: currId + 1,
                data: data.concat([newEmployee])
            }
        })

    }

   render() {
       const {data} = this.state;
       return (
           <div className="app">
               <AppInfo/>
               <div className="search-panel">
                   <AppSearch/>
                   <AppPanel/>
               </div>
               <EmployeeList
                   data={data}
                   deleteItem={this.deleteItem}
               />
               <AppAddEmployee
                    createItem={this.createEmployee}
               />
           </div>
       );
   }
}

export default App;
