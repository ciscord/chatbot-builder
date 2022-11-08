
const twoNums = (num) => (`0${num}`).slice(-2);

class FormatUtils {

	static formatDate(date = new Date()) {
		const year = date.getFullYear();
		const month = twoNums(date.getMonth() + 1);
		const day = twoNums(date.getDay());

		return `${day}/${month}/${year}`;
	}
}

export default FormatUtils;
export { FormatUtils };
