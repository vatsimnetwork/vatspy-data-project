# VAT-Spy Client Data Update Project

VAT-Spy is an Air Traffic and ATC Display client that was designed by Ross Carlson for the VATSIM Network. VAT-Spy can be obtained at [vatspy.rosscarlson.dev](https://vatspy.rosscarlson.dev/)

<br>

# How Do I Submit Updates?

We have chosen GitHub to be the core of this project so far, as it allows for collaboration on the project and near real-time updates to VAT-Spy data once a pull request has been pushed to the live data. Updates to data should be made directly by submitting a PR to the corresponding AIRAC branch through GitHub. Updates on GitHub that will be merged will be those that either come from verified GitHub accounts belonging to Regions, Divisions, or FIRs/ARTCCs or that have been explicitly authorized by a staff account. Changes will stop being merged to each AIRAC branch 2 days prior to the AIRAC cycle coming in force, in order to allow some time for final reviews before merging to master.

<br>

# How Do I Verify My Account To Submit Updates?

While we work on a contribution policy, please send an email to, or have your Region, Division, or FIR/ARTCC Leadership send an email from your/their staff Region, Division, or FIR/ARTCC linked e-mail account with your GitHub username to n.perez (at) vatsim.net. Only authorized users from each Region, Division, or FIR/ARTCC will be permitted to submit updates. **PRs from non-verified accounts will NOT be merged.**

<br>

# What sectors are included in this dataset?

To keep the map clear and not too cluttered, any new additions to the dataset should cover whole FIR's (e.g. HECC/KZFW). Some exceptions can be made for further splits if the (sub)sector is controlled consistently outside of events and the amount of traffic justifies it. This will be reviewed on a case by case basis. 

<br>

# FIRBoundaries.dat

New Airspace: ```ICAO|IsOceanic|IsExtension|PointCount|MinLat|MinLon|MaxLat|MaxLon|CenterLat|CenterLon```

Airspace Points (One per line; as many as ``PointCount`` indicates):
```Lat|Lon```

<br>

# VAT-Spy test mode

VAT-Spy comes with a test mode that can be used to test out sector data. Download the latest json3 file from [the VATSIM status api](https://status.vatsim.net/) and save as ```test-data.json``` to your ```%appdata%/VAT-Spy``` folder. Edit the JSON file to display specific sectors. 

<br>

# Who's on the VAT-Spy Client Data Update Project Team?

Néstor Pérez - Project Lead<br />
Niels Voogd - Data Management Team<br />
Adrian Bjerke - Data Management Team<br />
Alex Long - Data Management Team<br />


<br>

# Credits

Ross Carlson - Developer, VAT-Spy<br />
