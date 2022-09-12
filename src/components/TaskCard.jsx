// import {useContext} from 'react'
// import {TaskContext} from '../context/TaskContext/'

// function TaskCard({task, deleteTask}) {

// // function mostrarAlerta() {
// //   alert(task.id)
// // }

// // const value = useContext(TaskContext)
// // console.log(value)

// return (
// <div key={task.id}>
//     <h1>{task.title}</h1>
//     <p>{task.description}</p>
//     <button onClick={() => deleteTask(task.id)}>
//         Eliminar Tarea
//     </button>
// </div>
//   )
// }

// export default TaskCard

//Lo que tenemos que hacer es reutilizar esta porcion. 
//Entonces lo que vamos a hacer es que cuando se de un click en eliminar tarea no vamos a mostrar la funcion mostrar alerta.[Por eso esta descomentada] sino que vamos a ejecutar la funcion deleteTask. Pero no lo podemos ejecutar solo asi sin mas, basicamente decimos que cuando se de un click ahi va recibir informacion del evento de las tareas. Cada vez que le demos on click esta accediendo este, al arreglo de tareas, es util por que a partir de aqui podemos eliminar. Entonces cuando te ejecutes te voy a pasar un parametro(es la idea que tenemos que tener en nuestra cabeza). Neseitamos pasarle al delete task pasarle un id de la tarea[64][66] de app.jsx.

//Entonces [11]de taskcard. el onclick va tener un objeto con una funcion dentro. Entonces esta funcion va ejecutar el delete task, y adentro del delete task a este la inicializamos para darle un valor dentro(task.id) entonces esto nos devuelve los valores a medida que le damos un click. Entonces con esto ya podemos aplicar lo del filter en app delete task.

//Entonces como hago si quiero ir a buscar ese valor 20 en taskcontext? bueno importamos primero:[1]pero ahora que contexto puedo llamar? bueno justamente el nombre del contexto! :O etonces lo importamos[2] (.. eso es para entrar dentro del archivocontext)
//---------------------------------------------------------------------------------
//[Use context]
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

 const {deleteTask} = useContext(TaskContext);

// function mostrarAlerta() {
//   alert(task.id)
// }

// const value = useContext(TaskContext)
// console.log(value)

return (
<div className="bg-gray-800 text-white p-4 rounded-md" key={task.id}>
    <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
    <p className='text-gray-500 text-sm'>{task.description}</p>
    <button className='bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500' onClick={() => deleteTask(task.id)}>
        Eliminar Tarea
    </button>
</div>
  )
}

export default TaskCard
//Voy a importar el useContext, voy a importar tambien la carpeta taskcontext y de ahi voy a decir que traigas el taskcontext:El nombre[21]Taskcontext.jsx