import axios from "axios";

//563492ad6f91700001000001a62ba74b91fe48528bc000b80f62d821

export const getImages = async (searchTerm = 'programming') => await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: '563492ad6f91700001000001a62ba74b91fe48528bc000b80f62d821',
        },
});