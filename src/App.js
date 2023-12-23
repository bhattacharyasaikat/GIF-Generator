
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full h-screen flex justify-center relative '>
      <h1 className='rounded-sm w-11/12 text-center absolute mt-[40px] bg-red-800 text-3xl px-10 py-1 '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center absolute top-[130px] '>
        <Random />
        <Tag/>
      </div>
        
    </div>
  );
}

export default App;
