import {useState} from "react"

export default function Flashcard({ flashcard }) {

    const [flip, setFlip] = useState(true)

    return <>
        <div className={ `card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            {flip ? flashcard.front : flashcard.back}
            </div>
    </>
}

