import store from "./store";
export const addComment = (name, comment) => {
    console.log("name "+name+"-commet-"+comment);
    const addCommentary = [...store.getState().commentary, {
		id : store.getState().commentary.length + 1,
		name: name,
		comment: comment
	}];

	store.setState({
		commentary: addCommentary
	})
};