
function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

export const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));
export const svg = importAll(require.context('../assets/svg', false, /\.(png|jpe?g|svg)$/));
