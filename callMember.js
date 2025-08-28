import axios from "./axios";

export const getMembers = async () => {
 
  const response = await axios.get("/member");
  return response.data;
};

// InsertMember()
export const insertMember = async (memberData) => {
  try {
    const res = await axios.post("/member", memberData); //  ใช้ path ตรง ๆ
    return res.data;
  } catch (err) {
    throw err;
  }
};
