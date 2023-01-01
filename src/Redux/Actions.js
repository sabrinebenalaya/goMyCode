export const taskdone =()=>{
    return {type:"TASKDONE"}
}

export const addtask =(task)=>{
    return {type:"ADDTASK", plaload:task}
}

export const deleteTask =(task)=>{
    return {type:"DELETETASK", plaload:task}
}

export const doneAndundone =(id)=>{
    return {type:"DONEANDUNDONE", plaload:id}
}

export const updateTask =(id, text)=>{
    return {type:"UPDATETASK", plaload:{id:id , text:text}}
}
export const alltask =()=>{
    return {type:"ALLTASK"}
}