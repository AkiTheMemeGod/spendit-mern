import {useState, useEffect} from 'react'
import AnimatedList from '../components/AnimatedList.jsx'
import axiosUtil from '../services/axios.js'
import toast from 'react-hot-toast';
import getUserIdFromToken from '../services/jwt_utils.js';
const HomePage = () => {
  const [Entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchEtnries = async () => {
      console.log(getUserIdFromToken());
      try {
        const res = await axiosUtil.entry.get(`?userId=${getUserIdFromToken()}`);
        console.log(res.data);
        setEntries(res.data.entries);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      }
    };
    fetchEtnries();
  }, []);
 

  return (
<AnimatedList
  items={Entries}
  // onItemSelect={(item, index) => console.log(item, index)}
  showGradients={true}
  enableArrowNavigation={true}
  displayScrollbar={false}
/>  )
}

export default HomePage