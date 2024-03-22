import './App.css'
import Banner from './components/Banner/Banner'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Rechart from './components/Rechart/Rechart'
import ResponsiveChart from './components/ResponsiveChart/ResponsiveChart'
// import TooltipChart from './components/TooltipChart/TooltipChart'
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        <Banner></Banner>
        <PriceOptions></PriceOptions>
        {/* <Rechart></Rechart> */}
        {/* <TooltipChart></TooltipChart> */}
        <ResponsiveChart></ResponsiveChart>
      </div>
    </>
  )
}

export default App
