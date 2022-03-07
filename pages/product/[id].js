import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductItem = () => {
	const [avocado, setAvocado] = useState({});
	const router = useRouter();
	const url = `/api/avo/${router.query.id}`;

	useEffect(() => {
		window
			.fetch(url)
			.then((response) => response.json())
			.then((item) => {
				if (!item) {
					return;
				}

				setAvocado(item);
			});
	});

	return (
		<div>
			<nav>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</nav>
			<h2>{avocado.name}</h2>
			<img src={avocado.image} />
		</div>
	);
};

export default ProductItem;
