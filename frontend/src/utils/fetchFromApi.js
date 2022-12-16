export async function sendPostRequest(
    url,
    bodyData
){
    const accessToken = localStorage.getItem('accessToken');

    const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            'Authorization': 'Bearer ' + accessToken , 
            'Content-Type': 'application/json'
        }
      });
      const respText = await resp.text();
      const respJSON = JSON.parse(respText);
      if (resp.status !== 200) {
        throw respJSON;
      } else return respJSON;
}