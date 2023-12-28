import './App.css';
import UsersList from './UsersList';

// const action = {
//     type: '',
//     payload: ,
// }

// VIEW (PAYLOAD) => REDUCER 

function App() {
 
  
  return (
    <div>
      {/* <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={handleIncrementByValue}>INC BY Value</button> <br /> <br />
      <button onClick={() => dispatch({ type: INCREMENT, payload: null })}>Inc</button>
      <h3>
        {counter}
      </h3>
      <h5>{JSON.stringify(loading)}</h5>
      <button onClick={() => dispatch({ type: DECREMENT })}>Dec</button> */}
      <UsersList/>
    </div>
  )
}

export default App;