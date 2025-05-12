let latnivalok= [
    {
      "nev":"Parlament Canberra",
      "leiras":"Nagy épületegyüttes, ahol Ausztrália parlamentje működik 1988 óta, tetején egy 81 méteres zászlórúddal.", 

      "kep_link":"https://www.aph.gov.au/Visit_Parliament/Things_to_Do/Take_in_some_history",
    },
  {
    "nev": "Sydney operaház",
    "leiras":"Unesco világörökség része. Az operaházat II. Erzsébet brit királynő 1973. október 20-án avatta fel, hatalmas tömeg jelenlétében. A megnyitót tűzijáték és Beethoven 9. szimfóniájának előadása követte, a ceremóniát a televízió közvetítette. ",
    "kep_link": "https://roadster.hu/uploads/2018/11/sydney_3-1200x800.jpg"
  
  },
  {
    "nev":"Uluru",
    "leiras": "Az UNESCO Világörökség részét képező Uluru, más néven Ayers Rock, egy hatalmas vörös homokkőszikla Ausztrália közepén. Az őslakosok számára szent hely, és a nap különböző szakaszaiban változó színei lenyűgöző látványt nyújtanak.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/04/utazaskatalogus-ausztralia-legszebb-helyei-uluru.jpg"
  },
  {
    "nev":"Melbourne",
    "leiras": "Az ország legnépesebb városa, amely több évben is elnyerte a világ legélhetőbb nagyvárosa címet. Melbourne Ausztrália művészeti központja, itt tartják a Nemzetközi Művészeti fesztivált.",
    "kep_link":"https://media.nomadicmatt.com/2023/melbournestay.jpeg"
  },
  {
    "nev":"MacDonnell-tó",
    "leiras":"Dél-Ausztráliában található különleges tó, amely két színű: egyik oldala kék, másik rózsaszín. A látványt egy különleges alga okozza, és a tó fentről nézve a leglenyűgözőbb.",
    "kep_link":"https://player.hu/uploads/2022/04/porsche-lake-macdonnell-6.jpg",
  },
  {
    "nev":"Aranypart",
    "leiras":"Ausztrália legismertebb tengerparti része, amely 75 km hosszan húzódik. A Surfer’s Paradise néven ismert partszakasz a szörfösök kedvelt helye.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/04/utazaskatalogus-ausztralia-legszebb-helyei-aranypart.jpg",
  },
  {
    "nev":"Kakadu Nemzeti Park",
    "leiras":"Ausztrália legnagyobb nemzeti parkja, amely UNESCO Világörökség része. Gazdag élővilága és őslakos sziklafestményei miatt különleges helyszín.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/04/utazaskatalogus-ausztralia-legszebb-helyei-kakadu.jpg",
  },
  {
    "nev":"Great Ocean Road",
    "leiras":"Ausztrál nemzeti örökség része.E rész legnagyobb látványossága a 12 Apostol, egy mészkő-oszlop csoport az óceánban. Sajnos néhány az erózió miatt már nem áll, de ikonikus része az útnak.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/04/utazaskatalogus-ausztralia-legszebb-helyei-apostolok.jpg",
  },
  {
    "nev":"Adelaide",
    "leiras":"Dél-Ausztrália nyugati részének központja, amelyet anno a fővárosnak szántak.",
    "kep_link":"https://upload.wikimedia.org/wikipedia/commons/9/9f/Art_Gallery_of_South_Australia%2C_North_Terrace%2C_Adelaide.jpg",
  },
  {
    "nev":"Pinnacles-sivatag",
    "leiras":"Különleges mészkőoszlopok, fotósok kedvelt helye.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/12/utazaskatalogus-ausztralia-legszebb-helyei-pinnacles-sivatag.jpg",
  },
  {
    "nev":"Karijini Nemzeti Park",
    "leiras":"Az egyik leglátogatottabb nemzeti park, ahol kanyonok és szurdokok sorát tudjuk felfedezni.",
    "kep_link":"https://utazaskatalogus.hu/wp-content/uploads/2023/04/utazaskatalogus-ausztralia-legszebb-helyei-karijini.jpg",
  }
  
]
  
let szoveg=`
<div id="lapozo" class="carousel slide">
        <div class="carousel-inner">
`
for (let i = 0; i<latnivalok.length; i++) {
    if (i == 0) {
        szoveg+=`<div class="carousel-item active">`
    }
    else {
        szoveg+=`<div class="carousel-item">`
    }
            
    szoveg +=`<img class="d-block w-100" src="${latnivalok[i].kep_link}">`
    szoveg += `<div class="carousel-caption d-none d-md-block">
        <h5>${latnivalok[i].nev}</h5>
        <p>${latnivalok[i].leiras}</p>
      </div>`
    szoveg+=`</div>`     
}
szoveg+=`<button class="carousel-control-prev" type="button" data-bs-target="#lapozo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#lapozo" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>`
document.getElementById("lapozok").innerHTML=szoveg
