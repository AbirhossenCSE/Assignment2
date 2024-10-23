export default function Todo({task, isDone}){
    return (
        <li>Task: {task}</li>
    )
}


// Connditional Rendaring
export default function Todo({task, isDone}){
    // return (
    //     <li>Task: {task}</li>
    // )
    if (isDone === true) {
        return <li>Finished: {task}</li>
    } else {
        return <li>Work One: {task}</li>
    }
}

// Connditional Rendaring 2
export default function Todo({task, isDone}){

    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Work One: {task}</li>  
}

// Connditional Rendaring 3: Ternary Operator
export default function Todo({task, isDone}){
    return (
        <li>{isDone ? 'Finished' : 'work on' } {task}</li>
    )
}


// Connditional Rendaring 4: &&
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone && ': Done'}</li>
    )
}


// Connditional Rendaring 5: ||
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone || ': Do it'}</li>
    )
}
