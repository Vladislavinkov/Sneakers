import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

const arr = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/cross.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270', price: 8499, img: '/img/cross2.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 16499, img: '/img/cross3.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 7855, img: '/img/cross4.jpg',
	},
]

function App() {
  return (
    <div className="wrapper clear">
		<Drawer/>
		<Header/>
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Все кроссовки</h1>
				<div className="search-block d-flex">
					<img src="/img/VectorSearch.svg" alt="Search" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{arr.map((obj,i) => {
					return <Card key={i} name={obj.name} price={obj.price} img={obj.img}/>
				})}
			</div>
		</div>
	</div>
  );
}

export default App;
