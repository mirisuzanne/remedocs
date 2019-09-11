---
pagination:
  data: dox
  size: 1
  alias: css
permalink: /css/{{ css.name | slug }}/
renderData:
  title: 'Just {{ css.name }}'
eleventyExcludeFromCollections: true
---

# {{ css.name }}

```
{{ css }}
```
