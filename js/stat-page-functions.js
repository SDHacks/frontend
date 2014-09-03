/**
 * File: stat-page-functions.js
 *
 * Author: Micah Rothenbuhler
 *
 * This file contains three functions called by a script from home.html.
 * It pretty much renders the text on the screen.
 */


/**
 * This contains the general update pattern show by Mike Bostocks.
 * Binds given data, updates, enters then exits.
 * Data is in the format of an array of strings which contain single
 * characters.
 */
function updateText(data) {

    var text = svg.selectAll("text")
            .data(data, function(d) { return d; }),
        duration = 950,
        xOffset = 50 + Math.random() * 500;

    // update
    text
      .transition().duration(duration)
        .attr("fill", "black")
        .attr("x", function(d, i) {
            return xOffset + i * 32;
        });

    // enter
    text.enter().append("text")
        .attr("fill", "#1f77b4")
        .attr("font-family", "monospace")
        .attr("font-size", "48px")
        .attr("font-weight", "bold")
        .attr("y", -60)
        .attr("x", function(d, i) { return xOffset + i * 32; })
        .style("fill-opacity", 1E-6)
        .style("stroke-opacity", 1E-6)
        .text(function(d) { return d; })
      .transition().duration(duration)
        .attr("stroke", "black")
        .attr("y", 0)
        .style("stroke-opacity", 1)
        .style("fill-opacity", 1);

    // exit
    text.exit()
        .attr("fill", "#C3B713")
      .transition().duration(duration)
        .attr("y", 60)
        .style("fill-opacity", 1E-6)
        .style("stroke-opacity", 1E-6)
        .remove();
}

// Shuffles the alphabet and returns it.
function shuffleAlphabet() {

    var t, i,
        shuffled = ALPHABET,
        m = shuffled.length;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = shuffled[m],
        shuffled[m] = shuffled[i],
        shuffled[i] = t;
    }

    return shuffled;
}

// Determines if we need a shuffled alphabet or one of the
// information messages by var flip_flop. 
function getNewText() {

    // rotation of information messages
    var rotation = [
            ["2","4"," ","h","o","u","r","s"],
            ["s","a","n"," ","d","i","e","g","o",","," ","c","alifornia"],
            ["x","y","z"," ","s","c","hools"],
            ["x","y","z"," ","i","n"," ","p","rizes"],
            ["s","e","m","i","n","a","r"," ","f","or new hackers"],
            ["x","y","z"," ","b","i","g","-","n","a","m","e"," ","s","p",
                "o","nsors"]
        ];

    if (flip_flop % 2 === 0) {

        rotation_index++;
        return rotation[rotation_index % rotation.length];
    }
    else {

        return shuffleAlphabet()
            .slice(0, Math.floor(Math.random() * 26) + 1)
            .sort();
    }
}
