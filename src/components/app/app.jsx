import './app.css'
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppPanel from "../app-panel/app-panel";
import EmployeeList from "../employee-list/employee-list";
import AppAddEmployee from "../app-add-employee/app-add-employee";

function App(){
    const data = [
        {name: "John", salary: 1000, increase:true, id:1},
        {name: "Ivan", salary: 2000, increase:false, id:2},
        {name: "Vitaly", salary: 5000, increase:true, id:3},
        {name: "Artem", salary: 3000, increase:false, id:4}
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <AppSearch/>
                <AppPanel/>
            </div>
            <EmployeeList data={data}/>
            <AppAddEmployee/>
        </div>
    );
}

export default App;