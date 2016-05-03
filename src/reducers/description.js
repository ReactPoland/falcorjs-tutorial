const defaultDescriptions = {
	"987654": {
		descriptionTitle: "First title",
		descriptionContent: "Our description content"
	},
	"123456": {
		descriptionTitle: "Second title",
		descriptionContent: "Another description content"
	}
};

/*There is no action passed to reducer at the moment , need to create it*/

const descriptionReducer = (state = defaultDescriptions, action) => {
	switch (action.type) {
		case 'RETURN_ALL_DESCRIPTIONS':
			return Object.assign({}, state);
		default:
			return state;
	}
}

export default descriptionReducer