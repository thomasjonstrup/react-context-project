import './App.css';
import { createStoreContext } from './context/createStoreContext';

const { Provider, useStore } = createStoreContext({
	first: '',
	last: '',
});

const Content = () => {
	const [fieldValue, setStore] = useStore((store) => store['first']);

	return (
		<>
			<p>{fieldValue}</p>
			<input
				value={fieldValue}
				onChange={(e) => setStore({ ['first']: e.target.value })}
			/>
		</>
	);
};

const ContentLast = () => {
	const [fieldValue, setStore] = useStore((store) => store['last']);

	return (
		<>
			<p>{fieldValue}</p>
			<input
				value={fieldValue}
				onChange={(e) => setStore({ ['last']: e.target.value })}
			/>
		</>
	);
};

const Buttons = () => {
	const [fieldValues, setStore] = useStore((store) => store);

	return (
		<>
			<button
				onClick={() => {
					console.log(fieldValues);
				}}
			>
				Save
			</button>
		</>
	);
};

function App() {
	return (
		<Provider>
			<div className='container'>
				<h1>App</h1>
				<Content />
				<ContentLast />
				<Buttons />
			</div>
		</Provider>
	);
}

export default App;
