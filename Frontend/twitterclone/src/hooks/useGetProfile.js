import { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";

const useGetProfile = (id) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        console.log("Profile Data:", res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [id]);
};

export default useGetProfile;
