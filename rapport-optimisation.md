# Rapport d’optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 11 mai 2024, 14:38:34](https://pagespeed.web.dev/analysis/https-keven-tim-momo-com/yn6mdgjuta?form_factor=mobile)
## Problème #1
### l'élément le plus large de ma page d'affichage prend 21.4s à charger.
### Action concrète : Je vais compresser mes images png pour réduire leur taille avec le site tinypng.com. Si ça ne fonctionne pas, je vais les changer de format pour des images WebP. De plus, je vais minimiser la taille de mon h3 qui semble avoir le plus de contenue selon le diagnostique de pagespeed insighs.
### Résultats: mes images png sont deux fois moins lourde en moyenne après la compression su tinypng.com. cela devrait réduire mon temps de chargement de page lors de mon prochain rapport.

## Problème #2
### Il y a des ressources qui bloquent le rendu de ma page d'affichage.
### Action concrète : Selon lighthouse si j'ai un url qui à du code qui n'est pas critique, je peut le conserver et marquer l'url avec un defer pour éliminer le code non critique je vais donc appliquer defer à trois balise script qui ont un url menant à la librairie gsap de base, la section scrollTrigger et motionPath respectivement, car ils sont la cause de la majorité du code inutilisé.
### Résultats: En ajoutant le defer avec succès à mes balises contenant les url de gsap, scrollTrigger et motionPath, les ressources seront chargé de façon plus efficae ce qui devrait accéléré le chargement de la page. 

## Problème #3
### mon javascript prend trop de temps à être analysé.
### Action concrètre : je vais éliminer les lignes vides et compresser mon javascript, de mon fichier scrip.js avec l'aide du site: [jscompress.com](https://jscompress.com), pour avoir le moins de lignes possible. Je ferai de même pour mon css avec le site: [csscompressor.com](https://csscompressor.com) par bonne pratique.
### Résultats: J'ai éliminé tout les espace et vide de mon javascript et de mon css en utilisant les sites mentioné dans les action concrète du problème #3. Cela devrait amoidrire le temps d'exécution de mon fichier scrip.js et style.css respectivement.

