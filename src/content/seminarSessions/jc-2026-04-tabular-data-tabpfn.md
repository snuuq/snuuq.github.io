---
title: "A Survey on Tabular Data — Tree-based Methods, Deep Learning, and TabPFN"
series: journal-club
speaker: Sungwoo Park
date: 2026-05-04
# materials: "Fill HERE"
---

Tabular data remains the dominant modality in scientific and industrial machine learning, yet has long been a stronghold of gradient-boosted decision trees rather than deep learning. We follow the recent ACM survey *A Survey on Tabular Data: From Tree-based Methods to Tabular Deep Learning* to map the landscape — from GBDTs (XGBoost, LightGBM, CatBoost) through specialized tabular architectures (TabNet, FT-Transformer, NODE) to in-context-learning–based foundation models.

We then turn to the TabPFN line, which frames supervised learning as a single forward pass that approximates (kind of) Bayesian inference under a synthetic prior and now reaches significant improvements on real tabular benchmarks. Drawing on our own experiments and a series of recent critical works, we use TabPFN as a vehicle to examine where the paradigm still breaks — in the structure of its synthetic prior, the metrics it is evaluated under, the quality of its internal representations, and the data regimes it was never designed for.

See [Ye et al., *A Survey on Tabular Data: From Tree-based Methods to Tabular Deep Learning*, ACM Computing Surveys (2025)](https://dl.acm.org/doi/abs/10.1145/3807777), [Hollmann et al., *Accurate predictions on small data with a tabular foundation model*, Nature (2025)](https://www.nature.com/articles/s41586-024-08328-6), and [Grinsztajn et al., *TabPFN-2.5: Advancing the State of the Art in Tabular Foundation Models*, arXiv:2511.08667 (2025)](https://arxiv.org/abs/2511.08667) for details.
