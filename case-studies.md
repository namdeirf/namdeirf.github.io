---
title: "Case Studies"
permalink: /case-studies/
layout: default   # or none if you don’t want your site’s header/footer
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/cases/site.css">

<div class="cases wrap">
  <header class="cases__site">
    <h1>Case Studies</h1>
    <p>Consulting-style cards with <strong>challenge → approach → results</strong>.</p>
  </header>

  {% include cases/filters.html %}
  {% include cases/grid.html %}
</div>

<script defer src="{{ site.baseurl }}/assets/cases/cards.js"></script>
