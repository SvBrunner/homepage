---
title: AI Assisted Coding
description: My thoughts about using AI to write code
date: 2026-04-06
published: true
author:
  name: Sven
  link: https://svbrunner.ch
tags:
  - ai
  - coding
  - big tech
---

We currently live in an age where AI, specifically LLMs, are omnipresent in our lives. It gets used in very harmless ways, like spellchecking an invitation to a birthday party or settling an argument with your friends about whether cereal counts as soup, but it can also get more dangerous. A sadly very famous example is the death of a 16-year-old teenager who asked ChatGPT for the most successful way to take his life ([link](https://www.theguardian.com/society/2026/mar/31/teenager-asked-chatgpt-most-successful-ways-take-life-inquest-told)).

The dangers of AI are very real, and there are many people out there who concern themselves with these topics and dive into deeper discussions. In this blog post, I don't want to dive deeper into this, though. I prefer talking about a part of LLMs where I at least have some expertise: AI-assisted coding, also known as "vibe coding."

# The Good

I, like most of my peers, have tried and used AI-assisted coding to varying extents. Sometimes I ask a chatbot to generate a small Bash script, in other occurrences, I used a CLI to generate a whole app for a course I attended at university. In most of these occurrences, the output is valid. I also used AI to generate parts of this website.

The biggest upside for me is being flexible in the choices of my tooling. I can use Go for one project, .NET for another, and one of the numerous JavaScript frameworks for a web app. With LLMs, I don't need to remember the actual syntax for all of them. I can describe my idea, the planned functionality, and even patterns, and the LLM does the dirty work, like reading docs or best practices in the specific technology.

Another upside is that I can focus on the parts I prefer in creating software and leave the sometimes tiring or straining parts to an LLM. For example, in my job, I had to create the software architecture for a file interface module used to upload and download files, where many security concerns have to be checked. I preferred designing the architecture with different components, defining standards, and evaluating which direction to go. After all the system design, drawing diagrams, writing an OpenAPI spec, and creating a 24-page-long architecture concept, I had already written down how the system should work, and typing the code seemed like a very redundant experience. Prompting an AI agent to implement this based on all the work I've done before seemed like a very logical conclusion. After all, it is not that different from giving it to another developer to implement.

# The Bad

An experience everyone has had with AI is hallucinations. Sometimes you ask a chatbot how to solve a specific problem in a specific language. The chatbot, very sure of itself as always, proposes the use of one *very convenient* default library utility. After a lot of trying and debugging, you sadly realize that this library utility doesn't exist. These occurrences make the process of *vibe-coding* very frustrating. Sometimes I even feel a sense of betrayal, which is very illogical, because at least current AI models aren't able to have a specific *intent* to do something.

A hallucination can most of the time be found at compile time or after some very small testing. Far more dangerous is if you think the provided code works as you intended it during prompting, but some central features have been implemented lacklustre. This can be very dangerous if the features are security-oriented or if the software needs to run very stably, for example, when managing infrastructure. Out of these problems, I have come to the conclusion for myself that I restrict AI usage in code which is very relevant for security or needs to run very stably and consistently. Many, maybe even most, of my private projects don't fall into either of these two areas.

An effect that I found applying to myself, which is a lot more disturbing than the other two, is that I lose the ability to do certain things myself. As I started learning to code during my apprenticeship, reading documentation and learning new concepts came quite naturally to me. Nowadays, if I come across a new topic, my first instinct is to ask an AI how to do it and to explain it to me. I have to actively force myself to do the research by myself and often fail to do that. This point has a lot of similarities to my media consumption: since social media and their push of short-form content, I struggle a lot more with consuming long-form content or even analog media. I started to force myself to consume short-form content less, and I might have to do the same with AI to not lose my own abilities in learning new topics and technologies. The saddest thing about this is that I like to learn, but even though I like to do it, I have to actively force my brain to do what I like and not give in to the easier way.

# The Ugly

The previously discussed topics are very centered around my personal experiences with AI and its usage, but these aren't the most concerning parts about AI. The more concerning things are behind the models we use and the things we do with them.

## Companies & People

One thing most of the biggest players in the AI business have in common is the ownership: the businesses are either part of American big tech companies (Gemini, Copilot) or very closely related to them (OpenAI, Anthropic). The problem resulting from this majority is big and manifold, touching topics like privacy, data collection, propaganda, and being a danger to democracy in itself. [Here](https://www.amnesty.org/en/latest/news/2025/08/why-are-big-tech-companies-a-threat-to-human-rights/) is an article by Amnesty International which highlights some of these problems and is written by people who are more qualified than me to comment on this.

Part of the companies are also the individuals who own these companies and work as figureheads for these services. They abuse the power they have and only cover that up sometimes. The most common example would be Elon Musk, who is responsible for Grok, maybe the most disturbing mainstream model to date. I assume that it isn't necessary to illuminate which kind of person Elon Musk is and what the problematic parts about him controlling a social media platform and a chatbot are.

Other lesser-known people are also very problematic, like Aravind Srinivas, Perplexity CEO, [saying that layoffs are fine because people hate their jobs anyway.](https://nypost.com/2026/03/31/business/tech-ceo-aravind-srinivas-slammed-after-saying-ai-layoffs-are-fine-because-people-hate-their-jobs-anyway/) A blog post about AI and dangers to democracy can also not live without a quote from Palantir CEO Alex Karp, who sees no problem with his thought that AI [will lessen the power of highly educated, often female voters, who vote mostly Democrat](https://newrepublic.com/post/207693/palantir-ceo-karp-disrupting-democratic-power).

By using AI, we are not only tolerating these companies and their CEOs, we are actively supporting them and their agendas.

## Environment

The environmental impact of AI has been a discussed topic since the first model became publicly available, but it was never the biggest area of discussion. This seems to be similar to the coverage about the environmental crisis in most media outlets, at least that is my personal experience. But regardless of the media coverage, the current AI boom has a big impact on the environment.

An [article by the UN](https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about) talks about how AI-related infrastructure may soon consume six times more water than the whole country of Denmark. Water is obviously a very central resource and currently already very scarce in some areas, and AI exacerbates this.

The electricity consumption of an AI data center is also huge. A request through ChatGPT has been estimated to consume about 10 times the electricity of a Google search. Obviously, this isn't easy to quantify, but that AI uses more energy compared to doing a task without the use of AI is expected. While many countries strive for fewer carbon emissions in their electricity production, the increased energy consumption forces the use of fossil-based energy sources.

## Misinformation

AI can be used to spread misinformation or enforce it. Creating a bot which pushes your ideologies or views on a social media network has never been easier with the use of AI. It can also reinforce your misinformed views by always agreeing with you. AI is regularly mistaken for a trusted source, but the technology itself has no concept of truth or misinformation. You can also just ask a parrot; it might give you more insight into some topics.

Fact-checking your information has also become increasingly harder. In this blog post, I talked about a lot of things, and I tried to find some credible articles about them. The AI slop in my searches was very omnipresent, and filtering these articles was tough. If I have wrong information here or some information is questionable, please inform me, and I will try to adjust this. [My mail](mailto:misinformation@svbrunner.ch)

# Conclusion

Honestly, while writing this text, I realized how bad it is to use AI, especially the big models from big tech, to do such trivial tasks like writing a small website. The consequences of this are bad in comparison to getting something done a little bit faster and being too lazy to do something by myself.

Nonetheless, I struggle with not using these services. They are very convenient, and you also get a feeling of falling behind if you are not using them. As a result, I take this as a personal challenge to at least improve my relationship with AI by switching away from the big tech services to more privacy-oriented services.  I try to switch to other services, like [Lumo](https://lumo.proton.me), [Maple](https://trymaple.ai/) or even a local model. These reduce the concerns regarding the companies behind AI, but other points, like the environmental damage, are still very real and not diminished. Maybe I will at somepoint stop using AI models for writing code, but currently I'll try to stay on that middle path.