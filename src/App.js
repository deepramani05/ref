import './App.css';
import { useRef } from 'react';

function App() {

  let name = useRef()
  let number = useRef()
  let mail = useRef()
  let cource = useRef()
  let city = useRef()
  let date = useRef()

  const manage = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(number.current.value);
    console.log(mail.current.value);
    console.log(cource.current.value);
    console.log(city.current.value);
    console.log(date.current.value);

  }


  return (
    <>
      <form onSubmit={manage}>
        <input type="text" ref={name} placeholder="Student Name" />  
        <input type="number" ref={number} placeholder="Mobile Number" />
        <input type="email" ref={mail} placeholder="E-mail ID" />
        <input type="text" ref={cource} placeholder="Cource Name" />
        <input type="text" ref={city} placeholder="City Name" />
        <input type="date" ref={date} />
        <input type="submit" value="Click" />
      </form>

      
      
    </>
  )

}

export default App;
