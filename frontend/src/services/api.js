import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000/api/news"; // Updated URL prefix

export const fetchNewsWithSentiment = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/fetch-news`, {
            params: { query },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error; // Let the component handle the error
    }
};