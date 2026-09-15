---
layout: home
title: Home
permalink: /
description: >-
  Industrial Software Engineering at the IT University of Copenhagen: partner with student teams who build real software for your company over a semester.
---



<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center w-full">
  <div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12 py-8 md:py-16">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          ISE Course: Industrial Software Engineering
        </h1>
        <p class="text-xl mb-8">
          Bridging academia and industry closer together through innovative software projects
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="{{ site.baseurl }}/about"
            class="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-center"
            >Learn More</a
          >
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
        <!-- New ISE Video -->
        <div class="w-full max-w-md">
          <div style="width:100%; height:0; position: relative; padding-bottom:56.25%">
            <iframe title="New ISE Video Player" src="https://video.itu.dk/v.ihtml/player.html?token=09092da659edba89992b4a0b53ceb5fb&source=embed&photo%5fid=115998198" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" allowfullscreen allow="autoplay; fullscreen" class="rounded-lg shadow-lg"></iframe>
          </div>
        </div>
        <!-- Existing Video -->
        <div class="w-full max-w-md">
          <video controls preload="none" poster="{{ site.baseurl }}/assets/images/hero.jpg" class="w-full rounded-lg shadow-lg">
            <source src="{{ site.baseurl }}/assets/media/SECOND YEAR PROJECT SOFTWARE DEVELOPMENT IN LARGE TEAMS - IT University of Copenhagen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="mx-auto w-full max-w-screen-xl px-6 lg:px-12">


 <section class="mb-16 text-center mt-10">
          <h2 class="text-3xl font-bold mb-4">Welcome to the ISE Course</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our Industrial Software Engineering course is shaping the future of software development through hands-on industry collaboration.
          </p>
  </section>


  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Quick Access</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a href="{{ site.baseurl }}/industry" class="group block bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-blue-600 mb-4" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
        <h3 class="text-xl font-semibold mb-2">For Industry</h3>
        <p class="text-gray-600 mb-3">Partnership opportunities and project collaboration</p>
        <span class="text-blue-600 font-medium group-hover:underline">Partner with us &rarr;</span>
      </a>
      <a href="{{ site.baseurl }}/projects" class="group block bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-blue-600 mb-4" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <h3 class="text-xl font-semibold mb-2">Projects</h3>
        <p class="text-gray-600 mb-3">Explore student projects and outcomes</p>
        <span class="text-blue-600 font-medium group-hover:underline">See the projects &rarr;</span>
      </a>
    </div>
  </section>


  <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center">Why Partner with Us?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">           
           {% for partner in site.data.home.whypartner %}
              <div class="bg-white rounded-lg shadow-md p-6  flex flex-col items-center text-center">
                <div class="h-12 w-12 text-blue-600 mb-4">{{partner.icon}}</div>
                <h3 class="text-xl font-semibold mb-2">{{partner.title}}</h3>
                <p class="text-gray-600">{{partner.description}}</p>
              </div>
            {% endfor %}
          </div>
</section>


<section class="mb-16">
  <h2 class="text-3xl font-bold mb-8 text-center">Course Overview</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Key Features -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4">Key Features</h3>
      <ul class="space-y-2">
        {% for item in site.data.home.keyfeatures %}
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"><path d="m9 18 6-6-6-6"></path></svg>
            <p class="text-black">{{item}}</p>
          </li>
        {% endfor %}
      </ul>
    </div>
    <!-- Learning Outcomes -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4">Learning Outcomes</h3>
      <ul class="space-y-2">
        {% for item in site.data.home.learningoutcomes %}
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"><path d="m9 18 6-6-6-6"></path></svg>
            <p class="text-black">{{item}}</p>
          </li>
        {% endfor %}
      </ul>
    </div>
    <!-- What We're Looking For -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4">What We're Looking For</h3>
      <ul class="space-y-2">
        {% for item in site.data.home.benefits %}
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"><path d="m9 18 6-6-6-6"></path></svg>
            <p class="text-black">{{item}}</p>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>



<section class="mb-16">
  <h2 class="text-3xl font-bold mb-8 text-center">Our Sponsors</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
    {% for sponsor in site.data.sponsor.sponsors %}
      <a href="{{ sponsor.link }}" target="_blank" rel="noopener" class="flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
        <img src="{{ site.baseurl }}/assets/images/sponsors/{{ sponsor.image }}" alt="{{ sponsor.name }}" class="max-h-24 object-contain">
      </a>
    {% endfor %}
  </div>
</section>


<section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Contact Our Professors</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {% for professor in site.data.home.professors %}
            <div 
              class="flex flex-col items-center bg-white  rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div class="relative mb-4 h-[200px] w-[200px] rounded-full overflow-hidden bg-gray-100">
                <img
                  src="{{ site.baseurl }}{{ professor.image }}"
                  alt="{{ professor.name }}, {{ professor.role }}"
                  width="200"
                  height="200"
                  loading="lazy"
                  class="h-full w-full object-cover"
                />
              </div>
              <h3 class="text-xl font-semibold mb-1">{{professor.name}}</h3>
              <p class="text-gray-600 mb-3">{{professor.role}}</p>
              <a 
                href="mailto:{{professor.email}}"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                {{professor.email}}
              </a>
            </div>
          {% endfor %}
        </div>
  </section>


</div>


