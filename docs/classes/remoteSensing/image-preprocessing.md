# Image Preprocessing

## Distortions

Satellite images have different types of distortions/noise that are introduced during image acquisition

These distortions can degrade the quality of the remotely sensed data collected. For this reason, they need to be reduced. this is done during, the so called, image preprocessing.

Distortions can be expressed in:

- Brightness/intensity (Digital Numbers) - Radiometric distortions
- Geometry - Geometric distortions

## Geometric Distortions

Geometric distortions are caused by the satellite/sensor and can be grouped into systematic and unsystematic distortions

### Systematic Distortions

Systematic distortions are predictable and constant. They are caused by:

- Earth rotation
- platform velocity
- panoramic distortions
- mirror scan velocity
- scan skew
- etc

Systematic distortions are constant and can be corrected by using data from platform ephemeris and knowledge of internal sensor distortions.

Most commercial satellite images already have much of the systematic distortions removed.

### Unsystematic Distortions

Unsystematic distortions are caused by:

- Changes in scale
  - Changes in altitude
- Changes on the sensor system axis
  - Changes in Attitude (Roll, Pitch and Yaw)

These errors cannot be predictable. They are best removed by identifying Ground Control Points in the original image and on the reference map and then mathematically modelling the geometric distortion present.

Most commercial satellite images still contain these errors. Therefore geometric correction is required. This means that most images are non-planimetric.

## Radiometric Distortions

Sources of radiometric distortion:

- Atmosphere
  - Absorption
  - Scattering
- Sensor
  - Line Dropout
  - N-Lines Striping
  - Line Start Problem
- Geometry of Illumination
  - Sun position
  - Topography
