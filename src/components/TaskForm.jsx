// import {useState} from 'react'

// function TaskForm() {

//   const [Tittle, setTittle] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   //Es un evento que cancela el comportamiento por defecto
//     console.log(Tittle)
//   }
//   //Es como decir maneja el evento onSubmit del formulario.

//   return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder="Escribe tu tarea"
//               onChange={(e) => setTittle(e.target.value)}/>
//             <button type='button'>
//                Guardar
//             </button>
//         </form>
//   );
// }

// export default TaskForm

//Cuando usamos un button dejarle un type="Submit" por que por mas que funcione el buton como envio todavia no entiendo por que lo hace.
//----------------------------------------------------------------------------------
//¿Como hacemos para añadir todo eso de arriba a una lista de tareas?:

// import {useState} from 'react'

// function TaskForm({createTask}) {

//   const [title, setTitle] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createTask(title)
//   }
//   //Es un evento que cancela el comportamiento por defecto

//   //Es como decir maneja el evento onSubmit del formulario.

//   return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder="Escribe tu tarea"
//               onChange={(e) => setTitle(e.target.value)}/>
//             <button>
//                Guardar
//             </button>
//         </form>
//   )
// }

// export default TaskForm
//Le decimos a la function que esta recibiend una funcion: create taks. Y en vez de mostrar una propiedad en consola de un stringo como vimos antes[11] vamos a crear un const que se llame newTask va ser un objeto y el valor  va ser un tittle, y el tittle como valor va tener como valor hasta lo que tengamos hasta el momento en tittle. title: title y se puede resumir en title solo.
//----------------------------------------------------------------------------------
// import { useContext, useState } from "react";
// import { TaskContext } from "../context/TaskContext";

// function TaskForm({ createTask }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // const valor = useContext(TaskContext)
//   // console.log(valor)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createTask({
//       title,
//       description
//     });
//     setTitle('')
//     setDescription('')
//   };
//   //Es un evento que cancela el comportamiento por defecto

//   //Es como decir maneja el evento onSubmit del formulario.

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Escribe tu tarea"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         autoFocus
//       />
//       <textarea
//         placeholder="Escribe la descrípcion de la tarea"
//         onChange={(e) => setDescription(e.target.value)}
//         value={description}
//       ></textarea>
//       <button>Guardar</button>
//     </form>
//   );
// }

// export default TaskForm;
//---------------------------------------------------------------------------------
//
import { useState, useContext } from "react";
// import { TaskContext } from "../context/TaskContext";
import { TaskContext } from "../context/TaskContext";
//Entender esto de las subidas entendiendo que context es el padre y todo sus hijos dentro son componentes. Entonces nada, veamoslo asi, y no por el orden de los arhivos en las carpetas.

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const value = useContext(TaskContext)
  //como value es un objeto yo quiero solo quiero la funcion createtask:
  const { createTask } = useContext(TaskContext);
  // const valor = useContext(TaskContext)
  // console.log(valor)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  //Es un evento que cancela el comportamiento por defecto

  //Es como decir maneja el evento onSubmit del formulario.

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descrípcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-green-600 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
//Aqui tambien importamos el context.El use context, y tambien lo vmaos a usar como funcion.

//El create task ejecuta, hace lo mismo solo que ahora vive en taskcontext[27],recibe la tarea(task) establece un nuevo calor en la tarea y las tereas estan en ahi mismo en tasks[18].
