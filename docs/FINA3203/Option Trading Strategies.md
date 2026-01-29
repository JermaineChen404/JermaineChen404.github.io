# Option Trading Strategies

## Overview

### Directional / Hedging Strategies

These are designed to **take a view on market direction** (bullish or bearish) or to **hedge an existing position**.

- **Covered Call**: Writing a call against a stock you own → reduces risk, generates income, but caps upside.
- **Synthetic Forward**: Combining a call and a put to replicate a forward contract → pure directional exposure.
- **Bull Spread**: Buying a call at a lower strike and selling a call at a higher strike → limited upside bet.

👉 These strategies are about **managing exposure to price movement** (either enhancing returns or hedging risk).

---

### Volatility / Neutral Strategies

These are designed to **profit from volatility expectations** (high or low), rather than direction.

- **Straddle**: Buy a call and a put at the same strike → profits if volatility is high (big moves either way).
- **Butterfly Spread**: Buy low/high strikes, sell middle strikes → profits if volatility is low (price stays near middle).

👉 These strategies are about **trading volatility** — betting on whether the underlying will move a lot or stay stable.

## Covered Call

Long stock and short call

- Lock in profits in bull market
  - expect mildly bullish outlook
- Generate a steady cash flow (premium)
  - defend mildly bearish outlook
  - lowers the effective purchase price of the stock

## Synthetic Forward

One can synthesize a forward contract with options

- **Long Forward**: long call and short put
- **Short Forward**: long put and short call

> **Why use synthetic forward?**
>
> - Forward contracts are typically traded OTC between institutions
>   - less liquidity
>   - exclude retail investors
>   - large contract size, mark-to-market
> - No payoff at inception
>   - less flexibility
> - Strike price can deviate from forward price that determined by spot price and carrying costs
>   - incur upfront payoff

## Bull (Call) Spread

Long ATM or ITM call (strike $K_{1}$) and short OTM call (strike $K_{2}$)

- $K_{2}>K_{1}$
- Lock in $K_{2}-K_{1}$
  - Benefits if price goes up
  - Give up further upside ($S_{T}>K_{2}$)
- Net price of a bull spread position = $\text{Call}(K_{1},T)-\text{Call}(K_{2},T)$
  - Reduce upfront payment

## Bear (Put) Spread

Long ATM or ITM put (strike $K_{2}$) and short OTM put (strike $K_{1}$)

- $K_{2}>K_{1}$
- Lock in $K_{2}-K_{1}$
  - Benefits if price goes down
  - Give up further downside ($S_{T}<K_{1}$)
- Net price of a bull spread position = $\text{Put}(K_{2},T)-\text{Put}(K_{1},T)$
  - Reduce upfront payment

## Straddle

Long a call and a put with the same strike $K_{0}=K_{1}=S_{T}$ (typically ATM)

- Bet on large moves (either up or down)

## Strangle

Long a put with strike $K_{0}$ and a call with strike $K_{1}>K_{0}$

- Bet on even larger moves (either up or down)
- Cheaper price (premium) since $K_{0}<S_{T}<K_{1}$

## Butterfly Spread

### Butterfly Spread with Call Options

Long 1 call with strike $K_{0}$, short 2 calls with strike $K_{1}$, and long 1 call with strike $K_{2}$

- $K_{0}<K_{1}<K_{2}$
- $K_{1}=\frac{K_{0}+K_{2}}{2}$
- Bet on no or little moves (either up or down)
- Limited risk and limited return
  - Maximum loss is the net premium paid
  - Maximum profit is limited
- Initial net cost has to be positive, i.e., $C(K_{0})-2C(K_{1})+C(K_{2})>0$
  - Since it is the maximum loss
  - Otherwise, it implies arbitrage opportunity

### Butterfly Spread with Put Options

Long 1 put with strike $K_{0}$, short 2 puts with strike $K_{1}$, and long 1 put with strike $K_{2}$

- $K_{0}<K_{1}<K_{2}$
- $K_{1}=\frac{K_{0}+K_{2}}{2}$

This is equivalent to the butterfly spread with call options.

## Option Price Inequalities

### Bull Spread Inequality

Given $K_{1}<K_{2}$,

$$\text{Call}(K_{1},T)-\text{Call}(K_{2},T)\leq e^{-rT}(K_{2}-K_{1})$$

> The maximum portfolio payoff at time $T$ is bounded above by the strike difference $K_{2}-K_{1}$. Thus, the current price difference between two calls must be less than or equal to the **discounted** spread width

### Calendar Spread Inequality

The option with a longer maturity is more expensive due to time value of money.

$$C(Ke^{-r(T_{2}-T_{1})},T_{1})\leq C(K,T_{2})$$

The two options should have the same strike, but discounting is needed.

If violated, there is an arbitrage opportunity with calendar spread strategy.

Short a call with maturity $T_{1}$ and strike $K_{1}$ and long a call with maturity $T_{2}>T_{1}$ and strike $K_{2}$

- $K_{1}=K_{2}e^{-r(T_{2}-T_{1})}$
- Market-neutral: bet on $S_{T}\approx K$

If $C(Ke^{-r(T_{2}-T_{1})},T_{1})>C(K,T_{2})$, we receive a positive net premium and a free call option.

## Static Replication Theorem

Any smooth payoff function $G(S_T)$ at maturity can be replicated exactly by a portfolio of European options with the same maturity but different strike prices.

- Options markets allow traders to synthesize arbitrary exposures to the underlying asset
- Options are basis instruments that can span the space of possible payoffs

For linear payoff functions of the stock price like $f(S_T)=a+bS_T$, we can construct a portfolio with:

- Long a bond with face value $a$
- Long $b$ shares of the stock

### General Formula

For any twice differentiable payoff function $G(S_T)$:

$$G(S_T)=G(F)-G'(F)F+G'(F)S_T+\int_F^{\infty}G''(K)(S_{T}-K)^{+}dK+\int_{0}^{F}G''(K)(K-S_{T})^{+}dK$$

#### Proof Sketch

Recall the second-order Taylor expansion for $f\in C^2$:

$$f(x) = f(a) + f'(a)(x - a) + \int_{a}^{x} (x - t) f''(t) \, dt$$

- For $x \ge F$:

$$G(x) = G(F) + G'(F)(x - F) + \int_{F}^{x} (x - K)\, G''(K)\, dK$$

- For $x\le F$:

$$G(x) = G(F) + G'(F)(x - F) + \int_{x}^{F} (K - x)\, G''(K)\, dK$$

Introduce the call and put payoff kernels:

- Call kernel: $(x - K)^+ = \max(x - K, 0)$
- Put kernel: $(K - x)^+ = \max(K - x, 0)$

Observe that for any $x$:

- $\int_F^{x} (x - K) G''(K)\, dK = \int_{F}^{\infty} (x - K)^+ G''(K)\, dK$ (when $K > x$, $(x - K)^+ = 0$)
- $\int_{x}^{F} (K - x) G''(K)\, dK = \int_{0}^{F} (K - x)^+ G''(K)\, dK$ (when $K < x$, $(K - x)^+ = 0$)

Thus both cases unify into a single formula valid for all $x$:

$$G(x) = G(F) - G'(F)F + G'(F)x + \int_{F}^{\infty} G''(K)\, (x - K)^+\, dK + \int_{0}^{F} G''(K)\, (K - x)^+\, dK$$

Setting $x = S_T$ yields exactly the original formula.

#### Breakdown

1. $G(F)$ — The value of the payoff function at the forward price F
   - Anchors the replication

2. $-G'(F)F + G'(F)S_T$ — Linear term
   - Represents a position in the underlying asset
   - Holding $G'(F)$ units of the asset, adjusted for forward price

3. $\int_F^{\infty} G''(K) \cdot \max(S_T - K, 0) \, dK$ — Portfolio of European call options
   - Strikes $K > F$
   - Weighted by second derivative $G''(K)$
   - Captures **upside convexity** of the payoff

4. $\int_0^F G''(K) \cdot \max(K - S_T, 0) \, dK$ — Portfolio of European put options
   - Strikes $K < F$
   - Weighted by $G''(K)$
   - Captures **downside convexity** of the payoff

We effectively decompose the payoff $G(S_{T})$ into:

- A linear part (cash + stock)
- A convex part (calls and puts across strikes)
