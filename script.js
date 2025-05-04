//your code here
document.addEventListener("DOMContentLoaded", function() {
    const songName = "Never Gonna Give You Up by Rick Astley";
    const songLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.getElementById("song-link").textContent = songName;
    document.getElementById("song-link").href = songLink;
});
