const CHANGE_STATUS = "CHANGE_STATUS";
const SET_PREVIEW_TASK = "SET_PREVIEW_TASK";
const ADD_TASK = "ADD_TASK";

const initialState = {    
    list: [
        {           
            taskName: "Строим интерфейс по вводу документов",
            coordinator: "Петров П.П.",
            isDone: false,            
        },
        {            
            taskName: "Строим интерфейс по вводу документов 2",
            coordinator: "Иванов И.И.",
            isDone: false,            
        },
        {            
            taskName: "Строим интерфейс по вводу документов 3",
            coordinator: "Сидоров С.С.",
            isDone: false,            
        },
        {            
            taskName: "Строим интерфейс по вводу документов 4",
            coordinator: "Петров П.П.",
            isDone: false,            
        },        
    ], 
    currentSelectTask: null,    
}

export const TodoReducer = (state = initialState, action) => {
    switch (action.type){
        case "CHANGE_STATUS":
            return { ...state,
                list: state.list.map((element, index) => {
                        if (index === action.id) {
                            return {...element,
                                isDone: !element.isDone
                            }
                        } else return element;
                    })                                      
            };
        case "SET_PREVIEW_TASK":
            return { ...state,  
                currentSelectTask: state.currentSelectTask === action.id ? null : action.id,                                   
            };
        case "ADD_TASK":
            const newTask = {
                taskName: action.value,
                coordinator: "Инпутов И.И.",
                isDone: false,               
            } 
            return { ...state,  
                list: [...state.list, newTask]                                   
            };
        default:
            return state;}        
}

export const addTask = (value) => ({type: ADD_TASK, value});
export const changeStatus = (id) => ({type: CHANGE_STATUS, id});
export const setPreviewSelectTask = (id) => ({type: SET_PREVIEW_TASK, id});

