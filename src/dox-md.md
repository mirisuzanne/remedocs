---
layout: base
hide_title: true
pagination:
  data: dox.md
  size: 1
  alias: file
permalink: /docs/{{ file.info.label | slug }}/
eleventyComputed:
  title: '{{ file.info.label }}'
  location: '{{ file.info.label | slug }}'
eleventyExcludeFromCollections: true
---

{{ file.content | safe }}
