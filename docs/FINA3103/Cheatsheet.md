# FINA3103 Intermediate Investment Cheat Sheet
*By CHEN, Hejian*

---

## Stats Formula

Variance: $\sigma_x^2=Cov(x,x)$

$Cov(x,y)=\sigma_{xy}=\frac{1}{n-1}\sum(x_i-\bar{x})(y_i-\bar{y})$

$Var(ax+by)=a^2\sigma_x^2+b^2\sigma_y^2+2ab\sigma_{xy}$

Correlation: $\rho_{xy}=\frac{\sigma_{xy}}{\sigma_x\sigma_y}$

$Cov(x,ay+bz)=aCov(x,y)+bCov(x,z)$

---

## Buying on Margin

Market Orders: Buy/Sell at prevailing prices  
Limit Orders: Buy/Sell only if conditions are met  
If price falls below the limit: Limit Buy order & Stop-loss sell order

Marginal call price:
$P=\frac{\text{Loan}}{(1-\text{Maintenance Margin})\times\text{Shares}}$

---

## Short Selling

$$
\text{Margin}=\frac{\text{Equity}}{\text{Market Value of Short position}}
$$

$\text{Initial Margin}=\text{Equity}/\text{Short Proceeds}$  
$\text{Assets}=\text{Short proceeds}+\text{Initial cash}$

Marginal call price:

$$
P=\frac{\text{Assets}}{(1+M)\times\text{Shares}}
$$

---

## Utility

Utility $\iff$ Certainty Equivalent:

$$
U=E[r]-\frac{1}{2}A\sigma^2=CE
$$

- $A>0$ : risk averse
- $A=0$ : risk neutral
- $A<0$ : risk loving

$$
A=\frac{2(E[r]-E[r_{f}])}{\sigma^2}
$$

![Utility Diagram](1.png)

---

## Simple Prospect Risk

![Simple Prospect Risk Diagram](7.png)

Expected return: $E[r]=P(x)r(x)+P(y)r(y)$  
$\sigma_r^2=P(x)(r(x)-E[x])^2+P(y)(r(y)-E[y])^2$

---

## Portfolio Variance

Variance-Covariance Matrix: $\Sigma=\begin{pmatrix}
\sigma_x^2 & \sigma_{xy} \\
\sigma_{yx} & \sigma_y^2
\end{pmatrix}$

Correlation Matrix:

$$
\rho=\begin{pmatrix}
\frac{\sigma_{x}^2}{\sigma_x \sigma_y} & \frac{\sigma_{xy}}{\sigma_x \sigma_y} \\
\frac{\sigma_{yx}}{\sigma_x \sigma_y} & \frac{\sigma_{y}^2}{\sigma_x \sigma_y}
\end{pmatrix}=\begin{pmatrix}
1 & \rho_{xy} \\
\rho_{yx} & 1
\end{pmatrix}
$$

For 2 assets portfolio:

$$
\sigma_{p}^2=w_{1}^2\sigma_{1}^2+w_{2}^2\sigma_{2}^2+2w_{1}w_{2}\sigma_{12}
$$

For n assets portfolio:

$$
\sigma_{p}^2=\sum_{i=1}^{n}\sum_{j=1}^{n}w_{i}w_{j}\sigma_{ij}
$$

For 1 risky 1 risk-free asset portfolio:

$$
E[r_c]=r_{f}+w(E(r_{p})-r_{f})
$$

$$
\sigma_{c}=w\sigma_{p}
$$

where $w$ is the risk weight, $c$ is the combined portfolio, $p$ is the risky portfolio and $f$ is the risk-free asset.

$$
E(r_{c})=r_{f}+\frac{E(r_{p})-r_{f}}{\sigma_{p}} \cdot \sigma_{c}
$$

where the slope $\frac{E(r_{p})-r_{f}}{\sigma_{p}}$ is the **Sharpe Ratio** that measures the reward to variability we take from the risky investment.

![Portfolio Variance Diagram 1](2.png)
![Portfolio Variance Diagram 2](3.png)

---

## Portfolio Variance (Utility)

$$
U_{c}=E[r_{c}]-\frac{1}{2}A\sigma_{c}^2=-\frac{1}{2}A\sigma_{p}^2\,y^2+(E[r_{p}]-r_{f})\,y+r_{f}
$$

$$
y^*=\frac{E(r_{p})-r_{f}}{A\sigma_{p}^2}
$$

$$
A=\frac{2(E[r]-E[r_{f}])}{\sigma^2}
$$

---

## Minimum-Variance Frontier

For 2 assets portfolio:

\begin{align*} 
\sigma_{c}^2&=w^2\sigma_{1}^2+(1-w)^2\sigma_{2}^2+2w(1-w)\sigma_{12}\\
&=(\sigma_{1}^2+\sigma_{2}^2-2\sigma_{12})w^2+(2\sigma_{12}-2\sigma_{2}^2)w+\sigma_{2}^2
\end{align*}

the minimum variance portfolio with weight:

$$
w_{1}^{MV}=\frac{\sigma_{2}^2-\sigma_{12}}{\sigma_{1}^2+\sigma_{2}^2-2\sigma_{12}}
$$

![Minimum-Variance Frontier Diagram](5.png)

For two risky assets, let $R_{1}=E(r_{1})-r_{f}$ and $R_{2}=E(r_{2})-r_{f}$

$$
w_{1}^*=\frac{R_{1}\sigma_{2}^2-R_{2}\sigma_{12}}{R_{1}\sigma_{2}^2+R_{2}\sigma_{1}^2-(R_{1}+R_{2})\sigma_{12}}
$$

Thus, we can obtain the risk weight $y^*$:

$$
E(r_p^*)=w_1^*E(r_1)+(1-w_1^*)E(r_2)
$$

$$
\sigma_{p^*}^2=w_{1}^{*2}\sigma_{1}^2+(1-w_{1}^{*})^2\sigma_{2}^2+2w_{1}^{*}(1-w_{1}^{*})\sigma_{12}
$$

$$
y^*=\frac{E(r_{p^*})-r_{f}}{A\sigma_{p^*}^2}
$$

---

## Appendix

![Appendix Diagram 1](8.png)
![Appendix Diagram 2](9.png)
![Appendix Diagram 3](10.png)

---

## Mutual Fund Theorem

Mutual Fund Theorem Assumptions:
- All returns are normally distributed (described by only two parameter $E(r)$ and $\sigma$)
- All assets are tradable
- No transaction costs

---

## CAPM Market Return

$$
P^*=M\iff y_{agg}^*=1
$$

The market return is

$$
E(r_{M})-r_{f}=\bar{A}\sigma_{m}^2
$$

where $\bar{A}$ is the weighted harmonic average risk aversion of all investors in the market. For 2 investors:

$$
\bar{A}=\frac{W_{1}+W_{2}}{\frac{W_{1}}{A_{1}}+\frac{W_{2}}{A_{2}}}
$$

Proof:

$$
y_{1}^*=\frac{E(r_{m})-r_{f}}{\sigma_{m}^{2}}\cdot\left( \frac{1}{A_{1}} \right)
$$

$$
y_{2}^*=\frac{E(r_{m})-r_{f}}{\sigma_{m}^{2}}\cdot\left( \frac{1}{A_{2}} \right)
$$

\begin{align*}
y_{agg}^*&=\frac{\text{Total Investment in M}}{\text{Total Wealth of Economy}} \\
&=\frac{W_{1}y_{1}^*+W_{2}y_{2}^*}{W_{1}+W_{2}} \\
&=\frac{E(r_{m})-r_{f}}{\sigma_{m}^{2}}\cdot \frac{\left( \frac{W_{1}}{A_{1}}+\frac{W_{2}}{A_{2}} \right)}{W_{1}+W_{2}} \\
&=\frac{E(r_{m})-r_{f}}{\sigma_{m}^{2}}\cdot\left( \frac{1}{\bar{A}} \right) =1
\end{align*}

---

## Risk Premium

Stock $x$'s contribution to market risk premium is

$$
w_{x}(E(r_{x})-r_{f})
$$

Proof:

\begin{align*}
E(r_{m})-r_{f}&=E(\Sigma _{i=1}^nw_{i}r_{i})-r_{f} \\
&=\Sigma_{i=1}^nw_{i}E(r_{i})-r_{f} \\
&=\Sigma_{i=1}^nw_{i}(E(r_{i})-r_{f})
\end{align*}

---

## Market & Security Risk

Stock $x$'s contribution to market risk is

$$
w_{x}\sigma_{xm}
$$

Proof:
Security $x$'s contribution to market risk is

$$
\sigma_{m}^2(x)=\Sigma_{i=1}^nw_{i}w_{x}Cov(x,i)
$$

\begin{align*}
\sigma_{xm}&=Cov(r_{x},r_{m}) \\
&=Cov(r_{x},\Sigma w_{i}r_{i}) \\
&=\Sigma w_{i}Cov(r_{i},r_{x})
\end{align*}

$$
\sigma_{m}^2(x)=w_{x}\Sigma w_{i}Cov(r_{i},r_{x})=w_{x}\sigma_{xm}
$$

For two investors:

$$
\sigma_{m}^2=w_{1}^2\sigma_{1}^2+w_{2}^2\sigma_{2}^2+2w_{1}w_{2}\sigma_{12}
$$

We can split it into two part.

1's contribution to $\sigma_{m}^2$ is 

$$
w_{1}^2\sigma_{1}^2+w_{1}w_{2}\sigma_{12}=w_{1}(w_{1}\sigma_{1}^2+w_{2}\sigma_{12})
$$

2's contribution to $\sigma_{m}^2$ is 

$$
w_{2}^2\sigma_{2}^2+w_{1}w_{2}\sigma_{12}=w_{1}(w_{2}\sigma_{1}^2+w_{1}\sigma_{12})
$$

Now consider $\sigma_{1m}$

Given

$$
Cor(x,ay+bz)=a\sigma_{xy}+b\sigma_{xz}
$$

We have

\begin{align*}
\sigma_{1m}&=Cor(r_{1},r_{m}) \\
&=Cor(r_{1},w_{1}r_{1}+w_{2}r_{2}) \\
&=w_{1}\sigma_{1}^2+w_{2}\sigma_{12}
\end{align*}

1's contribution can be written as

$$
w_{1}(w_{1}\sigma_{1}^2+w_{2}\sigma_{12})=w_{1}\sigma_{1m}
$$

---

## CAPM

The security reward to risk is

\begin{align*}
\frac{\text{x's contribution to market risk premium}}{\text{x's contribution to market risk}}\\=\frac{w_{x}(E(r_{x})-r_{f})}{w_{x}\sigma_{xm}}=\frac{(E(r_{x})-r_{f})}{\sigma_{xm}}
\end{align*}

For the market portfolio,

$$
\frac{\text{market risk premium}}{\text{market risk}}=\frac{E(r_{m})-r_{f}}{\sigma_{m}^2}
$$

$$
\frac{(E(r_{x})-r_{f})}{\sigma_{xm}}=\frac{E(r_{m})-r_{f}}{\sigma_{m}^2}
$$

$$
E(r_{x})=r_{f}+\frac{\sigma_{xm}}{\sigma_{m}^2}(E(r_{m}-r_{f}))
$$

where 

$$
\beta_{x}=\frac{\sigma_{xm}}{\sigma_{m}^2}=\frac{\rho_{xm}\sigma_x\sigma_m}{\sigma_m^2}
$$

---

## Security Picking

The observed CAPM is 

$$
r_{it}-r_{ft}=\alpha_{i}+\beta_{i}(r_{mt}-r_{ft})+e_{it}
$$

Minimizing $Min\sum e_{it}^2$ gives estimates of $\alpha_{i}$ and $\beta_{i}$.

$$
\hat{\beta}=\frac{Cov(x,y)}{\sigma_{x}^2};\quad \hat{\alpha}=\bar{y}-\hat{\beta}\,\bar{x}
$$

Buy the stock if $\hat{\alpha}>0$; Sell the stock if $\hat{\alpha}<0$.

$$
\text{t-statistic}=\frac{\text{coefficient}}{\text{std}}
$$

If $|\text{t-statistic}|<2$, assume the coefficients to be zero.

---

## Beta Arbitrage

![Beta Arbitrage Diagram](6.png)
1. Buy leverage market portfolio
2. Long low beta, short high beta stocks

---

## Formulas

$$
\beta_{m}=\sum w_i\beta_i=1
$$

Systematic variance:

$$
\sigma_{sys}^2=\beta_i^2\sigma_m^2
$$

Residual variance:

$$
\sigma_{res}^2=\sigma_i^2-\sigma_{sys}^2
$$

$$
\beta_p=0 \Rightarrow R_p=R_f \Rightarrow \text{No excess return}
$$

$$
\beta_{x}=\frac{\sigma_{xm}}{\sigma_{m}^2}=\frac{\rho_{xm}\sigma_x\sigma_m}{\sigma_m^2}
$$

$$
\sigma_{p}^2=w_{1}^2\sigma_{1}^2+w_{2}^2\sigma_{2}^2+2w_{1}w_{2}\sigma_{12}
$$

$$
y^*=\frac{E(r_{p^*})-r_{f}}{A\sigma_{p^*}^2}
$$

$$
w_{1}^{MV}=\frac{\sigma_{2}^2-\sigma_{12}}{\sigma_{1}^2+\sigma_{2}^2-2\sigma_{12}}
$$

$$
w_{1}^*=\frac{R_{1}\sigma_{2}^2-R_{2}\sigma_{12}}{R_{1}\sigma_{2}^2+R_{2}\sigma_{1}^2-(R_{1}+R_{2})\sigma_{12}}
$$

---

## Sample

![Sample Diagram 1](11.png)
![Sample Diagram 2](12.png)
![Sample Diagram 3](16.png)

---

## Sample

![Sample Diagram 4](15.png)
![Sample Diagram 5](14.png)

---

## Sample

![Sample Diagram 6](17.png)
![Sample Diagram 7](18.png)

---

## Sample

![Sample Diagram 8](19.png)
![Sample Diagram 9](20.png)
![Sample Diagram 10](21.png)