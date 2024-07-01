import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"

const App: React.FC = () => {
  return (
    <div className="w-full bg-slate-600 h-[2000px]">
      <Navbar/>
      <Jumbotron/>
    </div>
  )
}

export default App