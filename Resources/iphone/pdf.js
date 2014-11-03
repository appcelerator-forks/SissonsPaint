function exists(file) {
    try {
        if (file.exists()) return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

function isPdf(file) {
    try {
        var blob = file.read();
        if (!blob) return false;
        blob.slice || (blob = blob.text);
        if (!blob) return false;
        console.log("first few characters of pdf file: " + blob.slice(0, 5));
        if (0 === blob.indexOf("%PDF")) return true;
    } catch (e) {
        console.log(e);
    }
    console.log("IS Pdf ");
    return false;
}

function download(url, cookies, done) {
    var base = Ti.Utils.md5HexDigest(url) + ".pdf";
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, base);
    console.log(file);
    if (exists(file)) {
        console.log("File already exists and is pdf, returning");
        return done(null, file, base, url);
    }
    var client = Ti.Network.createHTTPClient();
    client.onload = function(e) {
        try {
            var base = Ti.Utils.md5HexDigest(url) + ".pdf";
            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, base);
            if (200 != e.source.status) throw new Error("http status " + e.source.status);
            file.write(e.source.responseData);
            return done(null, file, base, url);
        } catch (e) {
            return done(e);
        }
    };
    client.onerror = function(e) {
        console.log("http error " + e.source.status);
        return done(e);
    };
    client.ondatastream = function(e) {
        ind.value = e.progress;
        label.text = (100 * ind.value).toFixed(0) + "% Downloading";
        Ti.API.info("ONSENDSTREAM - PROGRESS: " + e.progress);
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
    console.log("launching pdf path: " + file.getNativePath());
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_VIEW,
        data: file.getNativePath(),
        type: "application/pdf"
    });
    Ti.Android.currentActivity.startActivity(intent);
}

function pdf(url, cookies, inds, labels, done) {
    ind = inds;
    label = labels;
    if (!Ti.Filesystem.isExternalStoragePresent()) return done(new Error("external"));
    download(url, cookies, function(err, file, base, url) {
        if (err) return done(err);
        var tempFile = copyToTemp(file, base, url);
        launch(tempFile);
        done();
    });
}

var ind = "";

var label = "";

module.exports = pdf;