'use strict';

// *** GO LIVE AND WATCH ANY CHANGES YOU MAKE HAPPEN IN REAL TIME ON YOUR BROWSER AS YOU MAKE THEM TO THIS TABLE ***

// * For visualization purposes, what you are creating here in JavaScript would look like the following if in HTML. *

//     <table id="practice-table">
//         <tbody>
//             <tr>
//                 <th>Header Cell 1, Row 1</th>
//                 <th>Header Cell 2, Row 1</th>
//             </tr>
//             <tr>
//                 <td>Row 2, Cell 1</td>
//                 <td>Row 2, Cell 2</td>
//             </tr>
//             <tr>
//                 <td>Row 3, Cell 1</td>
//                 <td>Row 3, Cell 2</td>
//             </tr>
//         </tbody>
//     </table>


// TODO: MAKE A TABLE VIA A FUNCTION USING JAVASCRIPT:

function renderPracticeTable() {
  // 1. Assign the practice-table and/or <table> tag we made in our index.html to the variable "practiceTable" for our JS to be able to render and use it.
  let practiceTable = document.getElementById('practice-table');

  // 2. Physically create a table and assign it to the variable "physicalTableBody" for our JS to create the actual table and then be able to assign Child Elements such as 'thead', 'tbody', and 'tfoot'.
  let physicalTableBody = document.createElement('table');
  practiceTable.appendChild(physicalTableBody);

  // 3. Create a table/container to hold all the rows ('tr') and cells ('td') for our table. Just like if listed in an HTML document, here, the 'tbody' MUST also be a Child Element of the 'table'.
  let actualTableBody = document.createElement('tbody');
  physicalTableBody.appendChild(actualTableBody);


  
  let headerRow = document.createElement('tr'); // 4. Make a blank first row for the Header Row.

  let headerCell1Row1 = document.createElement('th'); // 5. Make the First Cell (top-left of the table) of the Row that we are telling to be a header 'th'.
  headerCell1Row1.textContent = 'Header Cell 1, Row 1'; // 6. Set the text content of the 'headerCell1Row1' to "Header Cell 1, Row 1".
  headerRow.appendChild(headerCell1Row1); // 7. Append the 'headerCell1Row1' displaying the text we made, and put that into the 'headerRow' we made earlier with "let headerRow = document.createElement('tr')."


  // * Let's make the second cell that continues along our header row:

  let headerCell2Row1 = document.createElement('th'); // 1. Make a second cell ('th').
  headerCell2Row1.textContent = 'Header Cell 2, Row 1'; // 2. Set the text content of the 'headerCell2Row1' to "Header Cell 2, Row 1".
  headerRow.appendChild(headerCell2Row1); // 3. Append the 'headerCell2Row1' displaying the text we made by attaching that to our variable "headerRow".
  actualTableBody.appendChild(headerRow); // 4. Append everything we just created within this 'headerRow' variable, and attach it to the 'actualTableBody' variable that created our 't-body' in Step 3.


  // * You can repeat this process as much as you want, thus adding another cell or "column" to the table. Try adding a 'headerCell3Row1' to the 'headerRow' variable above and appending it to the 'actualTableBody' variable. *




  // TODO: Let's add a new "row 2", that is normal, and not a header:

  let row2 = document.createElement('tr'); // 1. Make a blank row. ('tr')

  let row2cell1 = document.createElement('td'); // 2. Make a blank cell ('td') for data/text to go in.
  row2cell1.textContent = 'Row 2, Cell 1'; // 3. Set the text content of that cell to "Row 2, Cell 1".
  row2.appendChild(row2cell1); // 4. Append the 'row2cell1' to the 'row2' variable.

  // Make another cell in the same row:
  let row2cell2 = document.createElement('td'); // 1. Create another cell.
  row2cell2.textContent = 'Row 2, Cell 2'; // 2. Set the text content of that cell to "Row 2, Cell 2".
  row2.appendChild(row2cell2); // 3. Append the 'row2cell2' cell to the 'row2' variable.
  actualTableBody.appendChild(row2); // 4. Append everything we just created within this 'row2' variable to the 'actualTableBody' variable that created our 't-body' in Step 3.


 // TODO: Let's add a new "row 3":

  let row3 = document.createElement('tr'); // 1. Make a blank row.

  let row3cell1 = document.createElement('td'); // 2. Make a blank cell for data/text to go in.
  row3cell1.textContent = 'Row 3, Cell 1'; // 3. Set the text content of that cell to "Row 3, Cell 1".
  row3.appendChild(row3cell1); // 4. Append the 'row3cell1' cell to the 'row3' variable.

  // Make another cell in the same row:
  let row3cell2 = document.createElement('td'); // 1. Create another cell.
  row3cell2.textContent = 'Row 3, Cell 2'; // 2. Set the text content of that cell to "Row 3, Cell 2".
  row3.appendChild(row3cell2); // 3. Append the 'row3cell2' cell to the 'row3' variable.

  actualTableBody.appendChild(row3); // 4. Append everything we just created within this 'row3' variable to the 'actualTableBody' variable that created our 't-body' in Step 3
}

// * Try Adding another row! *

renderPracticeTable(); // It's a function. So invoke it!
