---
layout: page
title: Portfolio
permalink: /portfolio
---

My background is mainly in applied optimization & machine learning. For the last year, I've been working at iSeed Ventures as an investor. A few projects and some brief descriptions are listed below.

<hr/>
<h2><a href="https://arxiv.org/abs/2304.10492">DisjunctiveProgramming.jl: Generalized Disjunctive Programming Models and Algorithms for JuMP</a></h2>
<details>
    <summary>We present a Julia package, DisjunctiveProgramming.jl, that extends the functionality in JuMP.jl to allow modeling problems via logical propositions and disjunctive constraints. </summary>

    Such models can then be reformulated into Mixed-Integer Programs (MIPs) that can be solved with the various MIP solvers supported by JuMP. To do so, logical propositions are converted to Conjunctive Normal Form (CNF) and reformulated into equivalent algebraic constraints. Disjunctions are reformulated into mixed-integer constraints via the reformulation technique specified by the user (Big-M or Hull reformulations). The package supports reformulations for disjunctions containing linear, quadratic, and nonlinear constraints.

{% linkpreview "https://github.com/hdavid16/DisjunctiveProgramming.jl" %}
</details>

<hr/>
<h2><a href="https://docs.google.com/presentation/d/1nWs95Ar3eWqMNnfPgwMIIZhzAtu8QDRs/edit?pli=1&slide=id.p1#slide=id.p1">Robust optimization for the placement of and current through electrodes for neurostimulation</a></h2>
<details>
    <summary>This research aimed to  investigate whether the optimization for electrode placement and current passed through electrodes to generate an electric field in the brain could be made robust to physical variations.</summary>

    The optimization approach used in this study focused on minimizing the current outside of the region being targeted for stimulation with respect to uncertainty in the conductivities of each section of a spherical head model in the worst case. The robust approach used sequential rounds of particle swarm optimization to find worst case conductivity parameters for an electrode setup and convex optimization to find a new electrode setup for new conductivity parameters. The study found that the robust optimization approach was beneficial in worst-case scenarios, reducing the electric field outside of the target region by 12.5% compared to the original setup. However, the robust approach performed worse than the original approach in the average case. This work suggests that this robust electrode design scheme for stimulation experimentation and medical treatments may minimize the neurons outside the targeted region that may be activated, in turn potentially reducing side-effects. Further research is required to validate these findings, compare other robust formulations, and determine how other uncertainties affect the robust optimization performance.

{% linkpreview "https://github.com/shivankj11/robust-neurostim" %}
</details>

<hr/>
<h2><a href="https://drive.google.com/file/d/1InCKqi4o_S4EDNaFgcBoinN9YbCesyfV/view?pli=1">A Convex Differentiable Layer-Based Model-Agnostic Fusion Trained Architecture for Predict-then-Optimize Portfolio Problems</a></h2>
<details>
    <summary>This research aims to improve the performance and explainability of quantitative financial portfolio construction.</summary>
    Our convex differentiable layer based approach, validated on the Qlib platform, shows substantial improvements in cumulative returns and risk-adjusted return performance over traditional two-stage models. Additionally, the fusion-trained model demonstrates better stability and performance than models trained directly using the optimization loss. We also conduct portfolio experiments during the COVID-19 period to highlight the importance of portfolio optimization constraints and the advantages of our model compared to end-to-end models.

{% linkpreview "https://github.com/shivankj11/Differentiable-Layer-Portfolio" %}
</details>

<hr/>
<details style="font-size: 24px; text-align: center">
    <summary> Resume </summary>
<object data="../assets/Shivank_Joshi_Resume.pdf" width="800" height="800" type='application/pdf'></object>
</details>
