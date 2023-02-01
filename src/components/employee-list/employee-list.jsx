import "./employee_list.css"
import EmployeeCard from "../employee-card/employee-card";

const EmployeeList = ({data, deleteItem, onLike, onIncrease})=>{

    let elements = data.map((item)=>{
    const {id, ...itemValues}  = item;
        return(
            <EmployeeCard
                key={id}
                {...itemValues}
                deleteItem={()=>{deleteItem(id)}}
                onIncrease = {()=> onIncrease(id)}
                onLike = {()=> onLike(id)}
            />
        )
    })
    return(
            <ul className="employee-list list-group">
                {elements}
            </ul>

    )
}

export default EmployeeList