---
layout: default
title: Projects
nav: true
nav_order: 1
permalink: /projects
---

# AI Projects

Explore hands-on projects that demonstrate ethical AI development and real-world applications of generative AI learning concepts.

## Coming Soon

We're preparing a collection of practical projects including:

- **Beginner Projects**: Simple generative AI applications to get started
- **Intermediate Challenges**: More complex genAI scenarios with real impact
- **Advanced Implementations**: Production-ready AI agents
- **Open Source Contributions**: Community-driven project collaborations
- **Ethics Case Studies**: Projects focusing on fairness, security and transparency

## Project Philosophy

All projects emphasize:

- Responsible AI development
- Human-first approach
- Transparent methodologies
- Ethical data handling
- Open source collaboration
- Educational value

## Current Industry Partnerships

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {% for project in site.projects %}
  <li class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-6 flex flex-col items-center">
      <a href="{{ site.baseurl }}{{ project.url }}">
        <img src="{{ site.baseurl }}{{ project.img }}" alt="{{ project.title }} logo"
             class="mx-auto h-64 max-w-[400px] object-contain bg-white p-4 transition-transform hover:scale-105" />
      </a>
      <h2 class="text-xl font-semibold mb-2 mt-4 text-center">{{ project.title }}</h2>
      <p class="text-gray-700 text-center">{{ project.description }}</p>
      <a href="{{ site.baseurl }}{{ project.url }}" class="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
    </div>
  </li>
  {% endfor %}
</ul>
