

import React, { useEffect, useState } from 'react';


export default function Api() {

const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}
