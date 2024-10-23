// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }


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


