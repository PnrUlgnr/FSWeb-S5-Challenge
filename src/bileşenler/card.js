import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement("div");
  divCard.className = "card";

  const divHeadline = document.createElement("div");
  divHeadline.className = "headline";
  divHeadline.textContent = makale.anabaslik;
  divCard.append(divHeadline);

  const divAuthor = document.createElement("div");
  divAuthor.className = "author";
  divCard.append(divAuthor);

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  divAuthor.append(divImg);

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);
  divImg.append(img);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi;
  divAuthor.append(span);

  return divCard;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cardContainer = document.querySelector(secici);

  axios.get("http://localhost:5001/api/makaleler").then((res) => {
    for (let key in res.data.makaleler) {
      res.data.makaleler[key].forEach((element) => {
        cardContainer.append(Card(element));
      });
    }
  });
};
export { Card, cardEkleyici };
