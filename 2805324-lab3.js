
/**
 * Groups music tracks by year and returns sorted titles
 * @param {Array} tracks - Array of track objects
 * @returns {Object} - Object with years as keys and sorted title arrays as values
 */
function getMusicTitlesByYear(tracks){
    let output = {}; //empty object which we will use to store the objects
    for (let i =0; i < tracks.length; i++){
        const year = tracks[i].year;
        const title = tracks[i].title;
        if (!output[year]){ //
            output[year] = [];
        }
        output[year].push(title);
    }
    for (const year in output){
        output[year].sort();
    }
    return output;
}

const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },   
];
/**
 * Filters tracks by criteria and adds decade information
 * @param {Array} tracks - Array of track objects
 * @param {Object} criteria - Filter criteria (minYear, maxYear, artist)
 * @returns {Array} - Filtered and transformed track objects
 */
function filterAndTransformTracks(tracks, criteria){
    if (!Array.isArray(tracks) || tracks.length === 0) return [];

    const { minYear, maxYear, artist } = criteria || {};

    return tracks
        .filter(track => {
            if (!track || typeof track.title !== 'string' || typeof track.artist !== 'string' || typeof track.year !== 'number') {
                return false;
            }
            if (minYear !== undefined && track.year < minYear) return false;
            if (maxYear !== undefined && track.year > maxYear) return false;
            if (artist !== undefined && track.artist.toLowerCase() !== artist.toLowerCase()) return false;
            return true;
        })
        .map(track => ({
            title: track.title,
            artist: track.artist,
            year: track.year,
            decade: `${Math.floor(track.year / 10) * 10}s`
        }));
}
module.exports = {
    getMusicTitlesByYear,
    filterAndTransformTracks
};
