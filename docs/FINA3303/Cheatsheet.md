# FINA3303 Intermediate Investment Cheat Sheet
*By CHEN, Hejian*

---

## Growth Rates in DDM

$$
EPS=\frac{\text{Net Income}-\text{Preferred Dividends}}{\text{Shares Outstanding}}
$$

Assuming the number of shares outstanding is constant,

$$
\text{growth in EPS}=\text{growth in Net Income}
$$

The growth rate of EPS is given by

$$
g_{t}=\text{retention ratio}\times \text{ROE}
$$

$$
\text{Marginal ROE}=\frac{\Delta \text{ Net income}_{t}}{\Delta \text{ Book value of equity}_{t-1}}
$$

$$
\text{Efficiency generated growth}=\frac{ROE_{t}-ROE_{t-1}}{ROE_{t-1}}
$$

$$
g_{EPS}=ROE_{t}\times \text{retention rate}+\frac{ROE_{t}-ROE_{t-1}}{ROE_{t-1}}
$$

---

## Growth Rates in FCFE/FCFF

In FCFE,

$$
g_{NI}=\frac{\text{CapEx}-\text{Depre.}+\Delta \text{NWC}-\text{Net Debt}}{\text{Net income}}\times ROE
$$

In FCFF (WACC),

$$
g_{EBIT}=\text{Reinvestment rate}\times \text{Return on capital}
$$

$$
\text{Reinvestment rate}=\frac{\text{CapEx}-\text{Depre.}+\Delta NWC}{EBIT(1-T_{C})}
$$

$$
\text{Return on capital}=\frac{EBIT(1-T_{C})}{\text{Equity}+\text{Debt}-\text{Cash}}
$$

$$
\text{Sales-to-capital ratio}=\frac{\text{Sales}}{\text{capital reinvestment needs}}
$$

---

## Terminal Value

$$
\text{Value of a firm}=\sum_{t=1}^{t=n}\frac{\text{CF}_{t}}{(1+r)^t}+\frac{\text{Terminal Value}_{n}}{(1+r)^n}
$$

$$
\text{Terminal Value of Equity}_{t}=\frac{\text{Cash flow to equity}_{t+1}}{R_{e}-g}
$$

$$
\text{Terminal Value of Firm}_{t}=\frac{\text{FCFF}_{t+1}}{R_{wacc}-g}
$$

**Constraints on $g$:**

- cannot be higher than the cost ($R_{e}$/$R_{wacc}$)
- cannot be higher than the growth rate of the economy
- vary depending on the inflation rate of the currency used
- can be negative

**After linking the reinvestment rate to corresponding growth rate:**

- If $\text{Return}>\text{Cost}$, higher the assumed growth rate, higher the terminal value
- If $\text{Return}<\text{Cost}$, higher the assumed growth rate, lower the terminal value

---

## Working Capital Management

![Working Capital Diagram](1.png)

$$
\begin{aligned}
\text{CCC}&=\text{AR Days}+\text{Inventory Days}-\text{AP Days} \\
&=\text{Operating Cycle}-\text{Accounts Payable Days}
\end{aligned}
$$

---

## Working Capital Management (Metrics)

$$
\begin{aligned}
\text{Accounts Receivable Days}&=\frac{\text{Accounts Receivable}}{\text{Average Daily Sales}} \\
\text{Accounts Payable Days}&=\frac{\text{Accounts Payable}}{\text{Average COGS}} \\
\text{Inventory Days}&=\frac{\text{Inventory}}{\text{Average COGS}}
\end{aligned}
$$

---

## Trade Credit

Generally, for $x$/$m$ net $n$, due in $n$ days and discount $x$ if paid within $m$ days, the effective annual rate is:

$$
EAR=\left( \frac{100}{100-x} \right)^{365/(n-m)}-1
$$

---

## Taxes on Dividends and Capital Gains

Assume taxes on dividends only,

$$
P_{cum}-P_{ex}=Dividend(1-T_{c})
$$

Assume $T_{g}$ is the capital gain tax rate, and $T_{d}$ is the dividend tax rate,

$$
\begin{aligned}
\text{After tax gain from dividend}&=\text{After tax loss from stock price declines} \\
Div(1-T_{d})&=(P_{cum}-P_{ex})(1-T_{g})
\end{aligned}
$$

Thus,

$$
P_{cum}-P_{ex}=Div\times\frac{1-T_{d}}{1-T_{g}}=Div\times\left( 1-\left( \frac{T_{d}-T_{g}}{1-T_{g}} \right) \right)
$$

where $T_{d}^*=\frac{T_{d}-T_{g}}{1-T_{g}}$ is the effective dividend tax rate.

$T_{d}^*$ measures the additional tax paid by the investor per dollar of after-tax capital gains income that is instead received as a dividend.

$T_{d}>T_{g}\quad\Rightarrow$ Share repurchase is better than paying dividend

---

## Taxes on Interest Income

$$
Div=\text{Excess Cash}\times r_{f}\times(1-T_{c})
$$

$$
P_{\text{retain}}=\frac{Div\times(1-T_{d})}{r_{f}\times(1-T_{i})}
$$

The effective tax disadvantage of retaining cash is

$$
T^{*}_{\text{retain}}=1-\frac{(1-T_{c})(1-T_{g})}{1-T_{i}}
$$

If $T^{*}_{\text{retain}}>0$, the stock price will be lower if the firm retains cash.

---

## Real Options

![Real Options Diagram 1](2.png)

![Real Options Diagram 2](3.png)

![Real Options Diagram 3](4.png)

---

## Private Equity

![Private Equity Diagram 1](5.png)

![Private Equity Diagram 2](6.png)