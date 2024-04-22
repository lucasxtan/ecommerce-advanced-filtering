import { useState, useEffect } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

//Database
import products from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [query, setQuery] = useState("")
  // const [filteredItems, setFilteredItems] = useState(items);

  //Input filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  

  //----------------------------------------------------------------------------------------
  // const handleFilterButtonClick = (selectedCategory) => {
  //   if (selectedFilters.includes(selectedCategory)) {
  //     let filters = selectedFilters.filter((el) => el !== selectedCategory);
  //     setSelectedCategory(filters);
  //   } else {
  //     setSelectedCategory([...selectedFilters, selectedCategory]);
  //   }
  // };

  // useEffect(() => {
  //   filterItems();
  // }, [selectedFilters]);

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = items.filter((item) => item.category === selectedCategory);
  //       return temp;
  //     });
  //     setFilteredItems(tempItems.flat());
  //   } else {
  //     setFilteredItems([...items]);
  //   }
  // };
  //----------------------------------------------------------------------------------------

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    
    //product.title.toLocaleLowerCase() - converts all product titles filtered one by one to lower case 
    //.indexOf(query.tolowerCase()) converts query to lower case and gets the index of it
    //adds product to filteredItems if query is equal to a product title
  );

  //Radio filter
  const handleChange = event => {
    let categories = ['sneakers', 'flats', 'sandals', 'heels']
    let prices = [50, 100, 150, 200]
    let colors = ['black', 'blue', 'red', 'green', 'white']
    let companies = ['nike', 'adidas', 'puma', 'vans']
    
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


  //Buttons filter
  const handleClick = event => {
    setSelectedCategory(event.target.value); //may need updating
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products

    //filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      )
    }

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

  const result = filteredData(products, selectedCategory, query);



  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>

  )

}

export default App;