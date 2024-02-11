# VAT-Spy Client Data Update Project

VAT-Spy is an Air Traffic and ATC Display client that was designed by Ross Carlson for the VATSIM Network. VAT-Spy can be obtained at [vatspy.rosscarlson.dev](https://vatspy.rosscarlson.dev/)

<br>

# How Do I Submit Updates?

We have chosen GitHub to be the core of this project so far, as it allows for collaboration on the project and near real-time updates to VAT-Spy data once a pull request has been pushed to the live data. Updates to data should be made directly by submitting a PR to the corresponding AIRAC branch through GitHub. Updates on GitHub that will be merged will be those that either come from verified GitHub accounts belonging to Regions, Divisions, or FIRs/ARTCCs or that have been explicitly authorized by a staff account. Changes will stop being merged to each AIRAC branch 2 days prior to the AIRAC cycle coming in force, in order to allow some time for final reviews before merging to master.

<br>

# How Do I Verify My Account To Submit Updates?

While we work on a contribution policy, please send an email to, or have your Region, Division, or FIR/ARTCC Leadership send an email from your/their staff Region, Division, or FIR/ARTCC linked e-mail account with your GitHub username to vatspy-data-project (at) vatsim.net. Only authorized users from each Region, Division, or FIR/ARTCC will be permitted to submit updates. **PRs from non-verified accounts will NOT be merged.**

<br>

# Included Sectors

Since the introduction of VATSpy version 1.4.0, a significant change has been implemented concerning the handling of sub-sectors. Previously, there was a strict policy in place aimed at reducing clutter on the map by limiting the inclusion of sub-sectors in the dataset.

Currently, we are open to accepting sub-sectors that offer clear benefits to the VACC. If you wish to propose the addition of new sub-sectors, we kindly request that you provide an explanation for why these additions are necessary and how they would be advantageous. It's important to note that this is not an open invitation to include every single sub-sector within your FIR at this time.

<br>

# Boundaries.geojson

This file uses the GeoJSON format as defined in [RFC7946](https://datatracker.ietf.org/doc/html/rfc7946). At the end of each cycle a FIRBoundaries.dat will be generated and included in the release, for testing in vat-spy [a converter](https://github.com/NelisV/vatspy-geojson/releases/latest) can be used. 

<br>

# Who's on the VAT-Spy Client Data Update Project Team?

Niels Voogd - Data Management Team<br />
Adrian Bjerke - Data Management Team<br />

<br>

# Credits

Ross Carlson - Developer, VAT-Spy<br />
Néstor Pérez - Previous Project Leader<br />
