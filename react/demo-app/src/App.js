// import logo from './logo.svg';
import './App.css';
// import FormExample from './components/FormExample';
// import Table from './components/Table';
// import Welcome from './components/Welcome';
// import Heading from './components/Heading';
// import ParentClass from './components/ParentClass';
// import Counter from './components/Counter';
// import Counter1 from './components/Counter1';
// import DynamicContent from './components/DynamicContent';
// import ToggleContent from './components/ToggleContent';
// import Parent from './components/Parent';
import BasicExample from './components/BasicExample';
// import CustomToggle from './components/CustomToggle';
// import BasicExample1 from './components/BasicExample1';
// import AlertDismissibleExample from './components/AlertDismissibleExample';
// import ButtonExample from './components/ButtonExample';
// import VariationsExample from './components/VariationsExample';
// import BreadcrumbExample from './components/BreadcrumbExample';
// import ToolbarBasicExample from './components/ToolbarBasicExample';
// import ParentClass from './components/ParentClass';
// import TextExample from './components/TextExample';
// import ReducerComp from './components/ReducerComp';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Todos from './components/Todos';
import Todo from './components/Todo';
// import Todos from './components/Todos';
function App() {
 
  return (
        <div>
          <h1> hello world</h1>
          {/* <Table/> */}
          {/* <Welcome name={"john"} age={23}/> */}
          {/* <Heading marks={100}/> */}
          {/* <ClassParent/> */}
          {/* <FormExample/> */}
          {/* <ParentClass/> */}
          {/* <Counter/> */}
          {/* <DynamicContent isLoggedIn={false}/> */}
          {/* <ToggleContent/> */}
          {/* <Parent/> */}
          <BasicExample/>
          {/* <CustomToggle/> */}
          {/* <BasicExample1/>
          <AlertDismissibleExample/>
          <ButtonExample/>
          <VariationsExample/>
          <BreadcrumbExample/>
          <ToolbarBasicExample/>
          <TextExample/>

          <ParentClass message={"hello"} name={"Dilip"}/>
          <ReducerComp/>

          
          {/* <Todos/> */}
          <Todo/>

        </div>
     
   );
}

export default App;
