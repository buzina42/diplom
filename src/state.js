
export async function getArticles(){
    let response = await fetch("http://dip.buzina42.beget.tech/getArticles");
    let articles = await response.json();
    return articles;
}
export async function getArticle(title){
    let formData = new FormData();
    formData.append("title",title);
    let response = await fetch("http://dip.buzina42.beget.tech/getArticle",{
        method: "POST",
        body: formData
    });
    let article = await response.json();
    return article;
}