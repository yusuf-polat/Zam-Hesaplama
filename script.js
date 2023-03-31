function tercihsecim() {
  var yon = document.getElementById("yon").value;
  if (yon == "X") {
    document.getElementById("li_normalfiyat").style.cssText = "display";
    document.getElementById("li_zamlifiyat").style.display = "none";
    document.getElementById("li_zamorani").style.cssText = "display";
  } else if (yon == "Z") {
    document.getElementById("li_normalfiyat").style.display = "none";
    document.getElementById("li_zamlifiyat").style.cssText = "display";
    document.getElementById("li_zamorani").style.cssText = "display";
  } else if (yon == "Y") {
    document.getElementById("li_normalfiyat").style.cssText = "display";
    document.getElementById("li_zamlifiyat").style.cssText = "display";
    document.getElementById("li_zamorani").style.display = "none";
  }
}
function formatTL(num) {
  let p = num.toFixed(2).split(".");
  return (
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
      }, "") +
    "," +
    p[1] +
    " TL"
  );
}
let uyarimsg = document.getElementById("uyarimsg");
let sonuc = document.getElementById("sonuc");
function hesapla() {
  let normalfiyat = parseFloat(document.getElementById("normalfiyat").value);
  let zamlifiyat = parseFloat(document.getElementById("zamlifiyat").value);
  let zamorani = parseFloat(document.getElementById("zamorani").value);
  var yon = document.getElementById("yon").value;

  //Zamlı Fiyat Ba
  if (yon == "X") {
    if (normalfiyat > 0) {
      if (zamorani > 0) {
        if (normalfiyat && zamorani) {
          uyarimsg.style.display = "none";
          sonuc.style.display = "block";
          let ZamTutari = normalfiyat * (zamorani / 100);
          let ZamliFiyatx = ZamTutari + normalfiyat;
          sonuc.innerHTML = `
<h3>Zamlı Fiyat Hesaplama Sonuçları</h3>
<hr>
<ul class="list-group mb-2">
<li class="list-group-item">Normal Fiyat: ${formatTL(normalfiyat)}</li>
<li class="list-group-item">Zam Tutarı: ${formatTL(ZamTutari)}</li>
<li class="list-group-item">Zamlı Fiyat: ${formatTL(ZamliFiyatx)}</li>
<li class="list-group-item">Zam Oranı: %${zamorani}</li>
</ul>

`;
        } else {
          uyarimsg.style.display = "block";
          uyarimsg.innerText = "Lütfen tüm alanları doldurun";
        }
      } else {
        uyarimsg.style.display = "block";
        uyarimsg.innerText = "Zam Oranı %0 dan büyük olmalı";
      }
    } else {
      uyarimsg.style.display = "block";
      uyarimsg.innerText = "Normal Fiyat 0 dan büyük olmalı";
    }
  }
  //Zamlı Fiyat Bi

  //Normal Fiyat Ba
  else if (yon == "Z") {
    if (zamlifiyat > 0) {
      if (zamorani > 0) {
        if (zamlifiyat && zamorani) {
          sonuc.style.display = "block";
          uyarimsg.style.display = "none";
          let normalfiyat = zamlifiyat / (1 + zamorani / 100);
          let ZamTutari = zamlifiyat - normalfiyat;

          sonuc.innerHTML = `
<h3>Normal Fiyat Hesaplama Sonuçları</h3>
<hr>
<ul class="list-group mb-2">
<li class="list-group-item">Normal Fiyat: ${formatTL(normalfiyat)}</li>
<li class="list-group-item">Zam Tutarı: ${formatTL(ZamTutari)}</li>
<li class="list-group-item">Zamlı Fiyat: ${formatTL(zamlifiyat)}</li>
<li class="list-group-item">Zam Oranı: %${zamorani}</li>
</ul>

`;
        } else {
          uyarimsg.style.display = "block";
          uyarimsg.innerText = "Lütfen tüm alanları doldurun";
        }
      } else {
        uyarimsg.style.display = "block";
        uyarimsg.innerText = "Zam Oranı %0 dan büyük olmalı";
      }
    } else {
      uyarimsg.style.display = "block";
      uyarimsg.innerText = "Zamlı Fiyat 0 dan büyük olmalı";
    }
  }
  //Normal Fiyat Bi

  //Zam Oranı Ba
  else if (yon == "Y") {
    if (normalfiyat > 0) {
      if (zamlifiyat > 0) {
        if (normalfiyat && zamlifiyat) {
          if (normalfiyat < zamlifiyat) {
            sonuc.style.display = "block";
            uyarimsg.style.display = "none";
            let ZamTutari = zamlifiyat - normalfiyat;
            let zamorani = (zamlifiyat / normalfiyat) * 100 - 100;
            sonuc.innerHTML = `
<h3>Zam Oranı Hesaplama Sonuçları</h3>
<hr>
<ul class="list-group mb-2">
<li class="list-group-item">Normal Fiyat: ${formatTL(normalfiyat)}</li>
<li class="list-group-item">Zam Tutarı: ${formatTL(ZamTutari)}</li>
<li class="list-group-item">Zamlı Fiyat: ${formatTL(zamlifiyat)}</li>
<li class="list-group-item">Zam Oranı: %${zamorani}</li>
</ul>

`;
          } else {
            uyarimsg.style.display = "block";
            uyarimsg.innerText =
              "Lütfen geçerli bir zamlı fiyat giriniz. Zamlı fiyat normal fiyattan büyük veya eşit olmalıdır.";
          }
        } else {
          uyarimsg.style.display = "block";
          uyarimsg.innerText = "Lütfen tüm alanları doldurun";
        }
      } else {
        uyarimsg.style.display = "block";
        uyarimsg.innerText = "Zamlı Fiyat 0 dan büyük olmalı";
      }
    } else {
      uyarimsg.style.display = "block";
      uyarimsg.innerText = "Normal Fiyat 0 dan büyük olmalı";
    }
  }
  //Zam Oranı Bi
}

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener("click", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });
})();
