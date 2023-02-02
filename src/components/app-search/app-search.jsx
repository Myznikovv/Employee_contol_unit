
import "./app-search.css"
import {Component} from "react";

class AppSearch extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        const {onUpdateSearch,value} =this.props;

        return(
            <input
                onChange={(e)=>{onUpdateSearch(e.target.value)}}
                value={value}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
            />
        )
    }


}

export default AppSearch;