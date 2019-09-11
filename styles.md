---
pagination:
  data: content.css
  size: 1
  alias: page
permalink: /css/{{ page.name | slug }}/
renderData:
  title: 'Just {{ page.name }}'
eleventyExcludeFromCollections: true
---

# {{ page.name }}

```
{{ page.body }}
```
