---
title: Introduction to Flow Matching
series: journal-club
speaker: Heejoon Byun
date: 2026-03-23
materials: "https://files.slack.com/files-pri/T09T5RVHXKR-F0AN3DMSBAR/download/intro_to_flow_matching.pdf?pub_secret=1c714fdf13"
---

Flow matching is a recent framework for training generative models that unifies the advantages of diffusion models and optimal transport. Instead of learning to reverse a noising process, flow matching learns to transport data to noise via a vector field. This approach simplifies training by removing the need for iterative sampling and allows for exact likelihood evaluation. This talk will provide an introduction to the core ideas of flow matching, discuss its connection to optimal transport, and review recent advances in the field.

See [Reference lecture notes](https://diffusion.csail.mit.edu/2026/docs/lecture_notes.pdf) for details.
