import './App.css';
// import Person from "./Components/Person";
// import Man from "./Components/Man";
// import ClassLifecycle from './Components/ClassLifecycle';
// import LifeCycle from './Components/LifeCycle';
// import FunctionLifecycle from './Components/FunctionLifecycle';
import PureComponent from './Components/PureComponent';
// import Person1 from './HOC/Person1';
// import Person2 from './HOC/Person2';

function App() {
  
  return (
    <div className="App">
      <>
          {/* <Person name="Ganesh"/>
          <Person name="Malay"/> 
          <Person/>
          <Man name="Krishna"/> */}
          {/* <ClassLifecycle/> */}
          {/* <LifeCycle/> */}
          {/* <FunctionLifecycle/> */}
          <PureComponent/>
          {/* This is for HigherOrder Component */}
          {/* <Person1/>
          <Person2/> */}
          
       </>
    </div>
  );
}

export default App;
