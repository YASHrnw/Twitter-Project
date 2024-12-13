import { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        dispatch(getMyProfile(res.data.user));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchMyProfile();
  });
};

export default useGetProfile;
