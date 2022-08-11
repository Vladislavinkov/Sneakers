import React from 'react'

const Info = ({title, desc, img, onClose}) => {
  return (
	<>
		<div className="overlay">
			<div className="drawerBox">
				<div className="wrap">
				<h2 className="mb-30 d-flex justify-between align-center">Корзина
				<img onClick={onClose} with={32} height={32} className="cu-p" src="/img/crestik1.svg" alt="close" /></h2>
				</div>
				<div className="boxClear">
					<img width={120} src={img} alt={title} />
					<div className="title">{title}</div>
					<div className="text">{desc}</div>
					<button onClick={onClose} className="buttonGreen">Вернуться назад<img with={12} height={12} src="/img/left.png" alt="strealka" /></button>
				</div>
			</div>
		</div>
	</>
  )
}

export default Info
