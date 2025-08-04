# VAT-Spy Client Data Update Project

VAT-Spy is an Air Traffic and ATC Display client that was designed by Ross Carlson for the VATSIM Network. VAT-Spy can be obtained at [vatspy.rosscarlson.dev](https://vatspy.rosscarlson.dev/)

## How Do I Submit Updates?

Data updates are submitted by creating Pull Requests (PRs) directly to this GitHub repository. You can create a pull request at any time, but it won't be merged until you are an approved contributor or an approved contributor explicitly approves your changes within the PR. Please refer to the section below to learn how to gain contributor status or how to contribute as a non-approved user.

## Approved contributors

To contribute to this dataset, you'll need approval from a local or facility staff member.

You can find a list of current approved contributors [here](https://docs.google.com/spreadsheets/u/4/d/e/2PACX-1vRHzHhKz4icslNkd3I6mF1Mp_6gan4muRcWZb8fCYL8_S0C6GDpG409xQGTmPAXLPupEWWws3euNK7O/pubhtml?gid=0).

> [!Note]
> A common contributor database is shared between this project and the [SimAware TRACON Project](https://github.com/vatsimnetwork/simaware-tracon-project).
> If you have approval to contribute to one project, you are approved to contribute to either.

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

> [!IMPORTANT]
>- The **Name** you provide will be published on the contributor list.
>- Approved contributor status lasts **2 years** unless otherwise specified. After this, a new request must be sent.
>- Contributors on the list may be tagged in issues or pull requests for their attention or input.
>- Non-approved users can still contribute if an approved user comments on their pull request, confirming they approve the changes.

## Submission Guidelines
To ensure timely processing and avoid last-minute issues, please keep the following guidelines in mind:

- **Large Changes:** If you submit significant changes less than two weeks before an AIRAC date, we can't guarantee they'll be merged by that AIRAC.
- **Other Changes:** Submissions made less than one week before an AIRAC date also risk not being merged in time.
- **Unresolved Issues:** Pull requests with outstanding issues (like conflicts, invalid data, or requested changes) that aren't resolved two days before an AIRAC might be pushed to the next AIRAC cycle.

While we usually aim to get everything resolved and merged for each AIRAC, these guidelines help manage expectations for everyone.

### Included Sectors

Since VATSpy version 1.4.0, our approach to sub-sectors has changed. While we used to strictly limit them to reduce map clutter, we now accept sub-sectors that offer clear benefits to the FIR.

If you wish to propose adding new sub-sectors, please explain why they are necessary and how they would be advantageous.

### Boundaries.geojson

This file uses the GeoJSON format as defined in [RFC7946](https://datatracker.ietf.org/doc/html/rfc7946). At the end of each cycle a FIRBoundaries.dat will be generated and included in the release, for testing in vat-spy [a converter](https://github.com/NelisV/vatspy-geojson/releases/latest) can be used.

## Who's currently on the VAT-Spy Client Data Update Project Team?

- Adrian Bjerke - Data Management Team
- Danila Rodichkin - Data Management Team
- Tom Kilpatrick - Data Project Reviewer

## Credits

- Ross Carlson - Developer, VAT-Spy
- Néstor Pérez - Previous Project Leader
- Niels Voogd - Data Management Team
