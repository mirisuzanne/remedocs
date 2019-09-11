---
pagination:
  data: content.md
  size: 1
  alias: page
permalink: /prose/{{ page.name | slug }}/
renderData:
  title: 'Just {{ page.name }}'
eleventyExcludeFromCollections: true
---

# {{ page.name }}

```
{{ page.body }}
```