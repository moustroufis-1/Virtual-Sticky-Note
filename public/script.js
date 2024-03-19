document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('video');
  const codeReader = new ZXing.BrowserMultiFormatReader();
  const statusElem = document.getElementById('status');

  function startScan() {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
          .then(function(stream) {
              video.srcObject = stream;
              video.setAttribute("playsinline", true); // required to play video inline on iPhone
              video.play();
              decodeOnce();
          })
          .catch(function(err) {
              statusElem.textContent = 'Error starting video stream: ' + err;
          });
  }

  function decodeOnce() {
      codeReader.decodeFromVideoElement(video).then((result) => {
          console.log(result);
          statusElem.textContent = result.text;
          // Optionally, stop the camera after a successful scan
          // video.srcObject.getTracks().forEach(track => track.stop());
      }).catch((err) => {
          if(err instanceof ZXing.NotFoundException){
              console.log('No QR code found.');
          } else {
              console.error(err);
              statusElem.textContent = 'Error decoding QR Code: ' + err;
          }
      });
  }

  startScan();
});
