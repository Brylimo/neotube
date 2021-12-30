import Item from "../models/Item";

export const handleHome = async (req, res) => {
	try {
		const items = await Item.find({});
		console.log(items);
		return res.render("home", {title : "home", items});
	} catch(error) {
		console.log(error);
	}
};