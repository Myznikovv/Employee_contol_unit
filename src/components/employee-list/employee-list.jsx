import "./employee_list.css"
import EmployeeCard from "../employee-card/employee-card";

const EmployeeList = ({data})=>{

    let elements = data.map((item)=>{
    const {id, ...itemValues}  = item;
        return(
            <EmployeeCard key={id} {...itemValues}/>
        )
    })
    return(
            <ul className="employee-list list-group">
                {elements}
            </ul>

    )
}

export default EmployeeList