const giftBox = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png",
];

const hidden = [
  "https://media2.giphy.com/media/kdFz3NTptKO8cZbBEe/giphy.gif?cid=6c09b952k68n97rfpjvdvyc1p3zgfmrqowh25unno6llibtb&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/3o6ZtmwVlQvOH3Ah0c/source.gif",
  "https://media1.giphy.com/media/hkx4RbjcF0NJ6/giphy.gif?cid=6c09b9521t6x8rd206uihf4ddyxpkneysy8dv35yrd4tcy8k&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/GNKdNRLVr7mecY9WFu/200w.gif?cid=6c09b9523vu66kigb4u1vhbplx2j8pad06lwib0r4y45k24u&ep=v1_gifs_search&rid=200w.gif&ct=g",
  "https://media4.giphy.com/media/gKBj2v7GKFlIbXJArk/giphy.gif?cid=6c09b952dih0s339m09rrgkva6apl0n5u6ax6449hlmdupeu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
];

function openPresent() {
  const count = document.createElement("h1");
  count.id = "count";

  const imgDiv = document.createElement("div");
  imgDiv.id = "images";

  const element = document.getElementById("presents");
  element.appendChild(count);
  element.appendChild(imgDiv);
  
  const imgBox = document.getElementById("images");
  imgBox.style
    = `justify-content: center;
       display: flex;
       gap: 30px;
       `
  ;
  
  const add = document.createTextNode("Presents that have already been open= " + 0);
  count.appendChild(add);

  for (let c = 0; c < giftBox.length; c++) {
    let d = hidden[c] === undefined ? c % hidden.length : c;

    const img = document.createElement("img");
    img.height = "100px";
    img.setAttribute("src", giftBox[c]);
    img.className = "unclicked";
    img.onclick = function () {
      img.className = "clicked";
      img.setAttribute("src", hidden[d]);
      
    const update = document.getElementsByClassName("clicked").length;
    document.getElementById("count").innerHTML = `
      <p>
      Presents that have already been open= ${update}
      </p>`;

    if (update == giftBox.length) {
      document.getElementById("title").innerHTML = `
        <p style=" font-family: monospace; 
        text-align: center;">
          Enjoy your presents!
        </p>`;
      }
    };
    imgBox.appendChild(img);
  }
}

window.onLoad = openPresent();