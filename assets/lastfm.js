const username = "j0seph_09"
const apikey = "67e2f6711d17eadaeeff57b75e7c0019" // probably should hide it but i dont gaf
const limit = 5 // num of tracks to get

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apikey}&format=json&limit=${limit}`)
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('lastfm-grid');
    const tracks = data.recenttracks.track;

    tracks.forEach(track => {
        const trackName = track.name.length > 27 ? track.name.substring(0, 27) + '...' : track.name
        
        const a = document.createElement('a')
        a.className = 'project'
        a.href = track.url
        a.target = '_blank'

        const img = document.createElement('img')
        img.className = 'trackImg'
        img.src = track.image[2]['#text'] || 'https://placehold.co/125x125'

        const namep = document.createElement('p')
        namep.className = 'trackName'
        namep.textContent = trackName

        const artistp = document.createElement('p')
        artistp.className = 'artistName'
        artistp.textContent = track.artist['#text']

        a.append(img, namep, artistp)
        grid.appendChild(a)
    })
  })
  .catch(err => console.error('damnnnnnn: ', err));