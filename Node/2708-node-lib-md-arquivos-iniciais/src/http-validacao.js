import chalk from "chalk";
/*
A função extrai links tem como objetivo pegar o array de objetos(dentro de cada um desses objetos tem somente uma key e um value)
e transformar em outro array somente com os links (values). O melhor método para pegar um array ja pronto e retornar outro array 
da maneira desejada é o map().

No exemplo abaixo, para que não seja retornado um array de arrays(cada um contendo um link) e sim um só array com os links, 
é preciso utilizar o metodo .join() que vai pegar o conteudo de cada um dos arrays, converte em uma string e devolverá somente
um array com os links.
*/
function ExtraiLinks(arrLinks){
    return arrLinks.map((ObjetoLinks)=> Object.values(ObjetoLinks).join());
}

/*
Novamente na função checaStatus será usado o .map() pois o input é uma lista de URLs e a resposta será uma lista de status codes.

Na função checkaStatus, dentro de map, não basta dizer que ele é async, pois é retornado um valor por vez para o array de status,
portanto é necessário utilizar o Promise.all() para retornar o array de uma só vez, mesmo ele sendo feito cada item de forma
assíncrona.
*/
async function checaStatus(listaURLs){
    const arrStatus = Promise.all(
        listaURLs.map(async (url)=>{
            try{
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            }catch(erro){
                return manejaErros(erro);
            }
        })
    )

    return arrStatus;
}

function manejaErros(erro){
    return erro.cause.code === 'ENOTFOUND' ? 'link não encontrado' : 'ocorreu algum erro';
}
/*
Agora na função listaValidada, é possivel perceber que no .map reconstruimos o objeto com o link da propria lista de links e
com o status http. Quando usamos status[indice] no .map, n precisamos fazer dele um contador, ele serve como uma referencia,
assim como em "(objeto, indice)", o objeto se refere ao objeto correto pela ordem do array, vai se referir ao status code na 
mesma ordem.
*/
export default async function listaValidada (listaDeLinks){
   const links = ExtraiLinks(listaDeLinks);
   const status = await checaStatus(links);
   return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    "status": status[indice]
   }));
}