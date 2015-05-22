---
layout: archive
title: "Projects"
date: 2014-05-30T11:39:03-04:00
modified: 2015-05-22
excerpt: "A collection of past and current projects."
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.projects %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
