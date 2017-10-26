import store from "./store";
export const addComment = (name, comment) => {
    // console.log("name "+name+"-commet-"+comment);
    if(name != "" && comment != ""){
    const addCommentary = [...store.getState().commentary, {
		id : store.getState().commentary.length + 1,
		name: name,
        comment: comment,
        abusive : false
	}];

	store.setState({
		commentary: addCommentary
    })
}
console.log('no agrego nada');
};
export const removeComment = (index) => {
	const addCommentary =  store.getState().commentary.filter( (item, idx) => idx != index );

	store.setState({
		commentary: addCommentary
	})
}
export const reportAbusive = (index) => {
    const cloneList = [...store.getState().commentary];
	cloneList[index].abusive = (cloneList[index].abusive)? false : true;

	store.setState({
		commentary: cloneList
	})
}