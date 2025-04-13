import { useState } from "react";
import _ from "lodash";


const LodashInReact = () => {
	const [items, setItems] = useState([4, 2, 4, 3, 2, 1, 5]);
	const [uniqueItems, setUniqueItems] = useState([]);
	const [sortedItems, setSortedItems] = useState([]);

	function handleRemoveDuplicates() {
		const unique = _.uniq(items);
		setUniqueItems(unique);
	};

	function handleSortItems() {
		const sorted = _.sortBy(items);
		setSortedItems(sorted);
	};

	return (
		<div>
			<h3>Использование Lodash в React для манипуляции данными</h3>
			<p>Оригинальный массив: {JSON.stringify(items)}</p>
			<button onClick={handleRemoveDuplicates}>Удалить дубликаты</button>
			<p>Уникальные элементы: {JSON.stringify(uniqueItems)}</p>
			<button onClick={handleSortItems}>Отсортировать элементы</button>
			<p>Отсортированные элементы: {JSON.stringify(sortedItems)}</p>
		</div>
	);
}

export default LodashInReact;
