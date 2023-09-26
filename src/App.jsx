import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
	const [input, setInput] = useState({
		name: '',
		nim: '',
		email: ''
	});
	const [data, setData] = useState([
		{
			name: 'Cahyo Ade',
			nim: '21120120130123',
			email: 'cahyoade@students.undip.ac.id'
		},
		{
			name: 'daniel suberdo matanari',
			nim: '21120120140175',
			email: 'danielmatanari180502@gmail.com'
		},
		{
			name: 'Mukhamad Ferry Hendrawan',
			nim: '21120120140039',
			email: 'm.ferryhendrawan17@gmail.com'
		},
		{
			name: 'Helmi Bagus Wijanarko',
			nim: '21120119120009',
			email: 'helmibagus8@gmail.com'
		},
	]);

	function handleChange(e) {
		setInput(prev => {
			return {...prev, [e.target.name]: e.target.value}	
		})
	}

	function addEntry(){
		setData( prev => [...prev, input])
	}

	return (
		<div className='App'>
			<h1 style={{color: 'white'}}>Tugas Modul 2 Kel 36</h1>
			<div className='components'>
				{
					data.map((el, id) => <Card {...el} key={id} />)
				}
			</div>
			<form action="" onSubmit={e => e.preventDefault()} style={{display: 'flex', gap:'8px', marginTop: '24px'}}>
				<input type='text' placeholder="name" name='name' onChange={handleChange}/>
				<input type='text' placeholder="nim" name='nim' onChange={handleChange}/>
				<input type='text' placeholder="email" name='email' onChange={handleChange}/>
				<button onClick={addEntry} style={{border: '1px solid white'}}>Kirim</button>
			</form>
		</div>
	)
}

export default App
