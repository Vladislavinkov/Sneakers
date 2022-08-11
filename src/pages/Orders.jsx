import React from 'react';
import axios from 'axios';
import AppContext from '../context';
import Card from "../components/Card/Card";

const Orders = () => {
	const {onAddFavorite, onAddToCart} = React.useContext(AppContext);
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			try{
				const {data} = await axios.get('https://62ea11e801787ec712208230.mockapi.io/orders');
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
				setLoading(false);
			}catch(error){
				alert('The mistake for request orders')
			}
		})();
	}, []);

  return (
	<>
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Мои заказы</h1>
			</div>
			<div className="d-flex flex-wrap">
			{(isLoading ? [...Array(4)] : orders).map((item,i) => (  
					 <Card
						key={i}
						loading={isLoading} 
						{...item}/> 
				))}
			</div>
		</div>
	</>
  )
}


export default Orders
