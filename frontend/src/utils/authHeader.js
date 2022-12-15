export default function authHeader() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken ) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
        console.log("didn't get token");
      return {};
    }
  }