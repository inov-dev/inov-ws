# Évolutions à prévoir

## Accès aux résultats

- Remplacer le premier bouton « Accès à vos résultats » par un bouton destiné aux deux centres suivants :
  - Saint-Doulchard — Scintigraphie ;
  - Bourges — TEP.
- Le bouton actuel du site est présent sur l’ensemble des pages sous la classe `.btn-results` et pointe vers `https://inov-scinti.fr`.
- Valider le libellé final et l’adresse de destination avant la mise en ligne.

## Création de compte et mise à jour du mot de passe

- Privilégier l’adresse email de l’utilisateur comme identifiant de connexion.
- Cette même adresse email servira à la double authentification.
- Expliquer clairement ce choix dans les consignes de création et de mise à jour du compte.
- Exiger un mot de passe d’au moins **12 caractères**.
- Prévoir également les règles suivantes présentées dans l’interface de référence :
  - au moins un caractère spécial ;
  - au moins une lettre majuscule ;
  - au moins un chiffre ;
  - confirmation identique au nouveau mot de passe ;
  - mot de passe différent des trois derniers mots de passe utilisés.

> L’interface visible sur la capture de référence indique actuellement 15 caractères minimum. La règle cible retenue pour cette évolution est 12 caractères minimum ; il faudra harmoniser l’interface et la validation technique.
