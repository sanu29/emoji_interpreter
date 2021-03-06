import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const[emj, setemj] = useState("");
  const[output, outputsetter] = useState("");
  
  const emojidic = {
      "π": "Grinning Face",
      "π":"Grinning Face with Big Eyes",
      "π":"Grinning Face with Smiling Eyes",
      "π" :"Beaming Face with Smiling Eyes",
      "π":"Grinning Squinting Face",
      "π":"Winking Face",
      "π":" Upside-Down Face",
      "π":" Winking Face",
      "π":" Smiling Face with Smiling Eyes",
      "π₯° ":" Smiling Face with Halo",
      "π":" Smiling Face with Heart-Eyes",
      "π€©":" Star-Struck",
      "π":" Face Blowing a Kiss",
      "π":" Kissing Face",
      "βΊοΈ":" Smiling Face",
      "π":" Kissing Face with Closed Eyes",
      "π":" Kissing Face with Smiling Eyes",
      "π":" Face Savoring Food",
      "π":" Face with Tongue",
      "π":" Winking Face with Tongue",
      "π€ͺ":" Zany Face",
      "π":" Squinting Face with Tongue",
      "π€":" Money-Mouth Face",
      "π€":" Hugging Face",
    };
      const emojilist = Object.keys(emojidic);
      function inputHandler(event)
  {
    
      var inputemoji = event.target.value;
      var meaning = emojidic[inputemoji];
      if(meaning === undefined)
      {
            outputsetter("Cannot Find this emoji in Dictionary")
      }
      else{
          setemj(meaning);
          outputsetter(meaning)
    
      }
    }

    function emojihandler(emoji)
    {
      console.log(emoji);
      var meaning = emojidic[emoji];
      if(meaning === undefined)
      {
            outputsetter("Cannot Find this emoji in Dictionary")
      }
      else{
          setemj(meaning);
          outputsetter(meaning)
    
      }
    }


  return (
    <div className="App">
      <h2 class="heading"> Emoji π Interpreter </h2>
      <input onChange={inputHandler} class="text" placeholder="Enter emoji" />
      <h3>{output}</h3>
      <h5>Emoji's we know </h5>
      {emojilist.map(function(item){
        return <span key ={item} style={{fontSize:"2rem", cursor:"pointer"}}
        onClick = {()=>emojihandler(item)}
        >{item}</span>
      })}
      </div>
  );
}
