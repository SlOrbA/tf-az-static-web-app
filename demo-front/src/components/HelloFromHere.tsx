import React, {FC, useState, useEffect} from 'react';

interface HelloProps {
  enteredName:string;
  message:string;
  greetingDispatcher: React.Dispatch<{type:string, payload: string}>;
}

const HelloFromHere: FC<HelloProps> = ({enteredName: name}:HelloProps) => {
  const [message,setMessage] = useState("");

  useEffect(()=>{
    if(name) {
      setMessage(`Hello from, ${name}`);
    }

  },[name]);
  if(!name) {
        return <div>no name given</div>
  }
  return <div>{message}</div>;
}
export default HelloFromHere;
