import "./app-pannel.css"

const AppPanel = ({filter, onFilter})=>{

    const dataBtn =[
        {label:'Все сотрудники', name:"all" },
        {label:'На повышение', name:"like" },
        {label:'ЗП больше 1000$', name:"moreThan1000" },
    ]

    const buttons = dataBtn.map(({name,label})=>{
        const active = filter===name;
        const clazz = active ? 'btn-light': 'btn-outline-light';
       return(
           <button
               className={`btn ${clazz}`}
               type='button'
               name={name}
               onClick={()=>{onFilter(name)}}
           >{label}</button>
       );
    })
    return(
        <div className="btn-group">

            {buttons}
            {/*<button data-type="all" className="btn btn-light" type='button'>Все сотрудники</button>*/}
            {/*<button data-type="increase" className="btn btn-outline-light" type='button'> На повышение </button>*/}
            {/*<button data-type=">1000" className="btn btn-outline-light" type='button'>ЗП больше 1000$</button>*/}
        </div>
    )
}
export default AppPanel;