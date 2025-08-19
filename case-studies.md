---
title: Case Studies
permalink: /case-studies/
layout: default   # or whatever layout your site uses; can be `none` if you want a blank canvas
---

<link rel="preload" href="{{ site.baseurl }}/assets/cases/site.css" as="style">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/cases/site.css">

<div class="cases wrap">
  <header class="cases__site" aria-labelledby="title">
    <div>
      <h1 id="title">Case Studies</h1>
      <p>Consulting-style cards with <strong>challenge → approach → results</strong>. Filter or search by tags.</p>
    </div>
  </header>

  {% include cases/filters.html %}
  {% include cases/grid.html %}
</div>

<script defer src="{{ site.baseurl }}/assets/cases/cards.js"></script>
