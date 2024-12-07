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
                  <span class="text-black">{{item}}</span>
                </li>
              {% endfor %}
            </ul>
          </div>
</section>

</main>


## Partner with Us

Join our network of industrial partners and contribute to shaping the next generation of software engineers. By sponsoring a project, you'll gain access to fresh perspectives, innovative solutions, and potential future employees.

## Benefits for Sponsors

- Access to a pool of talented, motivated students
- Fresh perspectives on your software challenges
- Opportunity to influence curriculum and skill development
- Early recruitment opportunities
- Exposure to cutting-edge academic research and methodologies

## What We're Looking For

- Real-world software development projects
- Challenging problems that require innovative solutions
- Projects that can be completed in a semester timeframe
- Opportunities for students to work with industry-standard tools and practices
- Mentorship and guidance from industry professionals

## Course Overview

The ISE course is a second-year project where students actively participate in building working software according to the requirements of industrial sponsors. Working in teams of 7-9, students use the Scrum method to plan, structure, and execute projects, integrating code, analyzing, and optimizing programs.

### Key Features:

- Real industrial projects with different sponsors
- Application of Agile methodology - Scrum
- Exposure to new technologies and programming languages
- Practical application of software engineering skills
- Development of teamwork and communication skills

## Learning Outcomes

- Plan and execute large-scale software development projects
- Apply Scrum methodology in real-world scenarios
- Analyze and solve complex software engineering problems
- Collaborate effectively with industrial partners
- Adapt to new technologies and programming languages

## Student Engagement

<section class="mb-16">
  <h2 class="text-3xl font-bold mb-8 text-center">Student Engagement</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {% for engagement in site.data.home.engagement %}
      <div key={{engagement.title}} class="bg-white rounded-lg shadow-md p-4 text-center justify-center items-center flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-black">{{engagement.title}}</h3>
        <p class="text-4xl font-bold text-blue-600">{{engagement.percentage}}</p>
      </div>
    {% endfor %}
  </div>
</section>

## Get Involved

We're always looking for new industrial partners to collaborate with. If you're interested in sponsoring a project or learning more about how you can get involved, please get in touch with us.

[Contact Us](#)