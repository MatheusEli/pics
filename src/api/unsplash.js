import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID WFlFPOAVreB6WroKbaErZhFMyid1oJhlocHb41gubFQ'
    }
});