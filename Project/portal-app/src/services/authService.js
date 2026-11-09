const API_URL = "http://localhost:3000";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error("Failed to signup");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

export const login = async (email, password) => {
  try {
    const users = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
    const usersData = await users.json();
    if (usersData.length>0) {
     return usersData[0];
    }   
    throw new Error("Invalid email or password");
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}
  
export const logout = () => {
  localStorage.removeItem("user");
}
 