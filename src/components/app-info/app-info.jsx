
import "./app-info.css"
function AppInfo(props){

    const {total, total_increase} =props;
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <p>Общее число сотрудников:{total}</p>
            <p>Премию получат:{total_increase}</p>
        </div>
    )
}

export default AppInfo;