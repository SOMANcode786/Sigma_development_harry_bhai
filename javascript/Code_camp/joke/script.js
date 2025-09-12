let joke = async () => {
  try {
    let jokedata = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    // console.log("this",jokedata);
    let resp = await jokedata.json();
    console.log(resp);
    document.getElementById("loading-joke").innerHTML = resp.setup;
  } catch (error) {
    console.log("Through an error", error);
  }
};

document.getElementById("loadbtn").addEventListener("click", joke);
