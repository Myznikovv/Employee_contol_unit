
import "./app-info.css"
function AppInfo(props){

    const {total, total_increase} =props;
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников:{total}</h2>
            <h3>Премию получат:{total_increase}</h3>
        </div>
    )
}

export default AppInfo;