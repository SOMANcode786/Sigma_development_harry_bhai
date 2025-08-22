function createCard(title,Cname,Views,monthsOld,duration,thumbnail) {
let html = ` <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="img">
             <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${Cname}.${Views} views.${monthsOld} months ago </p>
        </div>
        </div>`;

    document.querySelector(".container").innerHTML += html;
}


createCard(
  "Installing Vs Code & How Webiste Work | Sigma Web Course-Tutorial#2",
  "SomanWithCode",
  "72kviews",
  "2",
  "12:00",
  "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6ouPFLR2i6ngfU4nkqcHSdWgLiQ"
);

createCard(
  "Installing Vs Code & How Webiste Work | Sigma Web Course-Tutorial#1",
  "SomanWithCode",
  "72kviews",
  "2",
  "12:00",
  "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6ouPFLR2i6ngfU4nkqcHSdWgLiQ"
); 

