(async function() {
  "use strict";

  async function startDocDownload() {
    // Get all the anchor tags in the table
    let links = document.querySelectorAll("#tbl tbody tr td:nth-child(10) a");

    // Iterate over each link
    for (let i = 0; i < links.length; i++) {
      // Check if the link exists
      if (links[i]) {
        // Simulate a click on the link
        links[i].click();

        // Wait for a short delay before continuing the loop
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  await startDocDownload();
})();
