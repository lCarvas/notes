# Exercise 24

Consider the standard simple regression model $y = \beta_0 + \beta_1x_1 + u$ under the Gauss-Markov Assumptions SLR.1 through SLR.5. The usual OLS estimators $\hat{\beta_0}$ and $\hat{\beta_1}$ are unbiased for their respective population parameters. Let $\tilde{\beta_1}$ be the estimator of $\beta_1$ obtained by assuming the intercept is zero.

## a)

Find $\mathbb{E}\left[\tilde{\beta_1}\mid x\right]$ in terms of the $x_i, \beta_0$ and $\beta_1$. Verify that $\tilde{\beta_1}$ is unbiased for $\beta_1$ when the population intercept is zero. Are there other cases where $\tilde{\beta_1}$ is unbiased?

$\tilde{\beta_1} = \frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\beta_0+\beta_1+\frac{\sum_{i=1}^{n}x_iu_i}{\sum_{i=1}^{n}{x_i}^2}$

$\mathbb{E}\left[\tilde{\beta_1}\mid x\right]=\mathbb{E}\left[\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\beta_0+\beta_1+\frac{\sum_{i=1}^{n}x_iu_i}{\sum_{i=1}^{n}{x_i}^2}\right]$

$\mathbb{E}\left[\tilde{\beta_1}\mid x\right]=\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\beta_0+\beta_1+\mathbb{E}\left[\frac{\sum_{i=1}^{n}x_iu_i}{\sum_{i=1}^{n}{x_i}^2}\right]$

$\mathbb{E}\left[\tilde{\beta_1}\mid x\right]=\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\beta_0+\beta_1+\mathbb{E}\left[\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\right]$

$\mathbb{E}\left[\tilde{\beta_1}\mid x\right]=\beta_0\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}+\beta_1$

$\tilde{\beta_1}$ is unbiased if $\sum_{i=1}^n x_i=0 \Rightarrow \bar{x}=0 \vee \beta_0 = 0$

## b)

Find $Var\left(\tilde{\beta_1} \mid x\right)$. (Hint: The variance does not depend on $\beta_0$.)

$Var\left(\tilde{\beta_1} \mid x\right)=Var\left(\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2}\beta_0+\beta_1+\frac{\sum_{i=1}^{n}x_iu_i}{\sum_{i=1}^{n}{x_i}^2}\right)$

$Var\left(\tilde{\beta_1} \mid x\right)=Var\left(\frac{\sum_{i=1}^{n}x_iu_i}{\sum_{i=1}^{n}{x_i}^2}\right)$

$Var\left(\tilde{\beta_1} \mid x\right)=Var\left(\frac{\sum_{i=1}^{n}x_i}{\sum_{i=1}^{n}{x_i}^2} \right)\sigma^2$

$Var\left(\tilde{\beta_1} \mid x\right)=\frac{\left(\sum_{i=1}^{n}x_i\right)^2}{\left(\sum_{i=1}^{n}{x_i}^2\right)^2} \sigma^2$

$Var\left(\tilde{\beta_1} \mid x\right)=\frac{\sigma^2}{\sum_{i=1}^{n}{x_i}^2}$

## c)

Show that $Var\left(\tilde{\beta_1} \mid x\right) \le Var\left(\hat{\beta_1} \mid x\right)$ (Hint: For any sample of data, $\sum_{i=1}^n x_i^2 \ge \sum_{i=1}^n \left(x_i-\bar{x}\right)^2$ with strict inequality unless x = 0)

$\hat{\beta_1}=\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)yi}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}$

$\hat{\beta_1}=\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)\left(\beta_0+\beta_1xi+u_i\right)}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}$

$\hat{\beta_1}=\beta_0\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}+\beta_1+\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)u_i}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}$

$Var\left(\hat{\beta_1} \mid x\right)=Var\left[\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)\beta_0}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}+\beta_1+\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)u_i}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}\mid x\right]$

$Var\left(\hat{\beta_1} \mid x\right)=Var\left[\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)\beta_0}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}\mid x \right] + Var\left[\beta_1\mid x\right] + Var\left[\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)u_i}{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2}\mid x\right]$

$Var\left(\hat{\beta_1} \mid x\right)=\frac{Var\left[\sum_{i=1}^n\left(x_i-\bar{x}\right)u_i\mid x \right]}{\left[\sum_{i=1}^n\left(x_i-\bar{x}\right)^2\right]^2}$

$Var\left(\hat{\beta_1} \mid x\right)=\frac{\sum_{i=1}^n\left(x_i-\bar{x}\right)^2Var\left(u_i\mid x\right)}{\left[\sum_{i=1}^n\left(x_i-\bar{x}\right)^2\right]^2}$

$Var\left(\hat{\beta_1} \mid x\right)=\frac{\sigma^2}{\sum_{i=1}^n\left(x_i-\bar{x_i}\right)^2}$
