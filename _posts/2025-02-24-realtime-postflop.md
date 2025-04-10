---
layout: post_noshare
title:  Real-Time Poker Postflop Solver
categories: [Code, Poker]
excerpt: I'm working on extending WASM-Postflop for real-time Texas Hold'em solves (should be easy input, super clear display / recommendations and some ability to input session config). Also looking to incorporate some of the ideas from Meta's Pluribus. If this is interesting to you, drop me a message!
---

I'm working on extending [WASM-Postflop](https://github.com/b-inary/wasm-postflop) for real-time solves. The most used poker sites today are more popular than ever, but have [ridiculous rake structures](https://clubwptgold.zohodesk.com/portal/en/kb/articles/rake). This means statistical profit is almost impossible, especially for the average recreational-but-semi-studied player in the average low-mid-stakes game.

Real-time post-flop strategy probably means a few things:
- I expect to decrease number of episodes
- Needs to have really clean UI to throw in pre-flop actions and cards quickly
- Probably needs to surface actual recommendations because (solve + read range chart) time may be too long for playing online
- Need to simplify policy output for real-time play
- Side feature: Maybe include randomizer along with results
- Session config: player types, rake, etc

This project will definitely be closed-source. Reach out if you are interested in poker and want to build / profit.

## Reference List
- [Superhuman AI for multiplayer poker, 2019](https://www.science.org/cms/asset/910714a7-ee2a-486e-9970-42fb893b08d9/pap.pdf)
- [Regret Minimization in Games with Incomplete
Information, 2007](https://poker.cs.ualberta.ca/publications/NIPS07-cfr.pdf)
- [https://ai.meta.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/](https://ai.meta.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/)
- [Solving Imperfect-Information Games
via Discounted Regret Minimization, 2018](https://arxiv.org/pdf/1809.04040)
- [Approximating Game-Theoretic Optimal Strategies for Full-scale Poker, 2003](https://poker.cs.ualberta.ca/publications/IJCAI03.pdf)

---