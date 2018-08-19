# Ajax1
exo Ajax

Ce chapitre va aborder un sujet qui fait souvent peur aux programmeurs Web : AJAX. Vous allez voir à quel point jQuery facilite les échanges de données AJAX et il y a fort à parier que vous utiliserez sans aucune appréhension tout ce qui sera écrit dans ce chapitre pour obtenir des pages Web dynamiques, vraiment réactives et qui soulageront dans de grandes mesures les échanges avec le serveur.

Qu'est-ce qu'AJAX ?
Lorsque vous naviguez de page en page sur un site Web traditionnel (entendez par là non-AJAX), les actions de l'internaute se traduisent par les actions suivantes :

Envoi d'une requête au serveur afin d'obtenir une nouvelle page.

Calcul de la nouvelle page par le serveur et envoi des données HTML/CSS correspondantes.

Affichage de ces données dans le navigateur.

Cette technique fonctionne très bien dans la plupart des cas, mais parfois seule une partie de la page nécessite d'être mise à jour. C'est là qu'intervient AJAX :

Dans un premier temps, envoi d'une requête au serveur afin d'obtenir les données qui seront affichées dans une partie bien précise de la page actuelle.

Calcul des données demandées par le serveur et envoi de ces données au navigateur au format XML.

Réception des données envoyées par le programme (on dit aussi moteur) AJAX qui les a demandées et affichage dans un endroit bien précis de la page actuelle sans toucher au reste de la page.

La figure suivante résume ces deux modes de fonctionnement.

Les deux modes de fonctionnement d'un site Web : client-serveur et AJAX
Les deux modes de fonctionnement d'un site Web : client-serveur et AJAX
Si, dans la plupart des cas, un fonctionnement traditionnel est entièrement satisfaisant, les performances d'affichage peuvent être grandement améliorées dans certains cas particuliers, comme par exemple l'affichage de données mises à jour à intervalles réguliers (cours d'actions en bourse par exemple), la sauvegarde des données pendant la saisie dans un formulaire, la mise à jour et/ou la vérification dynamique des champs d'un formulaire en fonction des données saisies par l'utilisateur, la saisie prédictive (comme le fait Google en proposant des réponses lorsque vous commencez à taper quelques caractères dans la case de recherche), etc.

Mais au fait, savez-vous ce que signifie le terme AJAX ? Que tous les joyeux drilles qui ont fait un rapprochement avec la lessive de même nom se rassurent, ces deux termes, quoique homonymes, n'ont aucun rapport entre eux. AJAX est l'acronyme d'Asynchronous JavaScript and XML. Tous ces termes se comprennent aisément : le langage JavaScript est utilisé pour demander des données au serveur. Ces données lui sont retournées de façon asynchrone sous une forme XML.

Serveur Web local et serveur Web distant
Vous savez maintenant ce que signifie le terme AJAX et ce qu'il pourra vous apporter dans vos développements Web. Vous êtes donc prêts à écrire vos premières lignes. Et pourtant, nous n'allons pas commencer tout de suite…

Jusqu'ici, tous les développements en jQuery se faisaient en local, sur votre ordinateur, et il suffisait d'afficher la page HTML dans un navigateur Web pour tester son fonctionnement. En effet, tout se passait au niveau client, c'est-à-dire dans le navigateur : aucun aller-retour avec un serveur Web n'était nécessaire. Au risque de vous décevoir, pour que les échanges AJAX fonctionnent, vous devrez utiliser un serveur. Deux possibilités s'offrent à vous. Vous pouvez :

Installer un serveur Web sur votre ordinateur.

Poster vos pages sur un serveur Web distant.


