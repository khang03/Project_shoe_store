import axios from "axios";

const Authentication = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get('http://localhost:8080/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Authozied');
      
      return response.data;
      
    } catch (error) {
      console.log('Unauthorized');
      return 0;
    }
};


export default Authentication;