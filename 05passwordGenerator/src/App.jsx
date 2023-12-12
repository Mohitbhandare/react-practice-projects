import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hooks
  const passwordRef = useRef(null);

  // password generator function
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*(){}[]';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  // password copy function
  const copyThePasswordToClipboard = useCallback(() => {
    // here highlight in password input
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    // it copy the password on clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Calling the password generator function using the useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 text-center shadow-md rounded-md px-2 py-1 text-sky-500 bg-gray-600">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-md mb-4 overflow-hidden">
          <input
            type="text"
            value={password}
            className="w-full outline-none px-2 py-2 rounded-l-md"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="text-white bg-blue-500 outline-none shrink-0 px-2"
            onClick={copyThePasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={100}
              min={8}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charactorInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charactorInput">Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
