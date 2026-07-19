---

title: "Building an AI Chatbot with OpenRouter, Gemini & LangChain: A Production-Ready Approach"
description: "Learn how I built a production-ready AI chatbot using Next.js 16, OpenRouter, Google Gemini, LangChain, and MongoDB. Explore the architecture, implementation, security, and best practices behind a modern AI-powered web application."
slug: "building-ai-chatbot-openrouter-gemini-langchain"
date: "2026-07-19"
author: "Habib Ul Haq"
category: "Artificial Intelligence"
tags:

* AI Chatbot
* OpenRouter
* Gemini
* LangChain
* Next.js
* React
* TypeScript
* LLM

keywords:

* AI Chatbot Development
* OpenRouter API
* Google Gemini
* LangChain Tutorial
* Next.js AI Chatbot
* Production AI Applications
* Agentic AI

readingTime: "12 min"

## featured: true

# Building an AI Chatbot with OpenRouter, Gemini & LangChain

## Introduction

Artificial Intelligence is transforming the way users interact with websites. Instead of searching through multiple pages to find information, visitors now expect instant, conversational answers powered by Large Language Models (LLMs).

When designing my portfolio website, I wanted to go beyond a traditional contact form or FAQ section. My goal was to create an AI assistant capable of understanding questions about my projects, technical skills, experience, and services—providing visitors with a fast, engaging, and interactive experience.

This article explores the architecture, design decisions, and technologies behind that chatbot, along with the lessons I learned while building a production-ready AI solution.

---

# Why Build an AI Chatbot for a Portfolio?

A portfolio should do more than display information—it should communicate expertise.

An AI chatbot transforms a static website into an interactive experience by allowing visitors to ask natural questions such as:

* What technologies do you specialize in?
* Tell me about your AI projects.
* Which services do you offer?
* How can you help my business?
* What experience do you have with Agentic AI?
* Can you explain your supply chain background?

Instead of manually searching through pages, visitors receive contextual answers within seconds.

This creates a more engaging experience while demonstrating practical AI implementation skills.

---

# Project Objectives

Before writing any code, I defined a clear set of goals for the chatbot:

* Deliver accurate and context-aware responses.
* Maintain low response latency.
* Support multiple AI providers for improved reliability.
* Handle failures gracefully with automatic fallback.
* Protect the API against abuse through rate limiting.
* Render responses in rich Markdown format.
* Integrate seamlessly into the website without affecting performance.

These objectives influenced every architectural decision throughout the project.

---

# Choosing the Right Technology Stack

The chatbot combines modern frontend technologies with powerful AI services to deliver a smooth conversational experience.

## Frontend

The user interface is built using:

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion

These technologies provide a responsive and highly interactive interface that feels fast and intuitive.

---

## Backend

The server-side logic is implemented using Next.js API Routes.

Responsibilities include:

* Receiving user prompts.
* Validating requests.
* Applying rate limits.
* Communicating with AI providers.
* Formatting responses.
* Returning structured JSON to the frontend.

Keeping all AI interactions on the server ensures that API keys remain secure and never reach the client.

---

# Why OpenRouter?

One of the first architectural decisions was selecting an AI provider.

Rather than relying on a single model, I chose **OpenRouter** as the primary gateway because it offers access to multiple leading language models through a unified API.

This approach provides several advantages:

* Access to a wide range of models.
* Flexibility to switch providers without changing application logic.
* Competitive pricing.
* Consistent API structure.
* Improved scalability for future enhancements.

Using OpenRouter also makes it easier to experiment with newer models as they become available.

---

# Implementing Gemini as a Fallback

No production system should depend entirely on a single external service.

To improve reliability, I implemented **Google Gemini** as a fallback provider.

The workflow is straightforward:

1. Send the request to OpenRouter.
2. If the request succeeds, return the response.
3. If OpenRouter is unavailable or encounters an error, automatically retry using Gemini.
4. Return the fallback response to the user.

This strategy ensures a more resilient user experience while minimizing downtime.

---

# Context-Aware Conversations

A useful chatbot should understand the purpose of the website.

Instead of answering questions in isolation, the assistant is provided with structured context about:

* Professional background.
* Technical expertise.
* Portfolio projects.
* Services offered.
* AI specializations.
* Supply chain experience.

This additional context allows the chatbot to generate responses that are more relevant, accurate, and aligned with the visitor's intent.

Rather than acting as a generic AI assistant, it becomes a knowledgeable guide specifically focused on the portfolio.

---

# Security Considerations

AI applications exposed to the public require careful security planning.

To reduce the risk of abuse, several protections were built into the chatbot:

* Server-side API key management.
* Request validation.
* Rate limiting.
* Graceful error handling.
* Controlled response formatting.
* Secure environment variables.

These measures help protect both the infrastructure and the user experience.

---

# Rich Markdown Responses

Instead of displaying plain text, the chatbot supports Markdown rendering.

This enables:

* Headings
* Bullet lists
* Numbered lists
* Code blocks
* Hyperlinks
* Bold and italic formatting

Well-formatted responses are easier to read and significantly improve the overall conversation experience.

---

# Lessons Learned

Building an AI chatbot involves much more than connecting an API.

Some of the most valuable lessons from this project include:

* Reliable systems should never rely on a single AI provider.
* Prompt quality has a major impact on response accuracy.
* Good user experience is just as important as model performance.
* Security must be considered from the beginning.
* AI should enhance user workflows rather than complicate them.

These principles continue to guide how I approach every AI project.

---

# Future Improvements

The chatbot will continue to evolve with additional capabilities, including:

* Retrieval-Augmented Generation (RAG) for project documentation.
* Conversation memory.
* Multi-agent collaboration.
* Voice interaction.
* File upload and analysis.
* Personalized responses.
* Analytics dashboard for AI usage.
* Tool-calling for business automation.

These enhancements will transform the chatbot from a conversational assistant into a comprehensive AI-powered business assistant.

---

# Conclusion

An AI chatbot is no longer a novelty—it has become an essential component of modern web experiences.

By combining Next.js, OpenRouter, Gemini, and thoughtful system design, I created a chatbot that is reliable, scalable, and capable of providing meaningful interactions with visitors.

More importantly, the project demonstrates how AI can be integrated into real-world applications to improve communication, automate information delivery, and create more engaging digital experiences.

As AI technologies continue to evolve, intelligent assistants will play an increasingly important role in how businesses connect with users. Building production-ready systems today lays the foundation for the next generation of AI-powered applications.

---

# Frequently Asked Questions

### Why use OpenRouter instead of a single model provider?

OpenRouter provides access to multiple LLMs through a single API, making it easier to experiment with different models and improve flexibility.

### Why is Gemini used as a fallback?

A fallback provider increases reliability by ensuring that users can still receive responses if the primary service becomes unavailable.

### Is the chatbot secure?

Yes. API keys are stored securely on the server, requests are validated, and rate limiting helps protect against abuse.

### Can this architecture be extended?

Absolutely. Features such as RAG, memory, voice interaction, and multi-agent workflows can be integrated without major architectural changes.

---

## About the Author

Habib Ul Haq is a Full-Stack & Agentic AI Developer with a background in supply chain management. He specializes in building intelligent business applications, AI chatbots, automation platforms, and scalable web solutions using modern technologies such as Next.js, Python, TypeScript, LangChain, and Large Language Models.

---

## Call to Action

Looking to build an AI-powered chatbot, automate business workflows, or develop intelligent web applications? Feel free to connect with me. I enjoy creating practical AI solutions that solve real business challenges.
