---
title: "FourCastNet: a weather forcasting model using Neural Operators"
series: journal-club
speaker: Jikwang Kim
date: 2026-06-01
materials: https://slack-files.com/T09T5RVHXKR-F0B75U2J9UM-5ddebdcd58
---

**FourCastNet 1** casts global weather forecasting as a learned, resolution-invariant neural operator: an Adaptive Fourier Neural Operator (AFNO) with a ViT backbone, trained on ERA5 at $0.25^\circ$ and rolled out autoregressively. It replaces the costly $O(N^2)$ self-attention with an $O(N\log N)$ Fourier mixer, but its FFT implicitly assumes a flat domain and distorts at the poles, limiting stable rollouts to $\sim$25 days.

**FourCastNet 2** fixes the geometry by replacing the FFT with the Spherical Harmonic Transform (SHT), giving an $SO(3)$-equivariant Spherical Fourier Neural Operator (SFNO). Respecting the sphere's symmetry yields stable autoregressive rollouts for a full year. It remains deterministic, however, so its forecasts blur toward the ensemble mean and lose fine scales.

**FourCastNet 3** makes the model probabilistic and purely convolutional: it augments the SFNO with local DISCO convolutions (anisotropic filters the spectral route cannot represent), and a hidden Markov formulation conditioned on a spherical-diffusion latent generates ensembles in a single forward pass. Trained end-to-end with a combined spatial + spectral CRPS objective on 1024+ GPUs, it matches GenCast and beats IFS-ENS at 8--60$\times$ lower cost, staying sharp and spectrally faithful out to 60 days.

See [FourCastNet 3: A geometric approach to probabilistic machine-learning weather forecasting at scale](https://arxiv.org/abs/2507.12144) for details.
