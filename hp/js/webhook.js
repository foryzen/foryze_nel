const url = "https://discord.com/api/webhooks/936340085295689749/ALhXoIGAIf2gk57Us0CV3jCgR9ZkLLaUA6UXqjCUJ4EzCrS8_zReCeEldVgoIsnAqhCS";
const msg = "Access - HP";
const message = { username: "Access Chacker", content: msg };

var script = document.createElement('script');
script.src='https://ipinfo.io?callback=callback'
document.head.appendChild(script)

function callback(data) {
  if(data.ip==="106.154.133.168"){
    //
  }else{
    postData(url, message)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    function postData(url = ``, data = {}) {
      return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
            body: JSON.stringify(data),
      }).then((response) => response.text());
    }
  }
}