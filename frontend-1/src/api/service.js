import jwt_decode from "jwt-decode";

export const getUsersData = async () => {
  try {
    const getUsersDataURL = 'http://localhost:5000/api/v1/users';
    const response = await fetch(getUsersDataURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const postUserData = async (userData) => {
  try {
    const setUserDataURL = 'http://localhost:5000/api/v1/user';
    const response = await fetch(setUserDataURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error)
  }
}

export const loginUser = async (userData) => {

  try {
    const loginUrl = 'http://localhost:5000/api/v1/login';
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e)
  }
};