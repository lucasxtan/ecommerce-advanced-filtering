import { useState, useEffect } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

//Database
import items from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [query, setQuery] = useState("")
  // const [filteredItems, setFilteredItems] = useState(items);

  //Input filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  //Radio filter
  const handleChange = event => {
    let categories = ['sneakers', 'flats', 'sandals', 'heels', 'all categories']
    let prices = ['50', '100', '150', '200', 'all prices']
    let colors = ['black', 'blue', 'red', 'green', 'white', 'all colors']
    let companies = ['nike', 'adidas', 'puma', 'vans', 'all companies']
    
    //handles selected categories
    if (categories.includes(event.target.value)){
      setSelectedCategory(event.target.value);
    };

    if (prices.includes(event.target.value)){
      setSelectedPrice(event.target.value);
    };

    if (colors.includes(event.target.value)) {
      setSelectedColor(event.target.value);
    };

    if (companies.includes(event.target.value)) {
      setSelectedCompany(event.target.value);
    };
  };

  useEffect(() => {
    filteredData(items, selectedCategory, selectedPrice, selectedColor, selectedCompany, query);
  }, [selectedCategory, selectedPrice, selectedColor, selectedCompany, query])

  function filteredData(items, selectedCategory, selectedPrice, selectedColor, selectedCompany, query) {

    let filteredProducts = items.filter((item) => {
      return (
        (selectedCategory && selectedCategory !== 'all categories' ? item.category === selectedCategory : true)
        && (selectedPrice && selectedPrice !== 'all prices' ? item.newPrice === selectedPrice : true) 
        && (selectedColor && selectedColor !== 'all colors' ? item.color === selectedColor : true)
        && (selectedCompany && selectedCompany !== 'all companies' ? item.company.toLocaleLowerCase() === selectedCompany : true)
        && item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
      )

    })
    
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(items, selectedCategory, selectedPrice, selectedColor, selectedCompany, query);



  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleChange={handleChange} selectedCompany={selectedCompany}/>
      <Products result={result}/>
    </>

  )

}

export default App;