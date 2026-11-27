---
layout: home
title: Industrial Software Engineering at ITU
permalink: /
description: >-
  Bring a real digital challenge to the IT University of Copenhagen. A student team builds it over a semester in Scrum, with you as Product Owner. No fee.
---


{%- comment -%}
  The home page addresses two audiences, in this order: a Product Owner with a
  challenge to solve, and a company that wants to sponsor the course and meet
  the students. Everything about the course itself lives on /about.

  The look is editorial: a full-bleed photograph under the headline, large
  left-aligned section titles with their "read more" link on the right, solid
  purple panels where a magazine would use black, and hairline grids for the
  logos. The palette is itu.dk's, with purple and mint carrying the page and no
  yellow or beige on it.
{%- endcomment -%}

{%- capture chevron -%}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2 mt-1 flex-shrink-0" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
{%- endcapture -%}

<section class="relative isolate overflow-hidden bg-itu-purple-dark text-white">
  <img src="{{ site.baseurl }}/assets/images/hero.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-center" fetchpriority="high">
  <div class="absolute inset-0 -z-10 bg-gradient-to-t md:bg-gradient-to-r from-itu-purple-dark via-itu-purple-dark/85 to-itu-purple-dark/30" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 pt-40 pb-14 md:pt-48 md:pb-20 min-h-[600px] md:min-h-[680px] flex flex-col justify-end">
    <span class="hatch text-itu-mint mb-3" aria-hidden="true"></span>
    <p class="text-sm font-semibold leading-snug text-itu-mint mb-5">Industrial Software Engineering<br>IT University of Copenhagen</p>
    <h1 class="font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl mb-6">
      Bring us a real development challenge. Leave with working software.
    </h1>
    <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
      Eight to ten ITU students build it over a semester, led by a Scrum Master, with you as Product Owner. No fee. Your part is roughly four to eight hours a week.
    </p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a
        href="{{ site.baseurl }}/industry#download-project-proposal-template"
        class="bg-itu-teal hover:bg-itu-teal-dark text-white font-semibold py-3 px-8 transition-colors text-center"
        >Submit a project</a
      >
      <a
        href="{{ site.baseurl }}/sponsor"
        class="border border-white text-white hover:bg-white hover:text-itu-purple font-semibold py-3 px-8 transition-colors text-center"
        >Become a sponsor</a
      >
    </div>
  </div>
</section>

<section class="bg-itu-mint" aria-label="The course in numbers">
  <dl class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 text-itu-purple-dark">
    <div class="md:border-r md:border-itu-purple-dark/20 md:pr-6">
      <dt class="text-sm">Developers per team</dt>
      <dd class="font-display text-3xl font-bold">8&ndash;10</dd>
    </div>
    <div class="md:border-r md:border-itu-purple-dark/20 md:px-6">
      <dt class="text-sm">Teams every semester</dt>
      <dd class="font-display text-3xl font-bold">Around 16</dd>
    </div>
    <div class="md:border-r md:border-itu-purple-dark/20 md:px-6">
      <dt class="text-sm">Fee for your project</dt>
      <dd class="font-display text-3xl font-bold">None</dd>
    </div>
    <div class="md:pl-6">
      <dt class="text-sm">Projects with industry</dt>
      <dd class="font-display text-3xl font-bold">Since 2017</dd>
    </div>
  </dl>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="max-w-3xl mb-10">
      <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4 text-itu-purple">Two ways to work with us</h2>
      <p class="text-lg text-itu-ink">
        Bring a project for a student team to build, or sponsor the course and get to know the students who graduate from it.
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div class="bg-itu-purple text-white p-8 md:p-10 flex flex-col">
        <span class="hatch text-itu-mint mb-3" aria-hidden="true"></span>
        <p class="text-sm font-semibold text-itu-mint mb-4">For Product Owners</p>
        <h3 class="font-display text-4xl font-bold mb-3">You have a challenge</h3>
        <p class="text-white/90 mb-8">For Product Owners with a digital development problem worth a semester of work.</p>

        <p class="font-semibold mb-2">What you bring</p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>A real problem that matters to your organisation, scoped to one semester. Frame it as an MVP, with room to go further</span></li>
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>A Product Owner for 4&ndash;8 hours a week, at every sprint planning and reachable in between</span></li>
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>Access to the data, APIs or tools the team needs, where relevant</span></li>
        </ul>

        <p class="font-semibold mb-2">What you get</p>
        <ul class="space-y-2 mb-10">
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>8&ndash;10 developers with a Scrum Master and an industrial Agile Coach, at no cost</span></li>
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>An MVP or working prototype, delivered with its code and documentation</span></li>
          <li class="flex items-start"><span class="text-itu-mint">{{ chevron }}</span><span>A close look at engineers you might later hire</span></li>
        </ul>

        <div class="mt-auto">
          <a href="{{ site.baseurl }}/industry#download-project-proposal-template" class="inline-block bg-itu-teal hover:bg-itu-teal-dark text-white font-semibold py-3 px-8 transition-colors">Download the proposal template</a>
          <p class="text-sm text-white/90 mt-3">Project proposals are due 29 November for the following semester. Questions first? <a href="mailto:pate@itu.dk?subject=ISE%20project%20proposal" class="text-itu-mint font-semibold underline underline-offset-2 hover:text-white">Email Paolo Tell</a>.</p>
        </div>
      </div>

      <div class="bg-white border border-itu-purple p-8 md:p-10 flex flex-col">
        <span class="hatch text-itu-teal mb-3" aria-hidden="true"></span>
        <p class="text-sm font-semibold text-itu-teal mb-4">Open for {{ site.data.sponsor.edition }}</p>
        <h3 class="font-display text-4xl font-bold mb-3 text-itu-purple">You want to reach our students</h3>
        <p class="text-itu-ink mb-8">Saxo, Capgemini and agile42 fund the course. There is room for one more sponsor in {{ site.data.sponsor.edition }}, from DKK 30,000.</p>

        <p class="font-semibold text-itu-purple mb-2">What sponsorship gives you</p>
        <ul class="space-y-2 mb-10">
          <li class="flex items-start"><span class="text-itu-teal">{{ chevron }}</span><span class="text-itu-ink">Direct, facilitated contact with software engineers before they graduate</span></li>
          <li class="flex items-start"><span class="text-itu-teal">{{ chevron }}</span><span class="text-itu-ink">A sponsor booth, and your brand visible across the course and its events</span></li>
          <li class="flex items-start"><span class="text-itu-teal">{{ chevron }}</span><span class="text-itu-ink">A head start on hiring the students you have already worked with</span></li>
          <li class="flex items-start"><span class="text-itu-teal">{{ chevron }}</span><span class="text-itu-ink">Your support keeps the course free for the companies that bring projects</span></li>
        </ul>

        <div class="mt-auto">
          <a href="{{ site.baseurl }}/sponsor" class="inline-block bg-itu-purple hover:bg-itu-purple-80 text-white font-semibold py-3 px-8 transition-colors">How sponsorship works</a>
          <p class="text-sm text-itu-ink mt-3">What it covers, what you get, and who to write to.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="bg-itu-mint-20 border-y border-itu-mint">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <h2 class="font-display text-5xl md:text-6xl font-bold leading-none text-itu-purple">How a project runs</h2>
      <a href="{{ site.baseurl }}/industry" class="text-itu-purple font-semibold underline underline-offset-4 hover:text-itu-teal">Read the full partnership guide</a>
    </div>
    <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
      <li class="border-t-2 border-itu-purple pt-5">
        <p class="font-display text-6xl font-bold text-itu-teal leading-none mb-4" aria-hidden="true">01</p>
        <h3 class="font-display text-3xl font-semibold mb-2 text-itu-purple">Propose</h3>
        <p class="text-itu-ink">Send us the proposal template with your challenge by 29 November. We talk it through and check the scope together.</p>
      </li>
      <li class="border-t-2 border-itu-purple pt-5">
        <p class="font-display text-6xl font-bold text-itu-teal leading-none mb-4" aria-hidden="true">02</p>
        <h3 class="font-display text-3xl font-semibold mb-2 text-itu-purple">Pitch and match</h3>
        <p class="text-itu-ink">The course opens in week 5. In week 6 you pitch at the Match Making Event and get your team, a Scrum Master and an Agile Coach.</p>
      </li>
      <li class="border-t-2 border-itu-purple pt-5">
        <p class="font-display text-6xl font-bold text-itu-teal leading-none mb-4" aria-hidden="true">03</p>
        <h3 class="font-display text-3xl font-semibold mb-2 text-itu-purple">Build in sprints</h3>
        <p class="text-itu-ink">Two weeks of kickoff, then eleven weeks of sprints: planning, reviews, retrospectives. Mid-semester reviews fall in March and May.</p>
      </li>
      <li class="border-t-2 border-itu-purple pt-5">
        <p class="font-display text-6xl font-bold text-itu-teal leading-none mb-4" aria-hidden="true">04</p>
        <h3 class="font-display text-3xl font-semibold mb-2 text-itu-purple">Take delivery</h3>
        <p class="text-itu-ink">Projects end in week 20 with final presentations at the Celebration Event. Then the handover: code, documentation and a retrospective on the partnership.</p>
      </li>
    </ol>
  </div>
</section>

<section class="bg-itu-purple-dark text-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
      <div>
        <span class="hatch text-itu-mint mb-3" aria-hidden="true"></span>
        <p class="text-sm font-semibold text-itu-mint mb-4">Watch</p>
        <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4">See a team at work</h2>
        <p class="text-lg text-white/90">ITU students building software together in large teams. ISE projects run the same way.</p>
      </div>
      <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="bg-black relative w-full" style="padding-bottom:56.25%">
            <iframe title="Introduction to the ISE course" src="https://video.itu.dk/v.ihtml/player.html?token=09092da659edba89992b4a0b53ceb5fb&source=embed&photo%5fid=115998198" class="absolute inset-0 h-full w-full" frameborder="0" border="0" scrolling="no" allowfullscreen allow="autoplay; fullscreen"></iframe>
          </div>
          <p class="text-sm text-white/80 mt-2">A short introduction to the course</p>
        </div>
        <div>
          <video controls preload="none" poster="{{ site.baseurl }}/assets/images/hero.jpg" class="w-full aspect-video bg-black object-cover">
            <source src="{{ site.baseurl }}/assets/media/SECOND YEAR PROJECT SOFTWARE DEVELOPMENT IN LARGE TEAMS - IT University of Copenhagen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p class="text-sm text-white/80 mt-2">Software development in large teams, IT University of Copenhagen</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="max-w-3xl mb-10">
      <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4 text-itu-purple">What partners get out of it</h2>
      <p class="text-lg text-itu-ink">Around 16 teams every semester. Projects since 2017, and many partners come back with a second one.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
      {% for partner in site.data.home.whypartner %}
        <div class="border-t border-gray-300 pt-6">
          <div class="h-10 w-10 text-itu-teal mb-4 [&>svg]:h-10 [&>svg]:w-10">{{ partner.icon }}</div>
          <h3 class="font-display text-3xl font-semibold mb-2 text-itu-purple">{{ partner.title }}</h3>
          <p class="text-itu-ink">{{ partner.description }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-white border-t border-gray-200">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div class="max-w-3xl">
        <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4 text-itu-purple">Companies that brought us a challenge</h2>
        <p class="text-lg text-itu-ink">From Novo Nordisk and Alfa Laval to startups building their first product.</p>
      </div>
      <a href="{{ site.baseurl }}/projects" class="text-itu-purple font-semibold underline underline-offset-4 hover:text-itu-teal shrink-0">See what the teams built</a>
    </div>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-gray-300">
      {% for project in site.projects %}
        <li class="bg-white border-r border-b border-gray-300">
          <a href="{{ site.baseurl }}{{ project.url }}" class="flex items-center justify-center p-6 h-36 hover:bg-itu-mint-20 transition-colors" title="{{ project.title }}">
            <img src="{{ site.baseurl }}{{ project.img }}" alt="{{ project.title }}" loading="lazy" class="max-h-16 max-w-full object-contain">
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 pb-16 md:pb-24">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div class="max-w-3xl">
        <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4 text-itu-purple">Our sponsors</h2>
        <p class="text-lg text-itu-ink">They fund the course, so partner companies pay nothing to run a project.</p>
      </div>
      <a href="{{ site.baseurl }}/sponsor" class="text-itu-purple font-semibold underline underline-offset-4 hover:text-itu-teal shrink-0">How sponsorship works</a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-300">
      {% for sponsor in site.data.sponsor.sponsors %}
        <a href="{{ sponsor.link }}" target="_blank" rel="noopener" class="flex items-center justify-center bg-white border-r border-b border-gray-300 p-8 h-40 hover:bg-itu-mint-20 transition-colors">
          <img src="{{ site.baseurl }}/assets/images/sponsors/{{ sponsor.image }}" alt="{{ sponsor.name }}" loading="lazy" class="max-h-20 max-w-full object-contain">
        </a>
      {% endfor %}
      <a href="{{ site.baseurl }}/sponsor" class="flex flex-col justify-end bg-itu-purple border-r border-b border-gray-300 text-white p-8 h-40 hover:bg-itu-purple-dark transition-colors">
        <span class="font-display text-3xl font-bold">This space is open</span>
        <span class="text-sm text-white/90 mt-1">Your logo, here and through the course. See how it works</span>
      </a>
    </div>
  </div>
</section>

<section class="bg-itu-purple-05 border-t border-itu-purple-20">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-16 md:py-24">
    <div class="max-w-3xl mb-10">
      <h2 class="font-display text-5xl md:text-6xl font-bold leading-none mb-4 text-itu-purple">Talk to the course team</h2>
      <p class="text-lg text-itu-ink">A project idea, a question about scope, or sponsorship: write to any of us.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {% for professor in site.data.home.professors %}
        <div class="flex flex-col">
          <div class="mb-5 aspect-square w-full overflow-hidden bg-gray-100">
            <img
              src="{{ site.baseurl }}{{ professor.image }}"
              alt="{{ professor.name }}, {{ professor.role }}"
              width="400"
              height="400"
              loading="lazy"
              class="h-full w-full object-cover"
            />
          </div>
          <h3 class="font-display text-3xl font-semibold text-itu-purple"><a href="{{ professor.profile }}" target="_blank" rel="noopener" class="hover:underline">{{ professor.name }}</a></h3>
          <p class="text-itu-ink mb-3">{{ professor.role }}</p>
          <a href="mailto:{{ professor.email }}" class="self-start text-itu-teal hover:text-itu-teal-dark font-semibold transition-colors">{{ professor.email }}</a>
          <a href="{{ professor.profile }}" target="_blank" rel="noopener" class="self-start text-sm text-itu-ink hover:text-itu-teal underline underline-offset-2 mt-2">ITU researcher profile</a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
