import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
	const [items, setItems] = useState();

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) {
			setItems(res);
		}
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setItems(newData);
	};

	return [items, saveData];
}