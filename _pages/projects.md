---
layout: default
title: Projects
nav: true
nav_order: 1
permalink: /projects
description: >-
  Industry projects delivered by ISE student teams at the IT University of Copenhagen, from Novo Nordisk and Alfa Laval to startups like Almenr and Cyberjuice.
---

<div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-10">
  <h1 class="font-display text-5xl font-bold text-itu-purple">Projects</h1>
  <p class="text-lg text-itu-ink mt-2 mb-8 max-w-3xl">{{ page.description }}</p>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {% for project in site.projects %}
  <li class="bg-white border border-gray-300 hover:border-itu-teal transition-colors overflow-hidden">
    <div class="p-6 flex flex-col items-center">
      <a href="{{ site.baseurl }}{{ project.url }}">
        <img src="{{ site.baseurl }}{{ project.img }}" alt="{{ project.title }} logo" loading="lazy"
             class="mx-auto h-64 max-w-[400px] object-contain bg-white p-4 transition-transform hover:scale-105" />
      </a>
      <h2 class="font-display text-2xl font-semibold mb-2 mt-4 text-center text-itu-purple">{{ project.title }}</h2>
      <p class="text-itu-ink text-center">{{ project.description }}</p>
      <a href="{{ site.baseurl }}{{ project.url }}" class="text-itu-teal font-semibold hover:underline mt-4 inline-block">Read more</a>
    </div>
  </li>
  {% endfor %}
</ul>

</div>
