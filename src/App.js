import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';



function App() {
  // Defined data for the application.
  const users = ['Mark', 'Neil', 'Autriz']
  const initialGrocery = [
    { id: 1, name: "Deliciously Chewy Oatmeal Raisin Cookies", type: "bake", description: "A freshly baked cookie made with hearty oatmeal and sweet raisins.", checked: false },
    { id: 2, name: "Ripe and Juicy Seedless Pomelo Citrus Fruit", type: "fruit", description: "A refreshing seedless pomelo fruit filled with natural sweetness and ripened chlorophyll.", checked: true },
    { id: 3, name: "Authentic Filipino Menudo Dish with Potatoes", type: "dish", description: "A savory dish of tender menudo meat simmered with potatoes and orange peanuts.", checked: true },
    { id: 4, name: "Classic Butter Croissant with Almond Filling", type: "bake", description: "A flaky croissant generously filled with a creamy almond butter mixture.", checked: false },
    { id: 5, name: "Fresh Organic Spinach and Kale Vegetable Mix", type: "vegetable", description: "A vibrant mix of fresh spinach and kale, perfect for salads or smoothies.", checked: true },
    
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
