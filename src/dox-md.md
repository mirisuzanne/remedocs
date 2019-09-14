---
layout: base
docs_nav: true
hide_title: true
pagination:
  data: dox.md
  size: 1
  alias: file
permalink: /docs/{{ file.info.label | slug }}/
renderData:
  title: '{{ file.info.label }}'
  location: '{{ file.info.label | slug }}'
eleventyExcludeFromCollections: true
---

{{ file.content | safe }}
