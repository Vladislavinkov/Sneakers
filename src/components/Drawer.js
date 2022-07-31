import React from 'react'

const Drawer = () => {
  return (
	<>
		<div style={{display: 'none'}} className="overlay">
			<div className="drawer">
				<h2 className="mb-30 d-flex justify-between align-center">Корзина<img with={32} height={32} className="cu-p" src="/img/crestik1.svg" alt="crestik" /></h2>
				<div className="items">
					<div className="cartItem d-flex align-center">
						<div style={{backgroundImage: 'url(/img/cross.jpg)'}} className="cartItemImg"></div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="removeBtn" src="/img/crestik1.svg" alt="crestik" />
					</div>
					<div className="cartItem d-flex align-center">
						<div style={{backgroundImage: 'url(/img/cross.jpg)'}} className="cartItemImg"></div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="removeBtn" src="/img/crestik1.svg" alt="crestik" />
					</div>
				</div>
				<div className="blookFooter">
					<ul className="CarTotalBlock">
						<li className="d-flex">
							<span>Итого:</span>
							<div></div> 
							<b>21 498 руб. </b>
						</li>
						<li className="d-flex">
							<span>Налог 5%:</span> 
							<div></div> 
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className="greenButton">Оформить заказ<img src="/img/strelka.svg" alt="strealka" /></button>
				</div>
			</div>
		</div>
	</>
  )
}

export default Drawer
