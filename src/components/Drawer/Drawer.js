import React from 'react';
import axios from 'axios';
import Info from '../Info/Info';
import'./Drawer.scss';
import {useCart} from '../../hooks/useCart';
// import AppContext from '../../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({onClose,onRemove, items = []}) => {
	const {cartItems, setCartItems, totalPrice} = useCart()
	// const {cartItems, setCartItems} = React.useContext(AppContext)
	const [orderId, setOrderId] = React.useState(null);
	const [isComplete, setIsComplete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	// const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

	const onClickOrder = async() => {
		try{
			setIsLoading(true);
			const {data} = await axios.post('https://62ea11e801787ec712208230.mockapi.io/orders', {
				items: cartItems,
			});
			setOrderId(data.id);
			setIsComplete(true);
			setCartItems([]);

			for(let i = 0; i < cartItems.length; i++){
				const item  = cartItems[i];
				await axios.delete('/cart/'+ item.id);
				await delay(1000);
			}

		}catch(error){
			console.log('не удалось сделать заказ');
		}
		setIsLoading(false);
	}


  return (
	<>{
		items.length > 0 ? 
		<div className="overlay">
			<div className="drawer">
				<h2 className="mb-30 d-flex justify-between align-center">Корзина
				<img onClick={onClose} with={32} height={32} className="cu-p" src="/img/crestik1.svg" alt="close" /></h2>
				<div className="items">
					{
						items.map((item,i) => (
						<div key={i} className="cartItem d-flex align-center">
							<div style={{backgroundImage: `url(${item.img})`}} className="cartItemImg"></div>
							<div className="mr-20 flex">
								<p className="mb-5">{item.name}</p>
								<b>{item.price}</b>
							</div>
							<img  onClick={() => onRemove(item.id)}  className="removeBtn" src="/img/crestik1.svg" alt="crestik" />
						</div>
						))
					}
				</div>
				<div className="blookFooter">
					<ul className="CarTotalBlock">
						<li className="d-flex">
							<span>Итого:</span>
							<div></div> 
							<b>{totalPrice} руб. </b>
						</li>
						<li className="d-flex">
							<span>Налог 5%:</span> 
							<div></div> 
							<b>{Math.floor(totalPrice / 100 * 5)} руб.</b>
						</li>
					</ul>
					<button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ<img src="/img/strelka.svg" alt="strealka" /></button>
				</div>
			</div>
		</div>
		:
		<Info 
			onClose={onClose} 
			title={isComplete ? 'Заказ оформлен!' : 'Корзина пустая'} 
			desc={isComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} 
			img={isComplete ? "/img/ready.jpg" : "/img/box.png"}/>
	  }
		
		
	</>
  )
}

export default Drawer
