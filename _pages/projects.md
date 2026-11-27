---
layout: default
title: Projects
nav: true
nav_order: 1
permalink: /projects
description: >-
  Industry projects delivered by ISE student teams at the IT University of Copenhagen, from Novo Nordisk and Alfa Laval to startups like Almenr and Cyberjuice.
---

{% include page-hero.html title="Projects" lead=page.description %}

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-20">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-gray-300">
      {% for project in site.projects %}
      <li class="bg-white border-r border-b border-gray-300">
        <a href="{{ site.baseurl }}{{ project.url }}" class="group flex h-full flex-col p-8 hover:bg-itu-mint-20 transition-colors">
          <div class="flex h-40 items-center justify-center mb-6">
            <img src="{{ site.baseurl }}{{ project.img }}" alt="{{ project.title }} logo" loading="lazy"
                 class="max-h-32 max-w-[240px] object-contain" />
          </div>
          <h2 class="font-display text-3xl font-semibold mb-2 text-itu-purple">{{ project.title }}</h2>
          <p class="text-itu-ink mb-6">{{ project.description }}</p>
          <span class="mt-auto font-semibold text-itu-purple underline underline-offset-4 group-hover:text-itu-teal">Read more</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
