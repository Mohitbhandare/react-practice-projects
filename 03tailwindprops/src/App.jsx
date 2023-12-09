import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind css
      </h1>
      <Card userName="Mohit" btnText="click me" />
      <Card userName="react" btnText="click here" />
    </>
  );
}

export default App;
