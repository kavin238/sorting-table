function sortTable(columnIndex) {
    const table = document.getElementById('myTable');
    const rows = Array.from(table.rows);
  

    const dataRows = rows.slice(1);
  
    
    const dataType = isNaN(dataRows[0].cells[columnIndex].textContent) ? 'text' : 'number';
  
        dataRows.sort((rowA, rowB) => {
      let valueA = rowA.cells[columnIndex].textContent.trim();
      let valueB = rowB.cells[columnIndex].textContent.trim();
  
      if (dataType === 'number') {
        return Number(valueA) - Number(valueB);
      } else {
        return valueA.localeCompare(valueB);
      }
    });
  
    
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  
        dataRows.forEach((row) => {
      table.appendChild(row);
    });
  }
  