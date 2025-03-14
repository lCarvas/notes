# Thematic Information Extraction from Satellite Images

## Definition of the mapping approach

optical data, no radar data

lclu (land cover, land use) maps

Spatial unit of analysis
pixel/object level

- Spatial resolution of the satellite image
- Type of thematic information we want to extract, e.g. land cover, land use
- Format of the map we want to produce vector/raster

### Raster Map Format

MMU = pixel size of input

1. feature selection
2. image classification
3. accuracy assessment

MMU > Pixel size of input

1. feature selection
2. image classification
3. post-processing (upscaling / generalization)
4. accuracy assessment

### Vector Map Format

???

## Geographical Stratification

Geographical stratification — the study area is divided into smaller areas (strata) so that each strata can be processed independently.

### Five general concepts are useful in geographical stratification

- Economics of size
- Type of physiography
- Potential land cover distribution
- Potential spectral uniformity
- Edge-matching issues

### Data that can be used for geographical stratification

- Slope
- Aspect
- Elevation
- Existent land cover/use maps
- Climate data
- Vegetation maps

## Image Segmentation

This step is only required if the spatial unit of analysis is the object.

Segmentation is the division of an image into spatially continuous, disjoint and homogeneous regions e.g. the objects

Segmentation of an image into a given number of regions is a problem with a large number of possible solutions

There are no " right" or "wrong" solutions to the delineation of landscape objects but instead meaningful" and "useful" heuristic approximations of partitions of space.

A type of segmentation that is very common is the multi-resolution segmentation, because of its ability to deal with the range of scales within a single image

## Feature Identification and Selection

What type of features can we use for information extraction?

Should we, for some reason, manipulate the feature space?

How can we select the best features for class discrimination?

Manipulation and selection of features are used to reduce the number of features without sacrificing accuracy

### Spectral Measurements - 1st order measurements

From a single date - Unitemporal approach
From multiple dates - Multi-temporal approach

### Secondary measurements derived from the image - 2nd order measurements

#### Measurements of the spatial unit being classified

Normalized Difference Vegetation Index (NDVI) is a widely used metric for quantifying the health and density of vegetation using sensor data. Ranges from -1 to 1

#### Measurements related to the neighbourhood (contextual information)

Most mapping approaches operate at a pixel level, ignoring its context

Contextual information and semantic relationship with neighbours is always used by photo-interpreters in visual analysis

Several attempts have been carried out to take into automatic classification the contextual information

- Texture
- First order statistics in the spatial domain
  - e.g. mean, variance, standard deviation, entropy
- Second order statistics in the spatial domain
  - e.g. homogeneity, dissimilarity, entropy, angular second moment, contrast, correlation
- Geostatistics
  - e.g., variogram, correlogram, covariance function
- Fractals

### Some considerations on object oriented image classification

In object oriented image classification one can use features that are very similar to the ones used on visual image interpretation

- Shape and size of the objects
- Spectral homogeneity within objects
- Semantic relationships of a spatial unit with its neighbours

Before object oriented image classification there was the per-field classification. In this approach the objects are not extracted from the satellite image through segmentation but instead from an existent geographical data base with landscape units, i.e. fields.

### Ancillary Information

- Continuous
  - Elevation, Slope, Aspect
  - Soil types, Existent land cover maps

## Classification

Allocation of a class to each pixel/spatial unit of analysis (SUA)

Each SUA is represented by a vector, consisting of a set of measurements (e.g. reflectance)

Definition of decision boundaries to separate classes

Definition of the decision rule (classifier e.g. Neural Network; Maximum Likelihood), i.e. the algorithm that defines the position of a SUA with respect to the decision boundaries and that allocates a specific label to that SUA

- Satellite Image Classification
- Natural Language Processing
- Syntactic Pattern Recognition
- Search Engines
- Medical Diagnosis
- Bioinformatics
- Cheminformatics
- Stock Market Analysis
- Classifying DNA Sequences
- Speech Recognition,
- Handwriting Recognition
- Object Recognition in Computer Vision
- Game Playing
- Robot Locomotion

### Type of Learning

#### Supervised

1. Training
2. Classify

#### Unsupervised

1. Clustering
2. Labeling

### Some considerations on the training stage

- The training phase is decisive on the final results of image classification- In fact, in these phase we collect the data that will be used to train the algorithm.
- The usual restrictions on sampling (cost, availability of data and accessibility) may lead to an inadequate sampling.
- In case of parametric classifiers the number of sample observations affect strongly the estimates of the statistical parameters.
- As the dimensionality of the data increases for a fixed sample size so the precision of the statistical parameters become lower (i.e., Hughes phenomenon).
- It is common that even mixed pixels dominate the image, only pure pixels are selected for training. However, this may lead to unsatisfactory classification accuracy.

### Assumption on Data Distribution

#### Parametric Classifiers

e.g. Maximum Likelihood Classifier

- Traditionally most classifiers have been grounded to a significant degree in statistical decision theory-
- These classifiers rely on assumptions of data distribution.
- The performance of a parametric classifier depends largely on how well the data match the pre-defined models and on the accuracy of the estimation of the model parameters.
- They suffer from the Hughes phenomenon (i.e. curse of dimensionality), and consequently it might be difficult to have a significant number of training pixels.
- They are not adequate to integrate ancillary data (due to difficulties on classifying data at different measurement scales and units).

#### Non-Parametric Classifiers

e.g. Decision Trees, Artificial Neural Networks, Support Vector Machines, Nearest Neighbour
