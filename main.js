function generateBarCode() {
    var serialNo = document.getElementById('serialNo').value;
    var link = "https://darenpuan.github.io/WITs/" + serialNo + ".html"
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + link + '&amp;size=100x100';
    return url;
}

function generateBarCodeC() {
    var serialNo = $('#serialNo').val();
    var link = "https://darenpuan.github.io/WITs/" + serialNo + ".html"
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + link + '&amp;size=100x100';
    $('#barcode').attr('src', url);
}
