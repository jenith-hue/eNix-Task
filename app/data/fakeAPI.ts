import { userList } from "../constants/constants";
export const fetchUsers = async () => {
    return userList;
};
  
export const fetchUserDetails = async (userId: number) => {
    const selectedUser = userList.filter((el) => el.id == userId)
    return {...selectedUser[0]};
};
 