import {birds} from './constants';
import { useState } from 'react';

import Item from './components/item'


const App = () => {
  const [data, setData]= useState(birds);

  const deleteItem = (id)=>{
    const remainingItems = data.filter((item)=> item.id !== id)
    setData(remainingItems);

  }
  const clearItems=()=>{
     setData([]);
  }

  return (
  <main className='bg-lime-400 min-h-screen w-screen flex items-center justify-center'>
    <div className='card w-[30rem] bg-white shadow-lg rounded-xl p-4 min-h-[25rem]'>
    <h1 className='text-center text-4xl font-bold mt-5 font-meeri'>
      Birthday Remainder
      </h1>
      <h1 className=' text-2xl  mt-5 ml-7 text-center '>
     {data.length} Birthday today
      </h1>
      <ul className='flex flex-col gap-8 my-6 '>
       {data.map((item)=>{
          const { id,name,age,imgUrl} = item;
          return(
           <Item
          key={id}
          id={id}
          name={name}
          age={age}
          imgUrl={imgUrl}
          deleteItem={deleteItem}
          />
          )
        })}

      </ul>
      <div className='flex justify-center'>
        <button className='px-24 py-3 bg-red-500 text-white text-2xl font-bold rounded-lg hover:bg-red-700'
        onClick={clearItems}
        >
          Clear All</button>
      </div>
      </div>
  </main>
  )
}
 
export default App;