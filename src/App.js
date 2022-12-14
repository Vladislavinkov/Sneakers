import React from 'react';
import {Routes, Route } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import AppContext from './context';
import Orders from './pages/Orders';

import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [carOpened, setCartOpened] = React.useState(false);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			// setLoading(true)
			const cartResponse = await axios.get('https://62ea11e801787ec712208230.mockapi.io/cart');
			const favoritesResponse = await axios.get('https://62ea11e801787ec712208230.mockapi.io/favorites');
			const itemsResponse =  await axios.get('https://62ea11e801787ec712208230.mockapi.io/Items');

			setLoading(false)
			
			setCartItems(cartResponse.data);	
			setFavorites(favoritesResponse.data);	
			setItems(itemsResponse.data);	
		}

		fetchData();

	}, []);


	const onAddToCart = async (obj) => {
		try{
			const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
			if(findItem){
				setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://62ea11e801787ec712208230.mockapi.io/cart/${findItem.id}`);
			}else{
				const {data} = await axios.post('https://62ea11e801787ec712208230.mockapi.io/cart', obj);
				setCartItems(prev => prev.map(item => {
					if(item.parentId === data.parentId){
						return {
							...item,
							id: data.id,
						}
					}
					return item;
				}));
			}
		}catch(error){
			alert('error varorite');
		}
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://62ea11e801787ec712208230.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
	}

	const onAddFavorite = async(obj) => {
		try{
			if(favorites.find(favObj => favObj.id === obj.id)){
				axios.delete(`https://62ea11e801787ec712208230.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
			}else{
				const {data} = await axios.post('https://62ea11e801787ec712208230.mockapi.io/favorites', obj)
				setFavorites(prev => [...prev, data]);
			}
		}catch(error){
			alert('error varorite');
		}
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id));
	};
	
  return (
    <AppContext.Provider value={{items, cartItems, favorites, onAddFavorite, onAddToCart, isItemAdded, setCartItems}}>
		<div className="wrapper clear">
			{carOpened ? <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/> : null}

			<Header onClickCart={() => setCartOpened(true)}/>
			<Routes>
				<Route exact path="/" element={
					<Home
						cartItems={cartItems}
						items={items} 
						searchValue={searchValue} 
						setSearchValue={setSearchValue} 
						onChangeSearchInput={onChangeSearchInput}
						onAddFavorite={onAddFavorite}
						onAddToCart={onAddToCart}
						isLoading={isLoading}/>}/>
			</Routes>

			<Routes>
				<Route exact path="/favorites" element={
					<Favorites onAddFavorite={onAddFavorite}/>}/>
			</Routes>
			<Routes>
				<Route exact path="/orders" element={
					<Orders/>}/>
			</Routes>
		</div>
	</AppContext.Provider>
  );
}



export default App;
