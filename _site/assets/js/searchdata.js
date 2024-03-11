
var jsondata=[
  
    {
      "title"    : "Example Post",
      "category" : "",
      "tags"     : "",
      "url"      : "/git-wiki-skeleton/assets/blog/posts/2020/01/01/example-post.html",
      "date"     : "2020-01-01 00:00:00 +0900",
      "content"  : "{% if site.search_engine == \"js\" %}\nvar jsondata=[\n  {% for post in site.posts %}\n    {\n      \"title\"    : \"{{ post.title | escape }}\",\n      \"category\" : \"{{ post.category }}\",\n      \"tags\"     : \"{{ post.tags | join: ', ' }}\",\n      \"url\"      : \"{{ site.baseurl }}{{ post.url }}\",\n      \"date\"     : \"{{ post.date }}\",\n      \"content\"  : {{ page.content | jsonify }}\n    } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n  ,\n  {% for page in site.html_pages %}\n   {\n     {% assign title = page.title | default: page.name %}\n     {% if title != nil %}\n        \"title\"    : \"{{ title | escape }}\",\n        \"category\" : \"{{ page.category }}\",\n        \"tags\"     : \"{{ page.tags | join: ', ' }}\",\n        \"url\"      : \"{{ site.baseurl }}{{ page.url }}\",\n        \"date\"     : \"{{ page.date }}\",\n        \"content\"  : {{ page.content | jsonify }}\n     {% endif %}\n   } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n];\n\nvar sjs = SimpleJekyllSearch({\n    searchInput: document.getElementById('search-input'),\n    resultsContainer: document.getElementById('results-container'),\n    json: jsondata,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    exclude: []\n  })\n{% endif %}\n\n"
    } 
  
  ,
  
   {
     
     
        "title"    : "404.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/git-wiki-skeleton/404.html",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of non existent pages --->\n"
     
   } ,
  
   {
     
     
        "title"    : "index.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/git-wiki-skeleton/assets/blog/",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of blog page --->"
     
   } ,
  
   {
     
     
        "title"    : "Example page",
        "category" : "",
        "tags"     : "",
        "url"      : "/git-wiki-skeleton/public/wiki/example-page.html",
        "date"     : "",
        "content"  : "## Example page\n\nThis is an example page. You can edit it or create a [new one](new_page.md)\n"
     
   } ,
  
   {
     
     
        "title"    : "Example page",
        "category" : "",
        "tags"     : "",
        "url"      : "/git-wiki-skeleton/example-page",
        "date"     : "",
        "content"  : "## Example page\n\nThis is an example page. You can edit it or create a [new one](new_page.md)\n"
     
   } ,
  
   {
     
     
        "title"    : "git-wiki-skeleton",
        "category" : "",
        "tags"     : "",
        "url"      : "/git-wiki-skeleton/",
        "date"     : "",
        "content"  : "# git-wiki-skeleton\n\nNOTE: it's fully supported by github platform, you don't need to install anything locally\n\nThis is a [skeleton](skeleton) repository that can be used as a template to bootstrap your wiki using \"[remote_theme](https://github.com/benbalter/jekyll-remote-theme)\" config\n\nFor documentation, installation guide and demo of git-wiki-theme visit [THIS PAGE](http://drassil.github.io/git-wiki/)\n\n## The git-wiki project\n\nThe git-wiki project is composed by 3 different repository:\n\n- [git-wiki-theme](https://github.com/Drassil/git-wiki-theme): This is the repository of the theme that implements the wiki functionalities. You would have not fork it unless you need to send a Pull Request or create your wiki project from scratch.\n\n- [git-wiki-skeleton](https://github.com/Drassil/git-wiki-skeleton): This is the repo that you should fork or use as a template. It uses the [jekyll remote theme](https://github.com/benbalter/jekyll-remote-theme) functionality that allows you to create your own wiki based on git-wiki-theme. By using the remote functionality you can automatically keep your wiki always updated with latest features from the **git-wiki-theme**, but you can also fully customize it. \n\n- [git-wiki](https://github.com/Drassil/git-wiki): This is the documentation repository and website of the **git-wiki-theme** project. You would have not fork it unless you want to contribute to the git-wiki project documentation.\n\nVersion: 1.0.8\n"
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


