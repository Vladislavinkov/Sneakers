import React from 'react'

const Card = () => {
  return (
	<>
		<div className="cart">
			<div className="favorite"></div>
			<img with={133} height={112} src="/img/cross.jpg" alt="cross" />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>12 999 руб.</b>
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
