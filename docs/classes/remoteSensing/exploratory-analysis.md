# Exploratory image analysis

## Image Visualization

One band visualization - grey tones\
Three band visualization - color composites

### Why color composites

Human vision is more sensitive to colors than to grey tones\
It allows the simultaneous visualization of three colors

## Digital Number

- Sun emits radiation
- Radiation goes through atmosphere
  - Radiation goes through scattering/absorption
- Radiation gets reflected back through the atmosphere
- Radiance (watts/m^2/s) arrives at the satellite
  - Radiance is different from Reflectance
- Satellite converts received Radiance to a Digital Number
  - e.g. 4 watts/m^2/s is equivalent to a DN of 10

!Explain how the remote sensing signal is derived!

### Why Digital Numbers

0 - black  
255 - white

### How do satellites convert Radiance into DN?

There is a model that converts Radiance to DN for each band

When the Radiation comes from the Sun, it comes as a volume
During summer the angle at which the Sun faces the Earth makes it so Radiation is more concentrated per unit of area.  
As such, more radiation is reflected during Summer than during Winter.
The surface will look different from Summer to Winter

Reflectance does not depend on Sun geometry, due to being a proportion between Reflected Energy and Incident Energy (Er/Ei)

We can convert Digital Number to Reflectance (Radiometric Conversion)  
This can be done as the Energy Emitted by the Sun is registered  
The Digital Number gives us the Energy Reflected and the table registries give us the Incident Energy. The values from the aforementioned tables cannot be used directly due to not taking into account the scattering/absorption that happens when radiation goes through the atmosphere. To fix this, we need to perform Atmospheric Correction. This is harder to achieve as we need to have knowledge on the atmospheric conditions of the day and location we are getting the images from.

What really characterizes the surface elements?  
Reflectance as it does not depend on Sun Geometry

What do we have in a Satellite Image?  
Digital Number

Converting to Radiance reduces the effect of topography on the image

### Multi-Temporal Studies

When studying the same location in a span of years, images should be from the same time of the year

### Atmosphere

Doing Radiometric Correction, that is, converting radiance to reflectance is a way to make our images independent of factors that change the radiance such as path of the radiation (CONFIRM THIS ONE) and sun geometry.

### RGB System

In the RGB system, the analyst can assign one band to each color (red, green, blue)

Using False Color Composites allows us to see wavelengths that humans cannot see (e.g. Near Infrared). For example, we can assign the NIR band to the R in the RGB to obtain the value of the NIR as a value of red that we can observe

## Visual Interpretation

### How to choose the bands to create a color composite

Bands should not have high correlation with one another, in order to minimize the amount of repeated data and maximize the total amount of data on the image

The most used band is NIR, most analysis assign NIR to the red band

### Basic Rules for Visual Interpretation

1. Visual interpretation should always be based on the simultaneous analysis of spectral and spatial patterns. Whenever possible, and mostly for vegetation classes, temporal patterns can be very important
   1. e.g. Annual agriculture vs pastures
2. Spectral patterns can be used to identify the three fundamental types of Earth surface elements
   - Independently of the used color composite:
     - Water is always dark
     - Vegetation had the color to which we assigned the NIR band
     - Soil and urban areas are always very bright and their color is not the one of the vegetation
3. Spatial patterns can be used for to discriminate urban areas from other areas with no vegetation
   1. e.g. Bare soils (quarries, agriculture fields with no vegetation, forest clear cuts)
   2. Urban areas are always the most heterogeneous
4. Temporal profiles are very import in areas that have different spectral signals throughout the year
   1. e.g. Annual agriculture vs pastures, forests with deciduous and persistent leaf
5. The analysis of spatial context is important
   1. e.g. An area with trees within a city is a green park and in a rural area is a forest

### Elements of Satellite Image Visual Interpretation

- Tone
- Shape
- Pattern
- Texture
- Shadow
- Association

#### Tone

The relative brightness or color of objects in an image

Generally, tone is the fundamental element for distinguishing between different features

Variations in tone also allows the elements of shape, texture and pattern of objects to be distinguished

#### Shape

The general form, structure, or outline of individual objects. Shape can be a very distinctive clue for interpretation

Straight edge shapes typically represent urban or agricultural (field), while natural features, such as forest edges, are generally more irregular in shape, except where man has created a road or clear cuts.

Farm or crop land irrigated by rotating sprinkler systems would appear as circular shapes.

#### Size

The size of objects in an image as a function of scale. It is important to assess the size of a target relative to other objects in a scene, as well as the absolute size.

For example, if an interpreter had to distinguish zones of land use, and had identified an area with a number of buildings in it, large buildings such as factories or warehouses would suggest commercial property, whereas small buildings would indicate residential use.

#### Pattern

The spatial arrangement of visibly discernible objects. Typically an orderly repetition of similar tones and textures will produce a distinctive and ultimately recognizable pattern. Orchards with evenly spaced trees, and urban streets with regularly spaced houses are good examples of pattern.

#### Texture

The arrangement and frequency of tonal variation in particular areas of an image.

Rough textures would consist of a mottled tone where the grey levels change abruptly in a small area, whereas smooth textures would have very little tonal variation.

Smooth textures are most often the result of uniform, even surfaces, such as fields, asphalt, or grasslands.

A element with a rough surface and irregular structure, such as a forest canopy, results in a rough textured appearance.

#### Shadow

Shadow is also helpful in interpretation as it may provide an idea of the profile and relative height of a target or targets which may make identification easier.

Shadows can also reduce or eliminate interpretation in their area of influence, since targets within shadows are much less (or not at all) discernible from their surroundings.

#### Associations

Association takes into account the relationship between other recognizable objects or features in proximity to the target of interest.

The identification of features that one would expect to associate with other features may provide information to facilitate identification.

As an example, commercial properties may be associated with proximity to major transportation routes.
