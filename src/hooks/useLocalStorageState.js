import { useState, useEffect } from 'react';

const useLocalStorageState = (keyName, defaultValue = null) => {
	const [ state, setState ] = useState(() => {
		try {
			const item = window.localStorage.getItem(keyName);

			return item ? JSON.parse(item) : defaultValue;
		} catch (err) {
			console.error(err);
			return defaultValue;
		}
	});

	useEffect(
		() => {
			if (state === null) {
				window.localStorage.removeItem(keyName);
			} else window.localStorage.setItem(keyName, JSON.stringify(state));
		},
		[ keyName, state ]
	);
	return [ state, setState ];
};

export default useLocalStorageState;
