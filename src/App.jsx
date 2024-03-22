import './App.css'
import Banner from './components/Banner/Banner'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        <Banner></Banner>
        <PriceOptions></PriceOptions>
      </div>
    </>
  )
}

export default App
