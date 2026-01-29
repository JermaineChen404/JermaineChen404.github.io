# Mean-Variance Portfolio Analysis

## Utility and Risk-Return Tradeoff

### Risk Aversion

Investors are **risk averse** and demand a risk premium for taking on additional risk.

To quantify investors' attitudes toward risk and return, we introduce **mean-variance utility**:

$$U=E[r]-\frac{1}{2}A\sigma^2=CE$$

where:
- $A$ measures investor risk aversion
  - $A>0$ : risk averse
  - $A=0$ : risk neutral
  - $A<0$ : risk loving

**Optimal investment** → Highest possible Utility $U$

Different investors with different $A$ values will assign different utility scores to the same investment.

### Deriving Risk Aversion Level

Utility scores are also called **certainty equivalent**. We can derive $A$ using a survey:

Given a risky investment with known expected return $E[r]$ and risk $\sigma$, ask: what risk-free return $E[r_{f}]$ would the investor find equivalent?

$$A=\frac{2(E[r]-E[r_{f}])}{\sigma^2}$$

### Utility Indifference Curve

Investors with risk aversion level $A$ are indifferent among all investments on their indifference curve.

For any investment sitting outside (to the right of) the curve, investors can always find an investment with higher utility by accepting slightly higher return or accepting slightly lower risk.

---

## Portfolio Variance

### Variance-Covariance Matrix

For a portfolio of $n$ assets, the variance-covariance matrix $\Sigma$ contains all pairwise covariances:

$$\Sigma= \begin{bmatrix}
\sigma_1^2 & \sigma_{12} & \cdots & \sigma_{1n} \\
\sigma_{21} & \sigma_2^2 & \cdots & \sigma_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
\sigma_{n1} & \sigma_{n2} & \cdots & \sigma_n^2
\end{bmatrix}$$

In Excel: `=COVAR(data1, data2)`

### Correlation Matrix

A normalized measure of covariance:

$$\rho_{ij}=\frac{\sigma_{ij}}{\sigma_i\sigma_j}$$

where values range from -1 (perfect negative correlation) to +1 (perfect positive correlation).

### Calculating Portfolio Variance

For any portfolio of two assets:

$$\sigma_{p}^2=w_{1}^2\sigma_{1}^2+w_{2}^2\sigma_{2}^2+2w_{1}w_{2}\sigma_{12}$$

For portfolios of more than two assets, use the **bordered covariance matrix method**:

Given weights $w_1, w_2, \ldots, w_n$, the bordered covariance matrix is:

$$B=\begin{bmatrix}
w_1^2\sigma_{11} & w_1w_2\sigma_{12} & \cdots & w_1w_n\sigma_{1n} \\
w_2w_1\sigma_{21} & w_2^2\sigma_{22} & \cdots & w_2w_n\sigma_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
w_nw_1\sigma_{n1} & w_nw_2\sigma_{n2} & \cdots & w_n^2\sigma_{nn}
\end{bmatrix}$$

**Portfolio Variance** is the sum of all entries:

$$\sigma_{P}^2=\sum_{i=1}^{n}\sum_{j=1}^{n} w_{i}w_{j}\sigma_{ij}$$

In Excel: `=MMULT(TRANSPOSE(w), MMULT(Σ, w))`

---

## The Capital Allocation Line (CAL)

When combining a risky portfolio with a risk-free asset, the **CAL** describes all possible risk-return combinations.

### Portfolio Return (Risky + Risk-Free)

$$E(r_{c})=yE(r_{p})+(1-y)r_{f}=r_{f}+y(E(r_{p})-r_{f})$$

where:
- $y$ = weight in risky portfolio
- $1-y$ = weight in risk-free asset
- $E(r_{p})-r_{f}$ = risk premium

### Portfolio Variance (Risky + Risk-Free)

$$\sigma_{c}^2=y^2\sigma_{p}^2+(1-y)^2\sigma_{f}^2+2y(1-y)\sigma_{pf}$$

Since $\sigma_{f}^2=0$ and $\sigma_{pf}=0$ (risk-free asset):

$$\sigma_{c}=y\sigma_{p}$$

### The CAL Equation

Expressing portfolio return in terms of portfolio risk:

$$E(r_{c})=r_{f}+\frac{E(r_{p})-r_{f}}{\sigma_{p}} \cdot \sigma_{c}$$

The slope is the **Sharpe ratio**:

$$\text{Sharpe Ratio}=\frac{E(r_{p})-r_{f}}{\sigma_{p}}$$

This measures the reward (excess return) per unit of risk taken.

### Borrowing vs. Lending

In reality, the borrowing rate exceeds the lending rate: $r_{b}>r_{f}$

This creates a **kinked CAL**: the slope is steeper for borrowing than lending.

### Optimal Allocation

For an investor with risk aversion $A$, the optimal weight in the risky portfolio is:

$$y^*=\frac{E(r_{p})-r_{f}}{A\sigma_{p}^2}$$

Alternatively, the optimal allocation is where the investor's **indifference curve** is tangent to the **CAL**.

---

## Minimum-Variance Frontier

### Portfolio Diversification

The benefits of diversification depend on the average correlation across all assets:

- **Low correlation** → Greater diversification benefits → Lower portfolio risk
- **High correlation** → Limited diversification benefits → Higher portfolio risk

### Finding the Minimum Variance Portfolio (2 Assets)

For a two-asset portfolio, the minimum variance weight is:

$$w_{1}^{MV}=\frac{\sigma_{2}^2-\sigma_{12}}{\sigma_{1}^2+\sigma_{2}^2-2\sigma_{12}}$$

The minimum-variance frontier is the set of all portfolios with minimum risk for each target return level.

### The Optimal Risky Portfolio

**Key insight:** The minimum variance portfolio is NOT necessarily optimal.

The **optimal risky portfolio** $P^*$ is the one with the **maximum Sharpe ratio**, lying on the minimum-variance frontier.

**Important:** $P^*$ is universal for all investors regardless of risk aversion, since it ensures the highest reward-to-risk ratio.

### Two-Asset Optimal Portfolio

Let $R_1=E(r_1)-r_f$ and $R_2=E(r_2)-r_f$:

$$w_1^*=\frac{R_1\sigma_2^2-R_2\sigma_{12}}{R_1\sigma_2^2+R_2\sigma_1^2-(R_1+R_2)\sigma_{12}}$$

### General Procedure for Portfolio Construction

1. **Input (Security Analysis)**
   - Expected returns for each asset
   - Variance-covariance matrix

2. **Construct Efficient Frontier**
   - Find minimum-variance portfolio for each target expected return

3. **Draw CAL**
   - Identify optimal risky portfolio $P^*$ (maximum Sharpe ratio)

4. **Find Appropriate Allocation**
   - Adjust weight between $P^*$ and risk-free asset based on individual risk aversion
   - Use indifference curves to find optimal allocation

---

## Mutual Fund Theorems

### The Two-Fund Separation Theorem

All investors should hold only two "mutual funds":
1. The safe (risk-free) asset
2. The optimal risky portfolio $P^*$

The optimal risky portfolio $P^*$ is unique and sufficient for all investors.

### Key Assumptions

- All returns are normally distributed (completely described by mean and variance)
- All assets are tradable with no transaction costs
- All investors have the same information and can perform the same analysis
