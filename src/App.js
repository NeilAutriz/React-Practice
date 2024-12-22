import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  // Defined data for the application.
  const users = ['Mark', 'Neil', 'Autriz']
  const initialGrocery = [
    { id: 1, name: "Cookie", type: "bake", description: "Cookie with oat meal raisins", checked: false },
    { id: 2, name: "Pomelo", type: "fruit", description: "Seedless pomelo fruit with riped chlorophyll", checked: true },
    { id: 3, name: "Menudo", type: "dish", description: "Menudo meat with potatoes and orange peanuts", checked: true }
  ];

  return (
    <div className="App">
      <Header users={users}/>
      <Content initialGrocery={initialGrocery}/>
      <Footer />
    </div>
  );
}

export default App;
