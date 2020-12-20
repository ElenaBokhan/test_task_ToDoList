import { connect } from "react-redux";
import { changeStatus, setPreviewSelectTask } from "../store/TodoReducer";
import cn from "classnames";

const List = ({ list, changeStatus, setPreviewSelectTask, selectTask }) => {
 
    const setPreviewTask = (e,i) => {
        e.stopPropagation();
        setPreviewSelectTask(i);
    }
    return <div className = "wrapper-tasks">
                <div className = "list-tasks">
                    {list.map((el, i) => {
                        return <div className = { i === selectTask ? cn("selectTask", "task") : "task"}
                                    style = {{textDecoration: el.isDone && "line-through"}}                                    
                                    key = { i } 
                                    onClick = { () => changeStatus(i) }>
                                    <span>#{ i+1 }. { el.taskName }</span>
                                    <span>{ el.coordinator }</span>
                                    <div></div>
                                    <div></div>
                                    <div onClick = { (e) => setPreviewTask(e, i) }>
                                        <svg width = "15px" height = "15px" viewBox="0 0 480.026 480.026" xmlSpace="preserve"><path d="M475.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472 c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312l-134.368,149.28c-4.224,4.704-5.312,11.456-2.72,17.216 c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160 C481.394,244.653,481.394,235.373,475.922,229.325z"/><path d="M267.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472 c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312L4.114,389.293c-4.224,4.704-5.312,11.456-2.72,17.216	c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160	C273.394,244.653,273.394,235.373,267.922,229.325z"/></svg>
                                    </div>                               
                                </div>
                    })}               
                </div>
                    { selectTask !== null ? <div className = "description">                                           
                                                <p>{list[selectTask].taskName}</p>
                                                <p>{list[selectTask].coordinator}</p>
                                                <p>{list[selectTask].isDone ? "Выполнено" : "Не выполнено"}</p>
                                            </div>
                                          : null }
            </div>
}

const mapStateToProps = state => ({
    list: state.TodoReducer.list,
    selectTask: state.TodoReducer.currentSelectTask,
})

export const ListContainer = connect(mapStateToProps, { changeStatus, setPreviewSelectTask })(List)