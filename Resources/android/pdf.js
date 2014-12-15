function exists(file) {
    try {
        if (file.exists()) return true;
    } catch (e) {}
    return false;
}

function isPdf(file) {
    try {
        var blob = file.read();
        if (!blob) return false;
        blob.slice || (blob = blob.text);
        if (!blob) return false;
        if (0 === blob.indexOf("%PDF")) return true;
    } catch (e) {}
    return false;
}

function download(url, cookies, done) {
    var base = Ti.Utils.md5HexDigest(url) + ".pdf";
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, base);
    if (exists(file)) return done(null, file, base, url);
    var client = Ti.Network.createHTTPClient();
    client.onload = function(e) {
        try {
            var base = Ti.Utils.md5HexDigest(url) + ".pdf";
            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, base);
            if (200 != e.source.status) throw new Error("http status " + e.source.status);
            file.write(e.source.responseData);
            return done(null, file, base, url);
        } catch (e) {}
    };
    client.onerror = function(e) {
        return done(e);
    };
    client.ondatastream = function(e) {
        ind.value = e.progress;
        label.text = (100 * ind.value).toFixed(0) + "% Downloading";
        if (100 * ind.value == 100) return done();
    };
    client.setRequestHeader("Cookie", cookies);
    client.open("GET", url);
    client.send();
    return client;
}

function copyToTemp(srcFile, base, url) {
    var tempdir = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, base);
    tempdir.createDirectory();
    var filename = url.split("/");
    filename = filename[filename.length - 1];
    var tempFile = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, base, filename);
    tempFile.write(srcFile.read());
    return tempFile;
}

function launch(file) {
    Ti.Filesystem.getFile(file.getNativePath());
    var pdfViewer = Ti.UI.createWebView({
        data: "testing",
        width: 1024,
        height: 450,
        touchEnabled: false,
        enableZoomControls: false,
        scalesPageToFit: true,
        loading: true
    });
    return pdfViewer;
}

function pdf(url, cookies, inds, labels, done) {
    ind = inds;
    label = labels;
    if (!Ti.Filesystem.isExternalStoragePresent()) return done(new Error("external"));
    download(url, cookies, function(err, file, base, url) {
        if (err) return done(err);
        var tempFile = copyToTemp(file, base, url);
        var webview = launch(tempFile);
        done(null, webview);
    });
}

var ind = "";

var label = "";

module.exports = pdf;