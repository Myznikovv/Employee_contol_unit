import './app.css'
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppPanel from "../app-panel/app-panel";
import EmployeeCard from "../employee-card/employee-card";
import EmployeeList from "../employee-list/employee-list";
import AppAddEmployee from "../app-add-employee/app-add-employee";

function App(){
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <AppSearch/>
                <AppPanel/>
            </div>
            <EmployeeList/>
            <AppAddEmployee/>
        </div>
    );
}

export default App;