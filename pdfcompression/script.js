const upload = document.getElementById('upload');
const compressBtn = document.getElementById('compress-btn');
const status = document.getElementById('status');
const resultBox = document.getElementById('result');
const fileInfo = document.getElementById('file-info');
const downloadLink = document.getElementById('download');
const levelSelect = document.getElementById('compression-level');
const dropArea = document.getElementById("drop-area");

// store file manually (IMPORTANT FIX)
let selectedFile = null;

/* =========================
   DRAG & DROP
========================= */

dropArea.addEventListener("click", () => upload.click());

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "green";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = "#38bdf8";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#38bdf8";

  selectedFile = e.dataTransfer.files[0];

  if (selectedFile) {
    upload.files = e.dataTransfer.files; // optional visual sync
  }
});

/* =========================
   COMPRESS BUTTON
========================= */

compressBtn.addEventListener('click', compressPDF);

/* =========================
   MAIN FUNCTION
========================= */

async function compressPDF() {
  try {
    const file = selectedFile || upload.files[0];

    if (!file) {
      alert("Upload a PDF file first!");
      return;
    }

    if (file.type !== 'application/pdf') {
      alert("Please upload a valid PDF!");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Max file size is 10MB");
      return;
    }

    status.innerText = "Compressing...";
    resultBox.style.display = 'none';

    console.log("File:", file);

    const arrayBuffer = await file.arrayBuffer();

    const { PDFDocument } = PDFLib;

    // load PDF
    const originalPDF = await PDFDocument.load(arrayBuffer);
    const newPdf = await PDFDocument.create();

    const pageCount = originalPDF.getPageCount();
    console.log("Pages:", pageCount);

    // copy pages
    for (let i = 0; i < pageCount; i++) {
      const [page] = await newPdf.copyPages(originalPDF, [i]);
      newPdf.addPage(page);

      // prevent UI freezing
      await new Promise(res => setTimeout(res, 0));
    }

    const level = levelSelect.value;

    let saveOptions = {
      useObjectStreams: true
    };

    if (level === "medium" || level === "high") {
      saveOptions.compress = true;
    }

    // save PDF
    const pdfBytes = await newPdf.save(saveOptions);

    const compressedSize = pdfBytes.length;
    const originalSize = file.size;

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "compressed.pdf";

    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(2);

    fileInfo.innerText = `
Original: ${(originalSize / 1024).toFixed(2)} KB
Compressed: ${(compressedSize / 1024).toFixed(2)} KB
Reduction: ${reduction}%
    `;

    resultBox.style.display = 'block';
    status.innerText = "Compression complete!";

  } catch (error) {
    console.error("FULL ERROR:", error);
    alert(error.message);
  }
}