# Rapport d’optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 11 mai 2024, 14:38:34](https://pagespeed.web.dev/analysis/https-keven-tim-momo-com/yn6mdgjuta?form_factor=mobile)
## Problème #1
### l'élément le plus large de ma page d'affichage prend 21.4s à charger.
### Action concrète : Je vais compresser mes images png pour réduire leur taille avec action photoshop. Si ça ne fonctionne pas, je vais les changer de format pour des images WebP. De plus, je vais minimiser mon javascript pour réduire la taille de mes textes.

## Problème #2
### Il y a des ressources qui bloquent le rendu de ma page d'affichage.
### Action concrète : Selon lighthouse si j'ai un url qui à du code qui n'est pas critique, je peut le conserver et marquer l'url avec un defer pour éliminer le code non critique je vais donc appliquer defer à trois balise script qui ont un url menant à la librairie gsap de base, la section scrollTrigger et motionPath respectivement, car ils sont la cause de la majorité du code inutilisé.

## Problème #3
### mon javascript prend trop de temps à être analysé.
### Action concrètre : je vais éliminer les lignes vides et compresser mon javascript, de mon fichier scrip.js, pour avoir le moins de lignes possible.

