(async () => {
  "use strict";

  async function startDocDownload() {
    // Get all the rows from the table
    let rows = document.querySelectorAll("#tbl tr");

    // Iterate over each row
    for (let i = 1; i < rows.length; i++) {
      // Get the cells of the row
      let cells = rows[i].querySelectorAll("td");

      // Get the data from the cells
      let withholderName = cells[3].innerText;
      let certificateNo = cells[9].innerText;
      let certificateDate = cells[7].innerText;

      // Construct the filename
      let filename = `${withholderName}_${certificateNo}_${certificateDate}.pdf`;

      console.log(filename)

      // Get the link from the 'WHT Certificate No' cell
      let link = cells[9].querySelector("a").href;

      // Download the file
      chrome.downloads.download({
        url: link,
        filename: `downloads/${filename}`
      });
    }
  }

  startDocDownload();
})();
