import FlashcardList from './FlashcardList';
import { useState } from 'react';
import './App.css';

function App() {


    //   //useState
  const [flashcards, setFlashcards] = useState(QUESTIONS)
  return (
    <>
      <header className="App-header">
        <h1>Session 19 Flashcard App</h1>
    </header>
    
      <FlashcardList flashcards={flashcards} />
      
      </>

  );
}

  const QUESTIONS = [
                    { front: "Favorite Dish", back: "Pho`", id: "111"},
    { front: "Favorite Color", back: "Anything Bright", id: "222" },
                    { front: "Favorite Day of the Week", back: "Sunday", id: "333" },
  ]
  
  




export default App;
