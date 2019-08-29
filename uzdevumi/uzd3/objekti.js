// Izveidot funkciju, kura pievienos jaunu atslēgu ar vērtību objektam
// Izveidot funkciju, kura dzēsīs atslēgu (un tās vērtību) no objekta
// Izveidot funkciju, kura izdrukās visas objekta atslēgas un to vērtības

var objekts = {
    vards: 'Ketija',
    uzvards: 'Krinekele'
};

function render() {                               // Masīva printēšanas funkcija
    let div = document.getElementById("rezultats");    // Iegūst HTML elementu ar id 'result' un pievieno to mainīgajam
    div.innerHTML = JSON.stringify(objekts);         // Atrastajā elementā ievieto masīvu
  }

function pievienot() {                                                  
    let atslega = document.getElementById("pievienot_atslega").value;
    let vertiba = document.getElementById("pievienot_vertiba").value;        
    objekts[atslega] = vertiba

render();                                           
}  

function nonemt() {
    let atslega = document.getElementById("pievienot_atslega").value;
    delete objekts[atslega]
render();
}
                                                                