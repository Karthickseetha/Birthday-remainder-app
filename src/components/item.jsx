import {FaTrashCan} from 'react-icons/fa6';
const Item = ({ imgUrl, name, age, id, deleteItem}) => {
    const clickHandler =(id)=>{
        deleteItem(id)
    }
    return ( 
        <article className='flex items-center justify-between gap-4 w-[24rem] mx-auto'>
        <div  className='flex items-center justify-between gap-4'>
          <div>
            <img src={imgUrl}
             alt={name}
             className='w-16 h-16 rounded-full'
              />
          </div>
          <div className='flex flex-col item-start gap-2'>
            <span className='text-xl font-medium'>{name}</span>
            <span className='text-xl font-bold'>{age}</span>
          </div>
        </div>
        <div>
          <button 
          onClick={()=> clickHandler(id)}
          className='w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center
          text-2xl text-red-500 shadow transition-all duration-300 ease-in hover:cursor-pointer hover:-translate-y-1 '

          >
            <FaTrashCan/></button>
        </div>

      </article>
     );
}
 
export default Item;