CREATE TABLE PRODUCT (
     ID             SERIAL PRIMARY KEY,
     TITRE	        VARCHAR(255),
     PRIX	        FLOAT,
     DETAILS	    VARCHAR(255),

);
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Porte éponge en laiton", 30,"Permet de porter les éponges et est fabriqué en laiton.");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Sac de cinq kilos de sel", 15,"Du bon sel de mer stocké dans un bon sac de cinq bons kilos.");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Bouteille d'eau remplie d'eau", 1,"De l'eau tout à fait normale. Rien de louche ici.");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Pass navigo d'occasion", 5, "Utilisé seulement 3 fois entre 1995 et 2010.");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Paquet de 10 Twix presque neuf", 4, "Il en reste quatre je crois.");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Courroie de distribution + pompe à eau", 80, "80 euros mais la main d'oeuvre sera 300 environ");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Naruto Tome 12", 5,"Désolé on a pas les autres");
INSERT INTO PRODUCT (TITRE,PRIX,DETAILS) VALUES ("Barbecue à charbon de bois en acier inoxydable", 150,"Quelqu'un veut une chipo ?");