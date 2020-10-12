
export async function getArticles(){
    let response = await fetch("http://dip.buzina42.beget.tech/getArticles");
    let articles = await response.json();
    return articles;
}
