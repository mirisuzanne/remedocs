---
layout: base
docs_nav: true
pagination:
  data: dox.md
  size: 1
  alias: file
permalink: /docs/{{ file.info.label | slug }}/
renderData:
  title: '{{ file.info.label }}'
eleventyExcludeFromCollections: true
---

{{ file.content }}
