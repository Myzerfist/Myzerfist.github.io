var loaded = false;

document.getElementById('preload').addEventListener('mouseover', function() {
    if (loaded == false)
    {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'owlcss/index.html';
        document.head.appendChild(link);
        loaded = true;
    }
    else {
        return;
    }
});