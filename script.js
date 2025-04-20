document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
  });
  

  <button
  onclick="downloadCV()"
  class="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
>
  Download CV
</button>


  function downloadCV() {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'My_CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

