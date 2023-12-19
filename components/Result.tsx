import React from "react";
import html2pdf from "html2pdf.js";

const Result: React.FC<{
  data: { sortedCategories: any[]; dominantType: string };
  name: string;
  organization: string;
}> = ({ data, name, organization }) => {
  const { sortedCategories, dominantType } = data;

  const downloadPDF = () => {
    const content = document.getElementById("result-content");
    const pdfOptions = {
      margin: 10,
      filename: "quiz_result.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(content)
      .set(pdfOptions)
      .outputPdf((pdf: any) => {
        pdf.save("quiz_result.pdf");
      });
  };

  return (
    <div>
      <div id="result-content">
        <h1>{organization} Quiz Result</h1>
        <p>Name: {name}</p>
        <p>Dominant Type: {dominantType}</p>
        <ul>
          {sortedCategories.map((categoryData, index) => (
            <li key={index}>
              {categoryData.name}: {categoryData.percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default Result;
