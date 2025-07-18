# VAT-Spy Client Data Update Project

VAT-Spy is an Air Traffic and ATC Display client that was designed by Ross Carlson for the VATSIM Network. VAT-Spy can be obtained at [vatspy.rosscarlson.dev](https://vatspy.rosscarlson.dev/)

## How Do I Submit Updates?

We have chosen GitHub to be the core of this project so far, as it allows for collaboration on the project and near real-time updates to VAT-Spy data once a pull request has been pushed to the live data. Updates to data should be made directly by submitting a PR through GitHub. Updates on GitHub that will be merged will be those that either come from verified GitHub accounts belonging to Regions, Divisions, or FIRs/ARTCCs or that have been explicitly authorized by a staff account.

## Approved contributors

To contribute to this dataset, you'll need approval from a local or facility staff member.<br>
You can find a list of current approved contributors [here](https://docs.google.com/spreadsheets/u/4/d/e/2PACX-1vRHzHhKz4icslNkd3I6mF1Mp_6gan4muRcWZb8fCYL8_S0C6GDpG409xQGTmPAXLPupEWWws3euNK7O/pubhtml?gid=0).

### If you are a staff member

Email your request to vatspy-data-project (at) vatsim.net.  
If you're using a personal email (e.g., Gmail), we'll need additional proof of your staff status.

Please include the following information in your email:

- **GitHub username:**
- **VATSIM ID:**
- **Name:**
- **Region/FIR:**
- **Staff role**

### If you are not a staff member

Contact the staff in your facility and have them send a request for your account to be approved.

The email they send should include:

- **Your GitHub username:**
- **Your Name:**
- **Your VATSIM ID:**
- **Your Region/FIR:**
- **VATSIM ID + name of staff member sending the request:**

> [!Note]
>* The **Name** you provide will be published on the contributor list.
>* Approved contributor status lasts **2 years** unless otherwise specified. After this, a new request must be sent.
>* Contributors on the list may be tagged in issues or pull requests for their attention or input.
>* Non-approved users can still contribute if an approved user comments on their pull request, confirming they approve the changes.

## Submission Guidelines
To ensure timely processing and avoid last-minute issues, please keep the following guidelines in mind:

- **Large Changes:** If you submit significant changes less than two weeks before an AIRAC date, we can't guarantee they'll be merged by that AIRAC.
- **Other Changes:** Submissions made less than one week before an AIRAC date also risk not being merged in time.
- **Unresolved Issues:** Pull requests with outstanding issues (like conflicts, invalid data, or requested changes) that aren't resolved two days before an AIRAC might be pushed to the next AIRAC cycle.

While we usually aim to get everything resolved and merged for each AIRAC, these guidelines help manage expectations for everyone.

### Included Sectors

Since the introduction of VATSpy version 1.4.0, a significant change has been implemented concerning the handling of sub-sectors. Previously, there was a strict policy in place aimed at reducing clutter on the map by limiting the inclusion of sub-sectors in the dataset.

Currently, we are open to accepting sub-sectors that offer clear benefits to the VACC. If you wish to propose the addition of new sub-sectors, we kindly request that you provide an explanation for why these additions are necessary and how they would be advantageous. It's important to note that this is not an open invitation to include every single sub-sector within your FIR at this time.

### Boundaries.geojson

This file uses the GeoJSON format as defined in [RFC7946](https://datatracker.ietf.org/doc/html/rfc7946). At the end of each cycle a FIRBoundaries.dat will be generated and included in the release, for testing in vat-spy [a converter](https://github.com/NelisV/vatspy-geojson/releases/latest) can be used.

## Who's on the VAT-Spy Client Data Update Project Team?

- Niels Voogd - Data Management Team
- Adrian Bjerke - Data Management Team
- Danila Rodichkin - Data Management Team

## Credits

- Ross Carlson - Developer, VAT-Spy
- Néstor Pérez - Previous Project Leader
