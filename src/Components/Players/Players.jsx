import { useEffect, useState } from 'react'
import Data from '../Data/Data';

const Players = ({handlePlayer}) => {
    const [fakeData, setFakeData] = useState([]);

    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFakeData(data))
    },[]);

  return (
    <div className='grid grid-cols-3 gap-4 mt-10 max-w-screen-xl mx-auto'>
        {
          fakeData.map(data => <Data 
            handlePlayer={handlePlayer}
            key={data.id} 
            data={data}></Data>)
        }
    </div>
  )
}

export default Players