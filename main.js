document.addEventListener("DOMContentLoaded", () => {
  const szamok = document.getElementById("szamok");
  const osszeg = document.getElementById("osszeg");
  let szam1 = getRandomnumber1(100)
  let szam2 = getRandomnumber1(100)


  document.getElementById("kuld").addEventListener("click", () => {
    if(osszeg.value == szam1 + szam2){
      document.body.style.backgroundColor = "green"
      alert("Ügyes")
    }else{
      document.body.style.backgroundColor = "red"
      alert("Nem ügyes")
    }
  })



  function getRandomnumber1(max) {
    return Math.floor(Math.random() * max);
  }
  
  function getRandomnumber2(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(szam1);
  console.log(szam2);

  szamok.innerHTML = szam1 + " + "+ szam2 + " = "
})