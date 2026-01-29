# Capital Asset Pricing Model (CAPM)

## Motivation

Find the expected return of individual stocks and profit from pricing discrepancies (mispricing).

## Key Assumptions

- All investors use the same Markowitz procedure to analyze investments
- Investors differ only in **wealth** and **risk aversion**

---

## The Market Portfolio is Optimal

### The Fundamental Insight: $P^*=M$

The **market portfolio** is mean-variance efficient/optimal, i.e., $P^*=M$.

**Intuition:** Despite investors having different risk aversion levels and thus different optimal allocations, when we aggregate across all investors, their combined demand for the risky portfolio must equal the market supply. This forces the market portfolio to be on the efficient frontier.

Since borrowing and lending cancel out at the aggregate level:

$$P^*=M \iff y_{agg}^*=1$$

This means the market portfolio is the same as the optimal risky portfolio for the entire economy.

### Two-Investor Example

Consider two investors with wealth $W_1, W_2$ and risk aversion $A_1, A_2$.

Their optimal allocations are:

$$y_1^*=\frac{E(r_m)-r_f}{\sigma_m^2} \cdot \frac{1}{A_1}$$

$$y_2^*=\frac{E(r_m)-r_f}{\sigma_m^2} \cdot \frac{1}{A_2}$$

The aggregate allocation weight is:

$$y_{agg}^*=\frac{W_1y_1^*+W_2y_2^*}{W_1+W_2}=\frac{E(r_m)-r_f}{\sigma_m^2} \cdot \frac{1}{\bar{A}}$$

where $\bar{A}$ is the **weighted harmonic average** of risk aversions:

$$\bar{A}=\frac{W_1+W_2}{\frac{W_1}{A_1}+\frac{W_2}{A_2}}$$

Setting $y_{agg}^*=1$:

$$E(r_M)-r_f=\bar{A}\sigma_m^2$$

---

## Market Risk and Return

### Market Risk Premium

For more than two investors, the conclusion generalizes:

$$E(r_m)-r_f=\bar{A}\sigma_m^2$$

where $\bar{A}$ is the weighted harmonic average of all investors' risk aversion coefficients.

### Breaking Down Market Returns

The market return is a weighted sum of individual stock returns:

$$E(r_m)=\sum_{i=1}^{n}w_i E(r_i)$$

Thus, stock $x$'s contribution to market risk premium is:

$$w_x(E(r_x)-r_f)$$

### Breaking Down Market Risk

#### Variance Decomposition (2-Asset Case)

$$\sigma_m^2=w_1^2\sigma_1^2+w_2^2\sigma_2^2+2w_1w_2\sigma_{12}$$

Stock 1's contribution to market variance:

$$w_1(w_1\sigma_1^2+w_2\sigma_{12})=w_1\sigma_{1m}$$

Stock 2's contribution to market variance:

$$w_2(w_2\sigma_2^2+w_1\sigma_{12})=w_2\sigma_{2m}$$

where $\sigma_{im} = \text{Cov}(r_i, r_m)$ is the covariance between asset $i$ and the market.

#### General Formula

Security $x$'s contribution to market risk:

$$\sigma_m^2(x)=w_x\sigma_{xm}$$

where:

$$\sigma_{xm}=\text{Cov}(r_x,r_m)=\text{Cov}\left(r_x, \sum w_i r_i\right)=\sum w_i \text{Cov}(r_x, r_i)$$

### Reward-to-Risk Ratio

The security reward-to-risk is:

$$\frac{\text{x's contribution to market risk premium}}{\text{x's contribution to market risk}}=\frac{w_x(E(r_x)-r_f)}{w_x\sigma_{xm}}=\frac{E(r_x)-r_f}{\sigma_{xm}}$$

For the market portfolio:

$$\frac{E(r_m)-r_f}{\sigma_m^2}$$

---

## The CAPM Equation

### Equilibrium Condition

By no-arbitrage, security prices adjust until they offer the same reward-to-risk as the market portfolio:

$$\frac{E(r_x)-r_f}{\sigma_{xm}}=\frac{E(r_m)-r_f}{\sigma_m^2}$$

Solving for expected return:

$$E(r_x)=r_f+\frac{\sigma_{xm}}{\sigma_m^2}(E(r_m)-r_f)$$

Or equivalently:

$$E(r_x)=r_f+\beta_x(E(r_m)-r_f)$$

where:

$$\beta_x=\frac{\sigma_{xm}}{\sigma_m^2}=\frac{\text{Cov}(r_x, r_m)}{\text{Var}(r_m)}$$

### Interpretation of Beta

- $\beta > 1$: Stock is more volatile than market (higher risk, higher expected return)
- $\beta = 1$: Stock moves with the market
- $\beta < 1$: Stock is less volatile than market (lower risk, lower expected return)

---

## Security Market Line (SML)

The **Security Market Line** plots the CAPM relationship: expected return vs. beta.

All fairly-priced securities lie on the SML. Securities above the line are underpriced (buy), and those below are overpriced (sell).

---

## Estimating Beta by Regression

### The Regression Model

The observed CAPM relationship:

$$r_{it}-r_{ft}=\beta_i(r_{mt}-r_{ft})+e_{it}$$

### Least Squares Estimation

Minimize the sum of squared residuals:

$$\min \sum e_{it}^2$$

The best estimate of beta:

$$\hat{\beta}_i=\frac{\text{Cov}(r_i, r_m)}{\text{Var}(r_m)}$$

---

## Seeking Alpha

### Jensen's Alpha

Introduce an intercept term:

$$r_{it}-r_{ft}=\alpha_i+\beta_i(r_{mt}-r_{ft})+e_{it}$$

where $\alpha_i$ is **Jensen's alpha** (the abnormal return).

### Interpretation

- $\alpha > 0$: Stock outperforms CAPM prediction (underpriced, "winning" security)
- $\alpha = 0$: Stock is fairly priced per CAPM
- $\alpha < 0$: Stock underperforms CAPM prediction (overpriced, "losing" security)

### Statistical Significance

Use t-statistic to test if alpha is statistically significant:

$$t\text{-statistic}=\frac{\alpha_i}{\text{std}(\alpha_i)}$$

Only alphas with high t-statistics indicate true excess returns that survive after accounting for risk and luck.
