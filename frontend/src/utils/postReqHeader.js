export default function postReqHeader() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken ) {
      return { Authorization: 'Bearer ' + accessToken , 'Content-Type': 'application/json'};
    } else {
        console.log("didn't get token");
      return {};
    }
  }