// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { TaskContext, TaskContextProvider } from './context/TaskContext'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <TaskContextProvider>
//           <App />
//     </TaskContextProvider>
//   </React.StrictMode>
// )
//[ArchivoTaskContext 16] y justo en app vamos a decir que todo va estar dentro de ese contexto. Entonces importamos,llamos, y traemos dos valores. Entonces llamos al componente que renderiza el componente de jsx, entonces llamamos a ese componente y lo colocamos como contenedor del app. Esto tambien sirve si queremos llamar un componente fuera del arbol pero siempre y cuando este adentro del taskcontext
//---------------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskContext, TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
          <App />
    </TaskContextProvider>
  </React.StrictMode>
)