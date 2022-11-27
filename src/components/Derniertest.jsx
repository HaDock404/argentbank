//import User from "../pages/User"

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  ;
  

export default function Derniertest(response) {
    
    if (response.data.status === 200) {
        console.log("second POST: ok")
        console.log(response.data.body.firstName)
        asyncCall()
        //User(response.data.body.firstName)
        //window.location.href = '/user';
        
    } else {
        console.log("error")
    }
}

//stocker dans le local storage le token d'identification, si pas disponible refaire redirection vers le sign in, et en cas d'erreur de la méthode post