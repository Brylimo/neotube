import Item from "../models/Item";

export const handleItem = async (req, res) => {
	const id = req.params.id;
	const item = await Item.findById(id);
	return res.render("item", {title : item.title, item});
};

export const getUpload = (req, res) => res.render("upload", {title: "upload"});
export const postUpload = async (req, res) => {
	const { title, description, hashtags } = req.body;
	const item = new Item({
		title,
		description,
		hashtags: hashtags.split(",").map((word) => `#${word}`)
	});
	const newItem = await item.save();
	res.redirect(`${newItem._id}`);
};