function formtest(){
    const sampleString1 = "Buffalo is the second-largest city in the U.S. state of New York (after New York City) and the seat of Erie County. It lies in Western New York, at the eastern end of Lake Erie, at the head of the Niagara River, on the United States border with Canada. With a population of 278,349 according to the 2020 census, Buffalo is the 78th-largest city in the United States.Buffalo and the city of Niagara Falls together make up the two-county Buffalo–Niagara Falls Metropolitan Statistical Area (MSA), which had an estimated population of 1.1 million in 2020, making it the 49th largest MSA in the United States. Before the 17th century, the region was inhabited by nomadic Paleo-Indians who were succeeded by the Neutral, Erie, and Iroquois nations. In the early 17th century, the French began to explore the region. In the 18th century, Iroquois land surrounding Buffalo Creek was ceded through the Holland Land Purchase, and a small village was established at its headwaters. In 1825, after its harbor was improved, Buffalo was selected as the terminus of the Erie Canal, which led to its incorporation in 1832. The canal stimulated its growth as the primary inland port between the Great Lakes and the Atlantic Ocean. Transshipment made Buffalo the world's largest grain port of that era. After the coming of railroads greatly reduced the canal's importance, the city became the second-largest railway hub (after Chicago). During the mid-19th century, Buffalo transitioned to manufacturing, which came to be dominated by steel production. Later, deindustrialization and the opening of the St. Lawrence Seaway saw the city's economy decline and diversify. It developed its service industries, such as health care, retail, tourism, logistics, and education, while retaining some manufacturing. In 2019, the gross domestic product of the Buffalo–Niagara Falls MSA was $53 billion. The city's cultural landmarks include the oldest urban parks system in the United States, the Albright–Knox Art Gallery, the Buffalo Philharmonic Orchestra, Shea's Performing Arts Center, the Buffalo Museum of Science, and several annual festivals. Its educational institutions include the University at Buffalo, Buffalo State University, Canisius College, D'Youville University and Medaille College. Buffalo is also known for its winter weather, Buffalo wings, and three major-league sports teams: the National Football League's Buffalo Bills, the National Hockey League's Buffalo Sabres and the National Lacrosse League's Buffalo Bandits.";
    const SampleString2 = "Hello buffalo. Thank you all for coming."; 
    
    combineStringList = [sampleString1, sampleString2];
    newList = [];
    form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        let html = "";
        searchvalue = document.getElementById("inputvalue").value;
        for (let y of combineStringList) {
            if (y.toLowerCase().includes(searchvalue)) {
            newList.push(y);
            }
            }
        newList.forEach(singleResult => {
        htmlSegment = `<p>${singleResult}</p>`;
            html += htmlSegment;});
     document.getElementById("testform").innerHTML = html;
    event.preventDefault();
    }, false);
    }
formtest();
       
