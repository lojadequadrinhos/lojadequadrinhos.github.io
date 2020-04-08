---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<style>
.grid {
    display: grid;
    flex-wrap: wrap;
    display: grid;
    width: 100%;
    grid-column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    min-height: 350px;
}

.comics-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 7px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.08);
    background-color: #fff;
}

.comics-card__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 100%;
    text-align: center;
    margin-top: auto;
}

.comics-card__header {
    padding: 10px;
    min-height: 200px;
    display: flex;
    justify-content: center;
}

a.comics-card__footer__title,a.comics-card__footer__title:visited {
    color: #666;
    text-decoration: none;
}

.comics-card__header > span {
    display: flex;
    justify-content: center;
    margin: auto;
}

.wrapper {
}

main.page-content {
    background: #f4f4f4;
}
</style>
<div class="grid">
{% for comics in site.comics %}
    <div class="comics-card">
        <div class="comics-card__header">
            <span href="{{comics.url}}">
                <img src="{{comics.capa}}" alt="{{comics.titulo}}">
            </span>
        </div>
        <div class="comics-card__footer">
            <a href="{{comics.url}}" class="comics-card__footer__title">
                <a href="{{comics.url}}">{{comics.titulo}}</a>
            </a>         
        </div>
    </div>       
{% endfor %}
</div>

