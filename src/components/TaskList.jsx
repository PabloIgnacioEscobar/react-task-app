// import {tasks as data} from './tasks'
//as es como un alias ya que habia repetecione de nombres, en el nombre del arvhibo con el de una variable. En este caso tasks
// import {useState, useEffect} from 'react'
//En este caso lo importamos con llaves por que no es un export default, es un export normal.
// console.log(tasks);
//Ahora como podemos mostrar esos datos en pantalla? = con state!

// function TaskList() {

//     const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

//     useEffect(()=> {
//       setTasks(data)
//     }, [])

//     if (tasks.lenght === 0) {
//       return <h1>No hay tareas aun</h1>
//     }

//   return (
//     <div>
//         {
//             tasks.map(task => (<div>
//                     Tarea
//                 </div>
//                 ))
//         }
//     </div>
//   )
// }

// export default TaskList
//Al momento en que se crea el componente de la funcion Tasklist() el tasks de console.log()
// [Console.log(tasks)] no existe por el momento. Entonces el lugar de utilizar el tasks en la parte [9] dentro de useState([]), lo dejemos como vacio pero cuando carga el componente le voy a asisgar las tereas de tasks, y para eso se usa el useEffect :O

//Entonces el resultado final seria:

// function TaskList() {

//     const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

//     useEffect(()=> {
//       setTasks(data)
//     }, [])

//     if (tasks.lenght === 0) {
//       return <h1>No hay tareas aun</h1>
//     }

//   return (
//     <div>
//         {
//             tasks.map(task => (<div key={task.id}>
//                     <h1>{task.title}</h1>
//                     <p>{task.description}</p>
//                 </div>
//                 ))
//         }
//     </div>
//   )
// }

// export default TaskList

//Es lo mismo solo que comentamos el console.log, osea  no va.Y agregamos los objetos[54]
//----------------------------------------------------------------------------------
//Aqui cortamos el const settaks y el use effect y los vamos a llevar en app..jsx
// import {tasks as data} from './tasks'
// import {useState, useEffect} from 'react'

// function TaskList() {
//   const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

//   useEffect(()=> {
//     setTasks(data)
//   }, [])

//   if (tasks.lenght === 0) {
//     return <h1>No hay tareas aun</h1>
//   }

// return (
//   <div>
//       {
//           tasks.map(task => (<div key={task.id}>
//                   <h1>{task.title}</h1>
//                   <p>{task.description}</p>
//               </div>
//               ))
//       }
//   </div>
// )
// }

// export default TaskList
//----------------------------------------------------------------------------------
//Una vez hecho eso lo de la linea 67. Lo pegamos en la funtion de app.jsx.Ahora lo que hacemos tambien en copiar el import task y lo importamos en app.jsx

// import {tasks as data} from './tasks'
// import {useState, useEffect} from 'react'

// function TaskList() {

//   if (tasks.lenght === 0) {
//     return <h1>No hay tareas aun</h1>
//   }

// return (
//   <div>
//       {
//           tasks.map(task => (<div key={task.id}>
//                   <h1>{task.title}</h1>
//                   <p>{task.description}</p>
//               </div>
//               ))
//       }
//   </div>
// )
// }

// export default TaskList
//----------------------------------------------------------------------------------
//Una vez cortado vemos que el useState y el use eseEffect ya no se nesecitan por lo tanto lo sacamos. En este caso solo lo comentamos. Por que sino me pierdo xd
// import {useState, useEffect} from 'react'

// function TaskList(props) {

//   if (props.tasks.lenght === 0) {
//     return <h1>No hay tareas aun</h1>
//   }

// return (
//   <div>
//       {props.tasks.map(task => (
//           <div key={task.id}>
//               <h1>{task.title}</h1>
//               <p>{task.description}</p>
//           </div>
//        ))}
//   </div>
//   )
// }

// export default TaskList

//Ahora lo que ocurre es que taksList nesecitas recorrer las tareas para poder mostrarlas en h1  y p.Entonces vamos a app y vemos, esta el arreglo de tareas se lo vamos a pasar al Tasklist del return de app como etiqueta, como un props. Entonces tasklist va recibir un props y desde props, va recibir tasks[134]
//Entonces ahora ir a app y ver la explicacion que escribo.[24]
//----------------------------------------------------------------------------------
// function TaskList({tasks}) {

//   if (tasks.lenght === 0) {
//     return <h1>No hay tareas aun</h1>
//   }

// return (
//   <div>
//       {tasks.map(task => (
//           <div key={task.id}>
//               <h1>{task.title}</h1>
//               <p>{task.description}</p>
//           </div>
//        ))}
//   </div>
//   )
// }

// export default TaskList
//----------------------------------------------------------------------------------
//UseContext
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//Tener en cuenta que dentro de los({}) llamamos el nombre de las funcinoes que tienen los objetos o que estan por extraerlos.
function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.lenght === 0) {
    return (<h1 className="text-white">No hay tareas aun</h1>);
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
//Aqui el tasklis nesecita dos parametros: las tareas y la funcion eliminar.Ahora yo no se les pasa como un props, dentro de un parentesis.Ahora se pasa directo en taskcontext.
//Por que no declaro el deletetask como propiedad llamando al objeto delete task?: Por que el delete task esta viviendo en el contexto cualquier puede accedeerlo.
