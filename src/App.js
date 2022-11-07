import './App.css'

// Imported components to display on page:
import TopBar from './components/TopBar'
import Background from './components/Background'
import StoreListings from './components/StoreListings'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  )
}

export default App