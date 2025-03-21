# Quiz 4

## Q: What is the key difference between parametric and non-parametric classifiers in remote sensing?

- **a**: Parametric classifiers can adapt to complex data structures more easily than non-parametric classifiers
- **b**: Parametric classifiers assume a specific distribution for the data, while non-parametric classifiers do not rely on such assumptions

::: details Reaveal Answer
**A:** b
> Explanation:
>
>Parametric classifiers (e.g., Maximum Likelihood Classification) assume that the data follows a known probability distribution (often Gaussian). They estimate parameters like mean and variance from training data.
>
>Non-parametric classifiers (e.g., k-Nearest Neighbors, Decision Trees) do not make explicit assumptions about the data distribution and can handle more complex patterns.
:::

## Q: How can accuracy in supervised classification be improved?

- **a**: By selecting clean and stereotyped examples of the classes to be classified
- **b**: By selecting training samples representative of the diversity of the land cover classes

::: details Reaveal Answer
**A:** b
> Explanation:
>
>In supervised classification, the accuracy depends heavily on the quality of the training data.
>
>Selecting representative training samples ensures that the classifier learns the full variability of each land cover class, improving generalization and reducing misclassification.
>
>Option a (using only clean and stereotyped examples) can lead to bias, where the classifier fails to recognize natural variations within each class.
:::

## Q: What is the benefit of using temporal data (images collected at different times) as classification features in land cover mapping?

- **a**: Temporal data allows the detection of seasonal variations and changes in land cover over time
- **b**: Temporal data increases the temporal resolution of satellite images

::: details Reaveal Answer
**A:** a
> Explanation:
>
>Temporal data (multi-temporal images) helps in identifying land cover changes, such as vegetation growth cycles, urban expansion, or deforestation.
>
>It captures seasonal variations, which can improve classification accuracy by distinguishing classes that may appear similar in a single image but change over time.
>
>Option b is incorrect because temporal data does not increase the temporal resolution of individual satellite images; it simply provides multiple observations over time
:::

## Q: In which situations might unsupervised classification outperform supervised classification?

- **a**: When large areas are classified, enclosing heterogeneous landscapes
- **b**: When labelled training data is unavailable or unreliable

::: details Reaveal Answer
**A:** b
> Explanation:
>
>Unsupervised classification does not require pre-labeled training data; instead, it groups pixels into clusters based on their spectral similarities.
>
>It is particularly useful when labeled data is scarce, expensive to obtain, or unreliable, making supervised classification difficult.
>
>Option a is incorrect because unsupervised classification does not necessarily perform better in large, heterogeneous areas. In fact, supervised classification is often preferred in such cases if good training data is available.
:::

## Q: Which minimum mapping unit can be used while performing image classification?

- **a**: The pixel or other spatial units derived from the pixel, such as pixel objects
- **b**: The pixel, because it is the smallest unit that can be detected by the sensor

::: details Reaveal Answer
**A:** a
> Explanation:
>
>The minimum mapping unit (MMU) refers to the smallest spatial unit considered for classification.
>
>While a single pixel can be used as the MMU, other spatial units like pixel objects (groups of pixels with similar characteristics, used in object-based classification) can also serve as the MMU.
>
>Option b is incorrect because classification is not limited to single pixels; higher-level objects (e.g., segments in object-based classification) can improve classification accuracy by reducing noise and better representing real-world features.
:::

## Q: In classification, what is the significance of selecting training samples?

- **a**: They help the classifiers to decide which classes should be classified
- **b**: They determine the accuracy of supervised classification

::: details Reaveal Answer
**A:** b
> Explanation:
>
>In supervised classification, the quality and representativeness of training samples directly impact classification accuracy.
>
>Well-selected training samples ensure that the classifier learns the full variability within each class, improving generalization and reducing misclassification.
>
>Option a is incorrect because training samples do not decide which classes should be classified; rather, they help the classifier distinguish between predefined classes.
:::

## Q: What is a mixed pixel in remote sensing?

- **a**: A pixel that contains multiple land cover types or materials, blending their spectral signatures
- **b**: A pixel that has been misclassified due to errors in the training data

::: details Reaveal Answer
**A:** a
> Explanation:
>
>A mixed pixel occurs when a single pixel represents more than one land cover type, especially in areas where different land covers meet (e.g., urban edges, forest boundaries, or water-land interfaces).
>
>This happens because the pixel size (spatial resolution) may be larger than the features on the ground, causing the spectral signature to be a combination of multiple materials.
>
>Option b is incorrect because mixed pixels result from spatial resolution limitations, not classification errors.
:::

## Q: Which classification method uses labelled training data to categorize pixels?

- **a**: Unsupervised classification
- **b**: Supervised classification

::: details Reaveal Answer
**A:** b
> Explanation:
>
>Supervised classification relies on labeled training data, where known examples of land cover types are provided to train the classifier. It then categorizes all pixels based on these examples.
>
>Unsupervised classification (option a) does not use labeled training data; instead, it groups pixels based on their spectral similarities without predefined categorie
:::

## Q: What is a key difference between image classification and quantitative remote sensing?

- **a**: Image classification assigns pixels to discrete categories, while quantitative remote sensing derives continuous physical values from the data
- **b**: Image classification uses spectral indices, while quantitative remote sensing relies on field work

::: details Reaveal Answer
**A:** a
> Explanation:
>
>Image classification categorizes pixels into discrete land cover classes (e.g., forest, water, urban).
>
>Quantitative remote sensing measures continuous variables such as vegetation index values (NDVI), surface temperature, or soil moisture, rather than assigning discrete categories.
>
>Option b is incorrect because both methods can use spectral indices, and quantitative remote sensing does not necessarily rely on fieldwork alone—it often combines remote sensing data with field measurements.
:::

## How can unsupervised techniques assist in image analysis beyond image classification?

- **a**: They can be used for exploratory analysis, helping to identify natural groupings in the data that can be useful for defining training classes in supervised classification
- **b**: They primarily assist in preprocessing steps like atmospheric correction and radiometric calibration

::: details Reaveal Answer
**A:** a
> Explanation:
>
>Unsupervised techniques (e.g., clustering algorithms like K-means or ISODATA) help identify natural patterns in the data without prior knowledge.
>
>This can be useful for exploratory analysis, where analysts examine clusters to define meaningful land cover classes before conducting supervised classification.
>
>Option b is incorrect because unsupervised techniques are not primarily used for preprocessing tasks like atmospheric correction or radiometric calibration—those are separate processes.
:::
