import React from 'react';
import Card from "../components/Card/Card";


const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddFavorite ,onAddToCart, isLoading}) => {

	const renderItems = () => {
		const filtresItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
		return (isLoading ? [...Array(4)] : filtresItems).map((item,i) => (  
			<Card
			key={i}
			onFavorite={(obj) => onAddFavorite(obj)}
			onPlus={(obj) => onAddToCart(obj)}
			loading={isLoading} 
			{...item}/>
			)) 
	}
  return (
	<>
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
				<div className="search-block d-flex">
					<img src="/img/VectorSearch.svg" alt="Search" />
					<img onClick={() => setSearchValue('')}  className="cu-p crestink" src="/img/crestik1.svg" alt="crestik" />
					<input onChange={onChangeSearchInput} value={searchValue}  type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{renderItems()}
			</div>
		</div>
	</>
  )
}

export default Home
