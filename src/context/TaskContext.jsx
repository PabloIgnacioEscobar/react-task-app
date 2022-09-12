// import { createContext } from "react";

// export const TaskContext = createContext();

// export function TaskContextProvider(props) {
//   let x = 20;

//   return (
//     <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
//   );
// }

//Nota importante:En react cuando le decimos que dentro de un componente van a ir mas componentes podemos decirle como elementos hijos. Hay una propiedad especial que se llama children. Con podemos aplicar la idea de que el context se padre de de todos sus hijos(todos aquellos que estan adentro de el).Vamos a crear un compente especial que nos da react para esto. Y para eso la importamosprimero[1]. La ejecutamos y esta funcion retorna un objeto TaskContext.
//[8][9][10] ya tenemos el compenente naranja. Ahora exportamos el taskcontext y el taskcontextprovider. Entonces vamos en el main[11]
//---------------------------------------------------------------------------------
//[Use context]
import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks';
//.. es subir una carpeta.

export const TaskContext = createContext();

export function TaskContextProvider(props) { 
  const [tasks, setTasks] = useState([]); //Lo que creamos aqui en ([]) es un arreglo vacio. Pero lo dejamos en tasks que son los arreglos que tenemos.

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      description: task.description,
      id: tasks.length
    }])
  }
  //Aqui le decimos que lo que contiene tasks, lo añadimos al objeto task.

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  //tasks.filter(task => task.id !== taskId) Nos va devolver un nuevo arreglo pero este nuevo arreglo ya no tiene ese elemento que eh quitado, entonces es lo que vamos aestablecer en el estado(state)[65app.jsx]

  useEffect(()=> {
    setTasks(data)
  }, []); 
  
  return (
    <TaskContext.Provider value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask
    }}>{props.children}</TaskContext.Provider>
  );
  //Dentro de los {} interpreta codigo,podemos pasarle un numero, un string,una lista de elementos, o un objeto. En este caso le pasamos un objeto por que le vamos a pasar varias cosas.
}
