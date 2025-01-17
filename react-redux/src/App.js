import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from './store';

//FREECODECAMP tutorial

function App() {

  const counter=useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  // const Increment =() =>{
  //   dispatch({type:'INC'})
  // }

  // const Decrement = () =>{
  //   dispatch({type : 'DEC'})
  // }

  // const AddBy = () =>{
  //   dispatch({type : 'ADD' , payload: 10})
  // }

  const Increment = ()=>{
    dispatch(actions.Increment())
  }

  const Decrement = ()=>{
    dispatch(actions.Decrement())
  }

  const AddBy = ()=>{
    dispatch(actions.AddBy(10))
  }
  
  return (
    <div>
      <h1>Counter App:</h1>
      <h3>{counter}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={AddBy}>Add by 10</button>
    </div>
  );
}

export default App;
