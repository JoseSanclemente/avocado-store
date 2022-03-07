import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Home = () => {
	const [avocadoList, setAvocadoList] = useState([]);

	useEffect(() => {
		window
			.fetch('/api/avo')
			.then((response) => response.json())
			.then(({ data }) => setAvocadoList(data));
	});

	return (
		<div>
			<h1>Hola Mundo</h1>
			{avocadoList.map((item) => (
				<Link href={`/product/${item.id}`}>
					<a style={{ display: 'block' }}>{item.name}</a>
				</Link>
			))}
		</div>
	);
};

export default Home;
