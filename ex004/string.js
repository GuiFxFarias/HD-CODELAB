let site = "www.Google.com";

console.log(site.length);

console.log(site.substring(4, site.length));
console.log(site[4]);
console.log(site.toLowerCase());
console.log(site.toUpperCase());
console.log(site.replace(".com", "ponto"));
console.log(site.indexOf("ponto"));

const msensagem = "Seja bem-vindo à League of Draven";

console.log(msensagem.split(" "));

const email = 'guilhermefarias210303@gmail.com'

const emailsplit = email.split('@')

const nome = emailsplit[0]
const dominio = emailsplit[1]

console.log(nome)
console.log(dominio)
