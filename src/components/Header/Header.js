import React from 'react'
import './Header.scss';

const Header = () => {
  return (
	<>
		<header className="d-flex justify-between align-center p-40">
			<div className='d-flex align-center'>
				<img with={40} height={40} src="/img/logo.png"/>
				<div>
					<h3 className="text-uppercase">React Sneeakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30">
					<img with={18} height={18} src="/img/corsina.svg"/>
					<span>1205 руб.</span>
				</li>
				<li>
					<img with={18} height={18} src="/img/person.svg"/>
				</li>
			</ul>
		</header>
	</>
  )
}

export default Header
