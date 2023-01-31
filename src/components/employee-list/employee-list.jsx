import "./employee_list.css"
import EmployeeCard from "../employee-card/employee-card";

const EmployeeList = ()=>{
    return(
            <ul className="employee-list list-group">
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
            </ul>

    )
}

export default EmployeeList