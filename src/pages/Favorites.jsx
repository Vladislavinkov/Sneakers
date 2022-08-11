import React from 'react';
import AppContext from '../context';
import Card from "../components/Card/Card";

const Favorites = ({onAddFavorite}) => {
	const {favorites} = React.useContext(AppContext);
	console.log(AppContext);

  return (
	<>
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				{/* <h1></h1> */}
			</div>
			<div className="d-flex flex-wrap">
			{favorites.map((item,i) => (  
					 <Card
					 	key={i} 
						isFavorit={true}
						onFavorite={onAddFavorite}
						{...item}/> 
				))}
			</div>
		</div>
	</>
  )
}


export default Favorites
