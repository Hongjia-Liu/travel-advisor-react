import axios from "axios";

const URL =
	"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
	params: {
		bl_latitude: "11.847676",
		tr_latitude: "12.838442",
		bl_longitude: "109.095887",
		tr_longitude: "109.149359",
	},
	headers: {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
<<<<<<< HEAD
		"x-rapidapi-key": "",
=======
		"x-rapidapi-key": "1712bf013amsh39d650dec9aa880p12ae2fjsndcb1242bde32",
>>>>>>> b072da3be111a0e6c95d76bd7b152c9921964947
	},
};

export const getPlacesData = async () => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, options);

		return data;
	} catch (error) {
		console.log(error);
	}
};
