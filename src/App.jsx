import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/NavBar'
import Players from './Components/Players/Players';
import Selected from './Components/Selected/Selected';
import Footer from './Components/Footer/Footer';

function App() {
  const [coin,setCoin] = useState(0);
  const [selected, setSelected] = useState([]);
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  })

  const handleCoin = (price) => {
    setCoin(coin-price);
  }

  const handlePlayer = (data) => {
    const isSelected = selected.find(p => p.id == data.id);

    if (isSelected) {
      alert('Already Selected')
    }
    else if (selected.length >= 6) {
      alert('Team select limited')
    }
    else{
      if (coin < data.price){
        alert('Not enough coin')
      }
      else{
        handleCoin(data.price);
        const newSelected = [...selected, data];
        setSelected(newSelected);
        alert('Player Added')
      }
    }
  };
  
  const handleIsActive = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        available: false,
        status: "selected"
      })
    }
  }

  const handleDelete = (id) => {
    const remainingPlayers = selected.filter((p) => p.id !== id);
    setSelected(remainingPlayers);
  }

  return (
      <div>
        <NavBar coin = {coin}></NavBar>
        <Banner coin = {coin} setCoin = {setCoin}
        handleIsActive={handleIsActive} 
        isActive={isActive} 
        selected={selected}
        ></Banner>

        {isActive.available ? <Players handlePlayer={handlePlayer}></Players> :
          <Selected 
          handleDelete={handleDelete}
          handleIsActive={handleIsActive}
          isActive={isActive}
          selected={selected}
          ></Selected>}
        <Footer></Footer>

      </div>
  )
}

export default App
