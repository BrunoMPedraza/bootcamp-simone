const section = document.querySelector("section");
const solConf = 0;

const fade = () => setTimeout(() => (section.classList.toggle("fadeout")),1000);
window.addEventListener("load",fade);

const joke = () =>{
  const response= fetch("http://api.icndb.com/jokes/random");
  response.then(resp => {
    resp.json()
    .then(data => {
      console.log(data.value.joke);
      document.getElementById("pJoke").innerHTML = data.value.joke;
      return data.value.joke;
    });
  })
} 

const sendHttpRequest = (method,url,type) => {
  const promise = new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType=type;
    xhr.onload = () => {
      resolve(xhr.response);
      };
    xhr.onerror = () => {
      reject("An error has ocurred, too bad!");
      document.querySelector("section").style.background= "#FF0000";
    }
    xhr.send();
    });
    return promise;
};
const getData= () =>
{
  sendHttpRequest("GET","http://api.icndb.com/jokes/random","json")
  .then(responseData => {
    console.log(responseData);
  });
}
window.addEventListener("load",getData);