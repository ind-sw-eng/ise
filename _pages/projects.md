---
layout: default
title: Projects
nav: true
nav_order: 1
permalink: /projects
---

# Projects

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {% for project in site.projects %}
  <li class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-6">
      <img src="{{ site.baseurl }}{{project.img}}" alt="{{project.title}} logo" class="w-full h-48 object-cover" />
      <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
      <p class="text-gray-700">{{ project.description }}</p>
      <a href="{{ site.baseurl }}{{ project.url }}" class="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
    </div>
  </li>
  {% endfor %}
</ul>
