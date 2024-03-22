import './App.css'
import Banner from './components/Banner/Banner'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Rechart from './components/Rechart/Rechart'
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        <Banner></Banner>
        <PriceOptions></PriceOptions>
        <Rechart></Rechart>
      </div>
    </>
  )
}

export default App
