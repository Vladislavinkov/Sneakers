import React from 'react'
import './Card.scss';

const Card = (props) => {
	const {img, name, price} = props;
  return (
	<>
		<div className="cart">
			<div className="favorite"></div>
			<img with={133} height={112} src={img} alt={name} />
			<h5>{name}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button className="greenButton">
					<img width={11} height11 src="/img/crestik.svg" alt="plus" />
				</button>
			</div>
		</div>
	</>
  )
}

export default Card
