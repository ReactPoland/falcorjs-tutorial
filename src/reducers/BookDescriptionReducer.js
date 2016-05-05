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

const descriptionReducer = (state = defaultDescriptions, action) => {
	switch (action.type) {
		case 'RETURN_ALL_DESCRIPTIONS':
			return Object.assign({}, state);
		default:
			return state;
	}
}

export default descriptionReducer