---
layout: dox
pagination:
  data: dox.css
  size: 1
  alias: file
permalink: /docs/{{ file.info.slug }}/
renderData:
  title: '{{ file.info.filename }}'
  location: '{{ file.info.slug }}'
eleventyExcludeFromCollections: true
---