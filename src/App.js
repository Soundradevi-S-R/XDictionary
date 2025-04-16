
import { useState } from 'react';
import './App.css';

function App() {

  const [meaning,setMeaning] = useState('');
  const [input,setInput] = useState('');

  const data = 
            [
            
                { word: "React", meaning: "A JavaScript library for building user interfaces." },
            
                { word: "Component", meaning: "A reusable building block in React." },
            
                { word: "State", meaning: "An object that stores data for a component." }
            
            ];
            

  const handle_search = (e) => {
   
    e.preventDefault();

    setMeaning(''); // reset meaning value evrytime you search new word

    const searchword = input.toLowerCase();

    for(const vocable of data){
     
      const dictionaryword = vocable.word.toLowerCase();

      if(searchword === dictionaryword){
        setMeaning(vocable.meaning);
        return;
      }

    }
 // if in case the new word has no match or null , revert the prev meaning value 
    setMeaning( 
      (prevMeaning) => {
          if (prevMeaning === "") {
            return "Word not found in the dictionary.";
          }
          return prevMeaning;
      });
    
       
  }

  const handle_change=(e)=>{

    setInput(e.target.value);
    
  }   
  


return (    

    <div className="dictionary-dashboard">
      <h1>Dictionary App</h1>

      <form onSubmit={handle_search}>
      <input type="text" placeholder="Search for a word..." name='word' value={input} onChange={handle_change} className='input-text'/>
      <button type='submit' className='search-button' > Search </button>

      </form>
      <span className='meaning-text'><h3>Definition:</h3> <p>{meaning}</p></span>
    </div>
  );
}

export default App;
