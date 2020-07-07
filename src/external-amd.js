require.config({
    packages : [
        {
            name : 'lodash',
            location : '../node_modules/lodash-amd'
        },{
            name : 'numConvString',
            location : '../node_modules/num-conv-string/dist',
            main: 'num-conv-string.umd.min'
        }
    ]
});

require(['lodash','numConvString'], function(_,numConvString) {
    _.each([1,2], function(num) { console.log(num); });
    document.getElementById('root').innerHTML = " Ein Browser Beispiel für den Aufruf einer API: " +
        "<br> <br>Resultat: " +
        "<br> übersetze wordToNum('Eins') zu " + numConvString.wordToNum('Eins') +
        "<br> übersetze wordToNum('Zwei') zu " + numConvString.wordToNum('Zwei') +
        "<br> übersetze numToWord(1) zu " + numConvString.numToWord(1) +
        "<br> übersetze numToWord(2) zu " + numConvString.numToWord(2) +
        "" ;

});
