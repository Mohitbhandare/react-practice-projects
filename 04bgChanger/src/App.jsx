import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 gap-3 shadow-lg rounded-lg">
          <button
            onClick={() => setColor('red')}
            className="px-2 py-2 outline-none bg-red-500 rounded-xl text-white"
            style={{ background: 'red' }}
          >
            red
          </button>
          <button
            onClick={() => setColor('blue')}
            className="px-2 py-2 outline-none bg-red-500 rounded-xl text-white"
            style={{ background: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('green')}
            className="px-2 py-2 outline-none bg-red-500 rounded-xl text-white"
            style={{ background: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('yellow')}
            className="px-2 py-2 outline-none bg-red-500 rounded-xl text-white"
            style={{ background: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('black')}
            className="px-2 py-2 outline-none bg-red-500 rounded-xl text-white"
            style={{ background: 'black' }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
