let elovilag=[
{
    "nev":"Kenguru",
    "kep":"https://ma7media.storage.googleapis.com/sites/default/files/styles/freeform_large_9_2x/s3/2024-06/kengurutamadas.jpg?itok=O1pxTUiv"

},
{
    "nev": "Koala",
    "kep":"https://www.wwf.org.uk/sites/default/files/styles/max_650x650/public/2022-05/_WW236934.jpg?itok=JlG-1l9V",
},
{
    "nev": "Dingó",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/9/98/Dingo_walking.jpg",
},

{
    "nev":"Kacsacsőrű emlős " ,
    "kep":"https://ng.24.hu/uploads/2024/08/oana-inat.jpg",
},

{
    "nev": "Mézrablóerszényes",
    "kep":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9eilkWh6IvvonpH23qE41MuKS512Ikpfd65oee6zUjyAvC15EaL6rwBB4LTDvuQWbA8_EbbADaiNvHlVoeLB2yA",
},

{
    "nev": "Vombat" ,
    "kep":"https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2022/11/shutterstock_1125465338.jpg?w=1000&ssl=1",
},

{
    "nev": "Erszényes ördög",
    "kep":"https://vm-magazin.hu/app/uploads/2022/06/david-clode-XMnQnYND9JU-unsplash.jpg",
},

{
    "nev": "Erszényeshangyász ",
    "kep":"https://ng.24.hu/uploads/2024/01/NumbatNov04.jpg",
},

{
    "nev": "Kacagójancsi ",
    "kep":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVszwj80XKBvJrTjrrkz_eSYv1pRl87Ce8hIW20MWZsBWOKLIfgTi42oPW7wLlg3apTMxeoRI6SPnXA78TdeaaaA",
},

{
    "nev": "Homoki ásótyúk",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Leipoa_ocellata.jpg/1280px-Leipoa_ocellata.jpg",
},
{
    "nev": "Fekete hattyú ",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/6/60/Black_Swans.jpg",
},
{
    "nev": "Tüskés ördög ",
    "kep":"https://www.pbs.org/wnet/nature/files/2014/07/5848610094_634a7b8d66_o.jpg",
},
{
    "nev": "Emu",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/9/9d/Emu_1_-_Tidbinbilla.jpg",
},
{
    "nev": "Korallszirtihal",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Amblyglyphidodon_curacao.jpg/1280px-Amblyglyphidodon_curacao.jpg",
},
{
    "nev": "Közönséges rókakuzu",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/b/b9/Brushtail_possum.jpg",
},
{
    "nev": "Rozsdástorkú mézevő",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Conopophila_rufogularis_-_Rufous-throated_Honeyeater.jpg/1920px-Conopophila_rufogularis_-_Rufous-throated_Honeyeater.jpg",
},
{
    "nev": "Bordás krokodil ",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/SaltwaterCrocodile%28%27Maximo%27%29.jpg/1280px-SaltwaterCrocodile%28%27Maximo%27%29.jpg",

},
{
    "nev": "Szalagos varánusz ",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Varanus_salvator_%28Dierenpark_Emmen%29.jpg/1280px-Varanus_salvator_%28Dierenpark_Emmen%29.jpg",
},
{
  "nev":"Akácia",
  "kep":"https://www.flawildflowers.org/wp-content/uploads/2020/12/Vachellia_farnesiana-JennyEvansCCBY-NC2.0.jpg",  
},
{
    "nev":"Kaurifenyő ",
    "kep":"https://mebelib.ru/img/wood-tree/kauri/east-indian/agathis-dammara-02.jpg",  
},
{
    "nev":"Eukaliptusz ",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg/330px-Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg",  
},
{
    "nev":"Sárkányfenyő",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/1/18/Wollemia_nobilis_fg02.JPG",  
},
{
    "nev":"Mitchell-fű",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Astrebla_pectinata.jpg/1024px-Astrebla_pectinata.jpg",  
},
{
    "nev":"Zsákos csillaggomba",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/b/b8/Geastrum_saccatum.jpg",  
},
{
    "nev":"Légyölő galóca",
    "kep":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amanita_muscaria_Marriott_Falls_1.jpg/1920px-Amanita_muscaria_Marriott_Falls_1.jpg",  
  },
]
let szoveg=`
<div id="lapozo" class="carousel slide">
        <div class="carousel-inner">
`
for (let i = 0; i<elovilag.length; i++) {
    if (i == 0) {
        szoveg+=`<div class="carousel-item active">`
    }
    else {
        szoveg+=`<div class="carousel-item">`
    }
            
    szoveg +=`<img class="d-block w-100" src="${elovilag[i].kep}">`
    szoveg += `<div class="carousel-caption d-none d-md-block">
        <h5>${elovilag[i].nev}</h5>
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
