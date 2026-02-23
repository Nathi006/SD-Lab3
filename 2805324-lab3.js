
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
    const {minYear, maxYear, artist} = criteria;
    let output = [];
    if (tracks.length === null || Array.isArray(tracks)){
        return []
    }
}

console.log(filterAndTransformTracks(tracks, {artist : 'The Weekend'}));
module.exports = {
    getMusicTitlesByYear,
    filterAndTransformTracks
};
