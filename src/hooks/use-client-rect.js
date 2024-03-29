import { useCallback, useState } from "react";

export const useClientRect = () => {
	const [rect, setRect] = useState({ width: 0, height: 0 });
	const ref = useCallback((node) => {
		if (node !== null) {
			const { width, height } = node.getBoundingClientRect();
			setRect({ width, height });
		}
	}, []);
	return [rect, ref];
};
