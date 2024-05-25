function queryUtility() {}

queryUtility.prototype.GET_ALL_ARTICLES = `select * from articles ORDER BY created_at DESC LIMIT ? OFFSET ?`;
queryUtility.prototype.GET_ARTICLE_BY_ID = `select * from articles where id = ?`;
queryUtility.prototype.ADD_ARTICLE = `insert into articles(title,author,language) values (?)`;

queryUtility.prototype.DELETE_ARTICLE = `delete from articles where id = ?`;
module.exports = queryUtility;
