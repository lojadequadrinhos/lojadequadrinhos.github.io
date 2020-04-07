---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
<div class="columns is-gapless is-multiline">
{% for comics in site.comics %}
<div class="column is-half">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
        <a href="{{comics.url}}">
      <img src="{{comics.capa}}" alt="{{comics.titulo}}">
      </a>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <a href="{{comics.url}}" class="title is-4">{{comics.titulo}}</a>
        <!--<p class="subtitle is-6">{{comics.preco}}</p>-->
      </div>
    </div>
    <!--<div class="content">
        {{comics.content | markdownify }}
    </div>-->
  </div>
</div>
</div>
{% endfor %}
</div>

