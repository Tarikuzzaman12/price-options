
import './App.css'
import Linechart from './Components/Linechart/Linechart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <Linechart></Linechart>
    <Phones></Phones>
{/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App
