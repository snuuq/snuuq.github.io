---
title: "Tabular Foundation Models - From Tree-based Methods to TabPFN"
series: journal-club
speaker: Sungwoo Park
date: 2026-05-04
materials: "https://files.slack.com/files-pri/T09T5RVHXKR-F0B1JQ58N8M/download/tfm-tabpfn-seminar.pdf?pub_secret=4528c8a2a5"
---

Tabular data dominates scientific and industrial machine learning, yet on `openml.org` 76% of datasets have fewer than 10K rows, and gradient-boosted decision trees have held this regime for two decades. We begin with the structural obstacles that make tabular data hard for deep learning and the four inductive biases (axis-aligned partitioning, piecewise-constant approximation, native heterogeneity, sample efficiency) that GBDTs get for free, then walk through four waves of tabular deep learning that either *copy* these biases (DNF-Net, MLP+, TabNet) or *replace* them with stronger priors (FT-Transformer, SAINT, and finally ICL-based foundation models).

The core of the talk is the TabPFN line. We unpack the Prior-data Fitted Network objective as posterior-predictive approximation under a structural-causal-model prior, walk through TabPFN v2's 2D alternating attention and the TabPFN-2.5 scaling recipe, and discuss the architectural reasons TabPFN is *Bayesian-motivated* rather than truly Bayesian. We then examine TabICL's column-then-row-then-ICL surgery and the softmax-fading argument behind QASSMax in TabICLv2 for scaling beyond ~10K rows, and close with where the paradigm still breaks — prior coverage gaps, the binning head's inability to extrapolate, calibration under-reporting, reproducibility — alongside our own research line on UQ plugins for frozen ICL models and theoretical grounding of the SCM prior.

See [Ye et al., *A Survey on Tabular Data: From Tree-based Methods to Tabular Deep Learning*, ACM Computing Surveys (2025)](https://dl.acm.org/doi/abs/10.1145/3807777), [Hollmann et al., *Accurate predictions on small data with a tabular foundation model*, Nature (2025)](https://www.nature.com/articles/s41586-024-08328-6), [Qu et al., *TabICL: A Tabular Foundation Model for In-Context Learning on Large Data*, ICML (2025)](https://arxiv.org/abs/2502.05564), and [PriorLabs, *TabPFN-2.5: Advancing the State of the Art in Tabular Foundation Models*, arXiv:2511.08667 (2025)](https://arxiv.org/abs/2511.08667) for details.
