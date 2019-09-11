---
pagination:
  data: content.md
  size: 1
  alias: page
permalink: './{{ page.name | slug }}/index.html'
renderData:
  title: '{{ page.name }}'
---

# [{{ page.name }}]({{ page.url }})

{{ page.body }}
