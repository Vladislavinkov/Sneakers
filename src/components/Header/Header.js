import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from '../../hooks/useCart';
// import AppContext from '../../context';
import './Header.scss';

const Header = (props) => {
	// const {cartItems} = React.useContext(AppContext);
	const {totalPrice} = useCart()
	// const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

	const {onClickCart} = props;
  return (
	<>
		<header className="d-flex justify-between align-center p-40">
			<Link exact to='/'>
			<div className='d-flex align-center'>
				<img with={40} height={40} src="/img/logo.png"/>
				<div>
					<h3 className="text-uppercase">React Sneeakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			</Link>
			
			<ul className="d-flex">
				<li onClick={onClickCart} className="mr-30 cu-p">
					<img with={18} height={18} src="/img/corsina.svg" alt="corsina"/>
					<span>{totalPrice} руб.</span>
				</li>
				<li className="mr-30 cu-p">
					<Link exact to="/favorites">
						<img with={18} height={18} src="/img/HeadHeart.png" alt="favorites"/>
					</Link>
				</li>
				<li>
					<Link exact to="/orders">
						<img with={18} height={18} src="/img/person.svg" alt="person"/>
					</Link>
				</li>
			</ul>
		</header>
	</>
  )
}

export default Header
