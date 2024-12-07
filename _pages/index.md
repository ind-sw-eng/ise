---
layout: home
title: 404
permalink: /

---



<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center max-w-screen ">
  <div class="container mx-auto px-4 py-8 md:py-16">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          ISE Course: Industrial Software Engineering
        </h1>
        <p class="text-xl mb-8">
          Bridging academia and industry through innovative software projects
        </p>
        <a
          href="{{ site.baseurl }}/about"
          class="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-lg"
          >Learn More</a
        >
      </div>
      <div class="md:w-1/2">
        <img
          src="{{ site.baseurl }}/assets/images/hero.png"
          alt="Hero"
          class="w-full"
        />
      </div>
    </div>
  </div>
</div>

<main class="   px-4">


 <section class="mb-16 text-center mt-10">
          <h2 class="text-3xl font-bold mb-4">Welcome to the ISE Course</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our Industrial Software Engineering course is shaping the future of software development through hands-on industry collaboration.
          </p>
  </section>


  <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center">Why Partner with Us?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">           
           {% for partner in site.data.home.whypartner %}
              <div key={{partner.title}} class="bg-white rounded-lg shadow-md p-6  flex flex-col items-center text-center">
                <div class="h-12 w-12 text-blue-600 mb-4">{{partner.icon}}</div>
                <h3 class="text-xl font-semibold mb-2">{{partner.title}}</h3>
                <p class="text-gray-600">{{partner.description}}</p>
              </div>
            {% endfor %}
          </div>
</section>


<section class="mb-16">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">What We're Looking For</h2>
            <ul class="space-y-2">
              {% for item in site.data.home.benefits %}
                <li  class="flex items-start ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"><path d="m9 18 6-6-6-6"></path></svg>
                  <p class="text-black">{{item}}</p>
                </li>
              {% endfor %}
            </ul>
          </div>
</section>


<section class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center">Course Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
</section>


<section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Contact Our Professors</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {% for professor in site.data.home.professors %}
            <div 
              class="flex flex-col items-center bg-white  rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div class=" relative mb-4 rounded-full overflow-hidden">
                <Image
                  src="{{professor.image}}"
                  alt={{professor.name}}
                  fill
                  class="object-cover h-[200px]"
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


</main>


