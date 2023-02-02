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
                {name: "John", salary: 1000, increase:true, like:true ,id:1},
                {name: "Ivan", salary: 2000, increase:false, like:false, id:2},
                {name: "Vitaly", salary: 5000, increase:true, like:false, id:3},
                {name: "Artem", salary: 3000, increase:false, like:false, id:4}
            ],
            term:'',
            filter:'like',
            currId:5,
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


    onLike= (id)=>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id){
                    return{ ...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    onIncrease= (id)=>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id){
                    return{ ...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    searchEmp = (term, items)=>{
        if (term.length == 0){
            return items
        }
        return items.filter(item=>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch= (term)=>{
        this.setState({term} );
    }

    filterEmployees = (items, filter)=>{
        switch (filter){
            case 'all':
                return items;
            case 'like':
                return items.filter(item=>{
                    return item.like
                })
            case "moreThan1000":
                return items.filter(item=>{
                    return item.salary>1000;
                })
        }

    }

    onFilter=(name)=>{
        this.setState({
            filter: name
        })
    }



   render() {
        const {data, term, filter} = this.state;
        const total = data.length;
        const total_increase = data.filter(item =>item.increase).length;
        const visibleData = this.filterEmployees(this.searchEmp(term, data), filter );

       return (
           <div className="app">
               <AppInfo
                   total={ total}
                   total_increase={total_increase}
               />
               <div className="search-panel">
                   <AppSearch
                       onUpdateSearch={this.onUpdateSearch}
                       value={term}
                   />
                   <AppPanel
                        filter={filter}
                        onFilter={this.onFilter}
                   />
               </div>
               <EmployeeList
                   data={visibleData}
                   deleteItem={this.deleteItem}
                   onIncrease={this.onIncrease}
                   onLike = {this.onLike}
               />
               <AppAddEmployee
                    createItem={this.createEmployee}
               />
           </div>
       );
   }
}

export default App;
