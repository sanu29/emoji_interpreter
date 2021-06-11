import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const[emj, setemj] = useState("");
  const[output, outputsetter] = useState("");
  
  const emojidic = {
      "😀": "Grinning Face",
      "😃":"Grinning Face with Big Eyes",
      "😄":"Grinning Face with Smiling Eyes",
      "😁" :"Beaming Face with Smiling Eyes",
      "😆":"Grinning Squinting Face",
      "😉":"Winking Face",
      "🙃":" Upside-Down Face",
      "😉":" Winking Face",
      "😇":" Smiling Face with Smiling Eyes",
      "🥰 ":" Smiling Face with Halo",
      "😍":" Smiling Face with Heart-Eyes",
      "🤩":" Star-Struck",
      "😘":" Face Blowing a Kiss",
      "😗":" Kissing Face",
      "☺️":" Smiling Face",
      "😚":" Kissing Face with Closed Eyes",
      "😙":" Kissing Face with Smiling Eyes",
      "😋":" Face Savoring Food",
      "😛":" Face with Tongue",
      "😜":" Winking Face with Tongue",
      "🤪":" Zany Face",
      "😝":" Squinting Face with Tongue",
      "🤑":" Money-Mouth Face",
      "🤗":" Hugging Face",
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
      <h2 class="heading"> Emoji 😄 Interpreter </h2>
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
