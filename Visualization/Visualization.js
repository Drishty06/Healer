function generatePDF() {
    var doc = new jsPDF();  //create jsPDF object
    doc.fromHTML(document.querySelector("body"), // page element which you want to print as PDF
        15,
        15,
        {
            'width': 1400  //set width
        },
        function (a) {
            doc.save("your_answers.pdf"); // save file name as HTML2PDF.pdf
        });
}

