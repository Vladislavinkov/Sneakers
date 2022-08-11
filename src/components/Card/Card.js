import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';
import './Card.scss';

const Card = ({img, id, name, price, onFavorite, onPlus, isFavorit = false, loading = false}) => {

	const {isItemAdded} = React.useContext(AppContext);
	const [isLike, setLike] = React.useState(isFavorit);
	const obj = {id, parentId: id, name, img, price};



	const handle = () => {
		onPlus(obj);
	}

	const likeActive = () => {
		onFavorite(obj);
		setLike(!isLike);
	}

  return (
	<>
		<div className="cart">
			{loading ? <ContentLoader 
					speed={2}
					width={210}
					height={260}
					viewBox="0 0 210 260"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="0" y="1" rx="2" ry="2" width="150" height="91" /> 
					<rect x="96" y="140" rx="0" ry="0" width="1" height="4" /> 
					<rect x="96" y="145" rx="0" ry="0" width="0" height="1" /> 
					<rect x="0" y="104" rx="0" ry="0" width="150" height="15" /> 
					<rect x="0" y="131" rx="0" ry="0" width="93" height="15" /> 
					<rect x="0" y="164" rx="0" ry="0" width="80" height="24" /> 
					<rect x="123" y="154" rx="8" ry="8" width="32" height="32" /> 
					<rect x="131" y="173" rx="0" ry="0" width="1" height="21" />
				</ContentLoader> : 
					<>
						<div onClick={onPlus} className="favorite"></div>
						{onFavorite && <img onClick={likeActive} src={isLike ? "/img/heart-like.svg" : '/img/heart.svg'} className='heart' alt="heart" />}
						<img with={133} height={112} src={img} alt={name} />
						<h5>{name}</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена:</span>
								<b>{price} руб.</b>
							</div>
							<button>
								{onPlus && <img  onClick={handle}  src={isItemAdded(id) ? "/img/green.svg" : '/img/crestik1.svg'} alt="plus" />}
							</button>
						</div>
					</>
			}
			
		</div>
	</>
  )
}

export default Card
