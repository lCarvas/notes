# Band Transformations

## Vegetation Indices

Linear, orthogonal or ration combinations of reflectances acquired in several wavelengths, usually red and near infrared

VI example: Simple Ration (SR)  
$SR = \frac{IVP}{V}$

### Main goal of VI

Characterise vegetation and minimizing perturbing effects (e.g. topographic effect)

### Vegetation Characteristics

- Biomass
- Abundance
- Cover Percentage

### Perturbing Effects

- Atmosphere
- Sun Angle
- Viewing Angle
- Topography

### Why most indices are based on red and Near-IR reflectances?

The relationship between red and near infrared is very much related with vegetation characteristics (e.g. abundance)

### Most known vegetation indices

Simple Ratio (SR): $SR = \frac{IVP}{P}$

Normalised Difference Vegetation Index (NDVI): $NDVI=\frac{IVP-V}{IVP+V}$

Perpendicular Vegetation Index (PVI)

Soil Adjusted Vegetation Index (SAVI)

Atmosphere Resistant Vegetation Index (ARVI): $\frac{IVP-F_{VA}}{IVP+F_{VA}}$, $F_{VA} = V-\gamma(A-V)$

### Use of VIs

- Quantitative Remote Sensing
  - e.g. quantitative characterisation of vegetation (e.g. amount of biomass, percentage of vegetation cover)
- VI as a transformed band to use in image classification for land cover land use
  - Reduction of topographic effect
  - Helps discrimination of vegetation ares

## Principal Component Analysis (PCA)

Transformation (rotation) of original system axes (i.e. bands) of the spectral space into a new axes system. The new axes/variables (i.e. principal components) are much less correlated than original ones (i.e. spectral bands)

The first two or three principal components explain, usually, more than 90% of original bands variability. This is not true for the original bands (i.e. axes), because these are usually very correlated.

### Why should we use PCA?

- PCA allow an analysis that is not possible with original bands
- Reduce the number of variables into two or three components
- Can be used as a way to remove noise from the data

## Spatial Transformations

Spatial Frequency: DN changes by distance unit

We can evaluate spatial frequency in a quantitative manner by charactering the neighbourhood of each pixel

### Filters

#### Spatial Filters

- Linear
  - In output image the vale in each pixel is a linear combination of the DN of the neighbouring pixels
- Non-Linear
  - In output image the vale in each pixel is a non-linear combination of the DN of the neighbouring pixels
