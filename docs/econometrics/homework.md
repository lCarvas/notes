# Get the formula of $\beta_1$

$\frac{\partial SSR}{\partial\beta_1} = -2 \sum_{i=1}^nx_i(y_i-\beta_0-\beta_1x_i) = 0$

$\sum_{i=1}^nx_iy_i-(\bar{y}-\beta_1\bar{x})x_i-\beta_1x_i^2=0$

$\sum_{i=1}^nx_iy_i-\bar{y}\sum_{i=1}^nx_i+\beta_1\bar{x}\sum_{i=1}^nx_i-\beta_1\sum_{i=1}^nx_i^2=0$

$\sum_{i=1}^n x_i y_i - \bar{y} \sum_{i=1}^n x_i + \beta_1 \left( \bar{x} \sum_{i=1}^n x_i - \sum_{i=1}^n x_i^2 \right) = 0$

$\beta_1 \left( \bar{x} \sum_{i=1}^n x_i - \sum_{i=1}^n x_i^2 \right) = \bar{y} \sum_{i=1}^n x_i - \sum_{i=1}^n x_i y_i$

$\beta_1 = \frac{\bar{y} \sum_{i=1}^n x_i - \sum_{i=1}^n x_i y_i}{\bar{x} \sum_{i=1}^n x_i - \sum_{i=1}^n x_i^2}$

$\beta_1 = \frac{\sum_{i=1}^nx_iy_i-n\bar{x}\bar{{y}}}{\sum_{i=1}^nx_i^2-n\bar{x}^2}$

$\beta_1=\frac{\sum_{i=1}^n(x_i-\bar{x})(y_i-\bar{y})}{\sum_{i=1}^n(x_i-\bar{x})^2}$
