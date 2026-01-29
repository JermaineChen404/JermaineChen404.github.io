# Delta Hedging in the BSM Model

## Definition

Delta hedging is used to hedge the first-order risks coming from moves in the underlying stock price.

$$\Delta\equiv \frac{\partial \text{ Option Price}}{\partial S}$$

This is a general definition of Delta, regardless of the model used.

Specifically in the BSM model:

$$\Delta=\mathcal{N}(d_{1}) \quad\text{for calls,}\quad\text{and}\quad\Delta=-\mathcal{N}(-d_{1})\quad\text{for puts}$$

**Geometrically**, delta is the slope of the option price, plotted as a function of the underlying price.

## Over a Short Time Interval

### Small Changes in Stock Price

Delta hedging works well for small changes in stock price because the linear approximation (using delta) is accurate over short distances.

### Large Changes in Stock Price

Delta hedging fails for large changes in stock price because:

- Delta itself changes (this change is captured by **Gamma**)
- We can use **Gamma** to hedge the second-order price risk

**Geometric Interpretation:** Delta hedging attempts to approximate the option price function (which is convex, not linear) with a line tangent to this function. This approximation is good for small moves in the underlying price but increasingly inaccurate for larger and larger moves.

## Over a Longer Time Interval

### Small Changes in Stock Price

Delta hedging **makes profits** when stock price changes are small:

- The profit will be the **highest** if the stock price stays the same
- The profit comes from **time decay** ($\Theta$)

As time passes and volatility is not realized, option sellers benefit from time decay.

### Large Changes in Stock Price

Delta hedging **fails** when stock price changes are large:

- We will not always lose, but the hedge is not well-balanced (speculation instead of hedging)
- **Solution:** Rebalance the hedge more often
  - But this incurs transaction costs

## Tradeoff Between Theta ($\Theta$) and Gamma ($\Gamma$)

The BSM model implies a **fundamental tradeoff** between time decay and convexity:

### Time Decay ($\Theta$) Benefits

- **Benefits sellers** of options
- **Hurts buyers** of options
- **Mechanism:** Lowers chances of exercising the option

### Convexity ($\Gamma$) Benefits

- **Benefits buyers** of options (who are long gamma)
- **Hurts sellers** of options (who are short gamma)
- **Mechanism:** When you buy options (calls or puts), you are **long gamma**
  - **Effect:** Your Delta increases when the stock rises and decreases when the stock falls
  - If the stock goes up, your option behaves more like being **long the stock** ($\Delta$ rises)
  - If the stock goes down, your option behaves more like being **short the stock** ($\Delta$ falls)

### The Seller's Position

The seller of the delta-hedged option:

- Takes the risk for **large moves** (measured by convexity or Gamma)
- Is compensated for that risk precisely with **time decay** (measured by Theta)

This tradeoff is fundamental: the option seller profits from time decay if the underlying doesn't move much, but loses money (on the gamma risk) if the underlying makes large moves.
