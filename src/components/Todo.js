import {React, useState} from 'react'

export default function Todo(){
    const [list, setList] = useState([])
    const [textField, setTextField] = useState("")
    
    let handleSubmit = event=>{
        event.preventDefault()
        if (textField !== "" && list.indexOf(textField) === -1){
            let temporalList = list
        temporalList.push(textField)
        setList(temporalList)
        
        }else {
            let errorMsg = (textField==="")? "Task cannot be empty": "task already exists"
            alert(errorMsg)
        }

        setTextField("")
    }

    


    let handleChange = event=>{
        //console.log(event.target.value)
        let text = event.target.value 
        setTextField(text)
    }

    let handleDelete =  event=>{
        let index =  list.indexOf(event.target.name)
        
        let newList = []
        for (let i = 0; i < list.length; i++){
            if (i !== index){
                newList.push(list[i])
            }
        }

        setList(newList)
        console.log(list)
        
    }


    return (
        <div className='todo'>
            <h1>To-Do </h1>
            <div className='todo-item-container'>
                {list.map(task=><div className="task-item" key={task}>
                    {task}
                    

                    <img src='/img/todo/delete.png' className='delete-button' name = {task} onClick={handleDelete} alt='sorry'/>
                    <input type="checkbox" value="false"  className='done-button'/>
                </div>)}
            </div>

            <form onSubmit={handleSubmit}>
                <input className='todo-input'  type = "text" placeholder='Buy milk' maxLength={10} name ="task" value={textField} onChange={handleChange}/>
            </form>
        </div>
    )
}