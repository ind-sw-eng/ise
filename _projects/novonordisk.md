---
layout: post
title: Novo Nordisk
description: AI agents for Scrum roles
img: /assets/images/logos/novonordisk.png
permalink: /projects/novonordisk/
importance: 5
category: work
related_publications: false
testimonial: "By the end of the project the team had gone beyond what we planned, delivering a working agentic Scrum prototype we are excited to build on. A strong, transparent collaboration that left us with real value to take forward."
testimonial_author: "Product Owner, Novo Nordisk"
---

## Project Overview

Novo Nordisk partnered with ISE students to build an MVP exploring how far the Scrum roles of Product Owner and Scrum Master can be supplemented, or even replaced, by a Claude-based multi-agent system. The agents plan, prioritise and document work autonomously, and already generated a full sprint backlog on their own.

## Platform Features

1. **Product Owner & Scrum Master agents**: AI agents that discuss priorities, review the project vision and agree a sprint plan autonomously
2. **Scrum tool integrations**: Connectors for the everyday tools of a Scrum team — Outlook, GitHub and a graphical planning board
3. **Orchestrated multi-agent design**: A coordinator agent that delegates tasks to specialised subagents and supports inter-agent dialogue

## Technical Stack

The system was developed using:
1. Python as the primary backend language
2. LangGraph for stateful, multi-agent orchestration
3. A Claude-based language model driving the agents
4. A REST API connecting the agents to their tool integrations

## Impact

The agentic system generated an entire Sprint backlog on its own, laying the foundation for a cloud-deployed assistant that could support development teams across Novo Nordisk.
