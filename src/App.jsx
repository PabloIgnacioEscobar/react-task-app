// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import {tasks as data} from './data/tasks';
// import { useState, useEffect } from "react";

// function App() {

//   const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

//   useEffect(()=> {
//     setTasks(data)
//   }, [])
   
//   return (
//     <>
//       <TaskForm/>
//       <TaskList tasks=""/>
//     </>
//   )
// }
 
// export default App

//Voy a llamar a un componente llamado tasklist.jsx.
//ENTONCES de este tasklist le vamos a pasar la propiedad llamada tasks y el valor de esa propiedad va ser justamente el arreglo de tareas. Acordarse que aca nesecitamos el use state y useEffect. Otra cosa si pasamos un props al archivo task list, todos los componentes deben tener el pase de props. Sino no se ejecutara el flujo. Y nos tirara error. Y sino no nesesariamente tenemos que conectarlo con props, PODEMOS conectarlo con la tasks que es justamente la propiedad y al mismo tiempo donde estan las propeidades tittle y description. Ir a 149 para verlo.
//----------------------------------------------------------------------------------
//Ahora que app tiene el arreglo, podriamos pasarle el nombre del arreglo y que lo altere pero no es el enfoque utiliza react, react dice que para poder añadir algo de tal arreglo tenemos que crear una funcion dentro de app que puede llamarse createTask y este create task se lo pasamos a taskform.

// function App() {

//   const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

//   useEffect(()=> {
//     setTasks(data)
//   }, [])
   
//   return (
//     <>
//       <TaskForm/>
//       <TaskList tasks=""/>
//     </>
//   )
// }
 
// export default App
//----------------------------------------------------------------------------------
// function App() {

//   const [tasks, setTasks] = useState([]);//Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.
  
//   useEffect(()=> {
//     setTasks(data)
//   }, []); 

//   function createTask(task) {
//     setTasks([...tasks, {
//       title: task.title,
//       description: task.description,
//       id: tasks.length
//     }])
//   }
//   //Aqui le decimos que lo que contiene tasks, lo añadimos al objeto task.

//   function deleteTask(taskId) {
//     setTasks(tasks.filter(task => task.id !== taskId))
//   }
//   //tasks.filter(task => task.id !== taskId) Nos va devolver un nuevo arreglo pero este nuevo arreglo ya no tiene ese elemento que eh quitado, entonces es lo que vamos aestablecer en el estado(state)[65]
     
//   return (
//     <>
//       <TaskForm createTask={createTask}/>
//       <TaskList tasks={tasks} deleteTask={deleteTask}/>
//     </>
//    )
//  }
   
// export default App
// // Entonces la conclusion final para la eliminacion de tareas seria: para cada tarea que estas recorriendo [tasks] quiero que confirmes si el id es igual al taskId que nos estan pasando.
//---------------------------------------------------------------------------------
//Use context
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
// import {tasks as data} from './data/tasks';
// import { useState, useEffect } from "react";

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
       <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
       </div>
    </main>
   )
 }
   
export default App;

// {/* //Si vemos bien en aterior, vemos que siempre el useState estuvo siempre en app, pero ahora la mejr forma es pasaserlo a TaskContext, es mejor que este ahi.Tambien pasamos la funcion create task. Y tambien la funcion deleteTask.
// //El app le estaba pasando el createTask, entonces ya no hay que pasarle, asique eliminamos todo lo que tenia taskform. Como la funciona esta arriba de todo ya puedo evitar pasar por toda esa transacion, el taskform puede acceder a eso, y el tasklist tambien.
// //Entonces simplemente le pasamos el props de taskform a teaskcontexto. Lo mandamos.Taskform nesecita ese valor.  */}