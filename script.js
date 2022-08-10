const bookliste = document.querySelector('.book-list');
const bookform = document.querySelector('.book-form');
const container = document.querySelector('.container')
class Livre {
    constructor(Titre,Auteur,Annee){
        this.Titre =Titre;
        this.Auteur =Auteur;
        this.Annee =Annee;
    }

    ajouterLivreListe(livre){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${livre.Titre}</td>
                        <td>${livre.Auteur}</td>
                        <td>${livre.Annee}</td>
                        <td><button class="boutonsupprimer">supprimer</button></td>`;
        bookliste.appendChild(row);
    }
    clearform() {
        document.getElementById('titre').value="";
        document.getElementById('auteur').value="";
        document.getElementById('annee').value="";
       
    }

    messageAlerte(message,className){
        const divalerte = document.createElement('div');
        divalerte.className = `alert ${className}`;
        divalerte.appendChild(document.createTextNode(message));
        container.insertBefore(divalerte,bookform);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);
    }
}
class InterfaceUtile extends Livre{
    supprimerlivre(target){
        if(target.className === "boutonsupprimer"){
            target.parentElement.parentElement.remove();
        }
    }
}

bookform.addEventListener('submit',(e)=>{
   e.preventDefault();
   const titre = document.getElementById('titre').value;
   const auteur = document.getElementById('auteur').value;
   const annee = document.getElementById('annee').value;
   const livre = new Livre(titre,auteur,annee);
   if(titre==="" || annee==="" || auteur === ""){
    livre.messageAlerte('Attention il y a des champ vide !','error');
   }else{
    livre.ajouterLivreListe(livre);
    livre.clearform();
    livre.messageAlerte('Un nouveau livre a été ajouter!','succes');
   }
  
} )

bookliste.addEventListener('click',(e)=>{
    const ui = new InterfaceUtile();
    ui.supprimerlivre(e.target);
    ui.messageAlerte('Le livre a été supprimer','delete');
})