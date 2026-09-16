---
layout: home
title: Home
permalink: /
description: >-
  Industrial Software Engineering at the IT University of Copenhagen: partner with student teams who build real software for your company over a semester.
---


{%- comment -%}
  Page structure follows itu.dk: full-bleed colour bands, each with the shared
  inner container, square corners, 1px borders instead of drop shadows.
{%- endcomment -%}

<section class="bg-white pt-8 pb-4">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12">
   <div class="bg-itu-beige border border-itu-purple text-itu-ink px-6 lg:px-10 py-10 md:py-14">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="md:w-1/2">
        <h1 class="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-5 text-itu-purple">
          ISE Course: Industrial Software Engineering
        </h1>
        <p class="text-lg md:text-xl text-itu-ink mb-8 max-w-xl">
          Bridging academia and industry closer together through innovative software projects
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="{{ site.baseurl }}/about"
            class="bg-itu-teal hover:bg-itu-teal-dark text-white font-semibold py-3 px-8 transition-colors text-center"
            >About the course</a
          >
          <a
            href="{{ site.baseurl }}/industry"
            class="border border-itu-purple text-itu-purple hover:bg-itu-purple hover:text-white font-semibold py-3 px-8 transition-colors text-center"
            >Partner with us</a
          >
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
        <!-- ITU-hosted course video -->
        <div class="w-full max-w-md">
          <div style="width:100%; height:0; position: relative; padding-bottom:56.25%">
            <iframe title="New ISE Video Player" src="https://video.itu.dk/v.ihtml/player.html?token=09092da659edba89992b4a0b53ceb5fb&source=embed&photo%5fid=115998198" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" allowfullscreen allow="autoplay; fullscreen"></iframe>
          </div>
        </div>
        <!-- Second year project video -->
        <div class="w-full max-w-md">
          <video controls preload="none" poster="{{ site.baseurl }}/assets/images/hero.jpg" class="w-full">
            <source src="{{ site.baseurl }}/assets/media/SECOND YEAR PROJECT SOFTWARE DEVELOPMENT IN LARGE TEAMS - IT University of Copenhagen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
   </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 text-center">
    <h2 class="font-display text-4xl font-bold mb-4 text-itu-purple">Welcome to the ISE Course</h2>
    <p class="text-lg text-itu-ink max-w-2xl mx-auto">
      Discover how our Industrial Software Engineering course is shaping the future of software development through hands-on industry collaboration.
    </p>
  </div>
</section>

<section class="bg-itu-pale-green-20 border-y border-itu-pale-green">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16">
    <h2 class="font-display text-4xl font-bold mb-8 text-center text-itu-purple">Quick Access</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a href="{{ site.baseurl }}/industry" class="group block bg-white border border-gray-300 hover:border-itu-teal p-6 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-itu-teal mb-4" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
        <h3 class="font-display text-2xl font-semibold mb-2 text-itu-purple">For Industry</h3>
        <p class="text-itu-ink mb-3">Partnership opportunities and project collaboration</p>
        <span class="text-itu-teal font-semibold group-hover:underline">Partner with us &rarr;</span>
      </a>
      <a href="{{ site.baseurl }}/projects" class="group block bg-white border border-gray-300 hover:border-itu-teal p-6 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-itu-teal mb-4" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <h3 class="font-display text-2xl font-semibold mb-2 text-itu-purple">Projects</h3>
        <p class="text-itu-ink mb-3">Explore student projects and outcomes</p>
        <span class="text-itu-teal font-semibold group-hover:underline">See the projects &rarr;</span>
      </a>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16">
    <h2 class="font-display text-4xl font-bold mb-8 text-center text-itu-purple">Why Partner with Us?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {% for partner in site.data.home.whypartner %}
        <div class="bg-white border border-gray-300 p-6 flex flex-col items-center text-center">
          <div class="h-12 w-12 text-itu-teal mb-4">{{ partner.icon }}</div>
          <h3 class="font-display text-2xl font-semibold mb-2 text-itu-purple">{{ partner.title }}</h3>
          <p class="text-itu-ink">{{ partner.description }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-itu-cream-20 border-y border-itu-cream">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16">
    <h2 class="font-display text-4xl font-bold mb-8 text-center text-itu-purple">Course Overview</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white border border-gray-300 p-6">
        <h3 class="font-display text-2xl font-semibold mb-4 text-itu-purple">Key Features</h3>
        <ul class="space-y-2">
          {% for item in site.data.home.keyfeatures %}
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-itu-teal mr-2 mt-1 flex-shrink-0" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              <p class="text-itu-ink">{{ item }}</p>
            </li>
          {% endfor %}
        </ul>
      </div>
      <div class="bg-white border border-gray-300 p-6">
        <h3 class="font-display text-2xl font-semibold mb-4 text-itu-purple">Learning Outcomes</h3>
        <ul class="space-y-2">
          {% for item in site.data.home.learningoutcomes %}
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-itu-teal mr-2 mt-1 flex-shrink-0" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              <p class="text-itu-ink">{{ item }}</p>
            </li>
          {% endfor %}
        </ul>
      </div>
      <div class="bg-white border border-gray-300 p-6">
        <h3 class="font-display text-2xl font-semibold mb-4 text-itu-purple">What We're Looking For</h3>
        <ul class="space-y-2">
          {% for item in site.data.home.benefits %}
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-itu-teal mr-2 mt-1 flex-shrink-0" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              <p class="text-itu-ink">{{ item }}</p>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16">
    <h2 class="font-display text-4xl font-bold mb-8 text-center text-itu-purple">Our Sponsors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
      {% for sponsor in site.data.sponsor.sponsors %}
        <a href="{{ sponsor.link }}" target="_blank" rel="noopener" class="flex items-center justify-center bg-white border border-gray-300 hover:border-itu-teal p-6 transition-colors">
          <img src="{{ site.baseurl }}/assets/images/sponsors/{{ sponsor.image }}" alt="{{ sponsor.name }}" loading="lazy" class="max-h-24 object-contain">
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-itu-purple-05 border-t border-itu-purple-20">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16">
    <h2 class="font-display text-4xl font-bold text-center mb-10 text-itu-purple">Contact Our Professors</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {% for professor in site.data.home.professors %}
        <div class="flex flex-col items-center bg-white border border-gray-300 p-6 text-center">
          <div class="mb-4 h-[200px] w-[200px] overflow-hidden bg-gray-100">
            <img
              src="{{ site.baseurl }}{{ professor.image }}"
              alt="{{ professor.name }}, {{ professor.role }}"
              width="200"
              height="200"
              loading="lazy"
              class="h-full w-full object-cover"
            />
          </div>
          <h3 class="font-display text-2xl font-semibold mb-1 text-itu-purple">{{ professor.name }}</h3>
          <p class="text-itu-ink mb-3">{{ professor.role }}</p>
          <a
            href="mailto:{{ professor.email }}"
            class="inline-flex items-center text-itu-teal hover:text-itu-teal-dark font-semibold transition-colors"
          >
            {{ professor.email }}
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
