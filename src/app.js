window.onload = function() {
  //write your code here
  let pronoun = ["el", "nuestro"];
  let adj = ["fantastico", "gran", "glorioso"];
  let noun = ["silbon", "jugador"];
  let point = [".com", ".net", ".ve", ".es"];

  let pagesNames = () => {
    for (let pronouns of pronoun) {
      for (let adjs of adj) {
        for (let nouns of noun) {
          for (let points of point) {
            console.log(pronouns + adjs + nouns + points);
          }
        }
      }
    }
  };
  pagesNames();
};
