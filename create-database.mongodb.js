/* Nome do Banco de dados*/
const database = 'BD3-Vi-Aula';

/*Nome da coleção de dados*/
const collection = 'Livraria';

/*Criar ou acessar o banco de dados*/
use(database);

/*Criar uma coleção de dados*/
db.createCollection(collection);