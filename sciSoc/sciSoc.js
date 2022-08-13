var topics = ['Wildfires in California', 'Wildfires in the PNW', 'Wildfires in the Mountain West', 'Drought in California', 'Sea level rise in the Outer Banks', 'Sea level rise in the South Carolina/Georgia Sea Islands', 'Sustainable agriculture in the United States', 'Indigenous land management practices ', 'Nutrition and GMOs', 'Responsive prosthetics', 'Oil spill remediation', 'Forever chemicals', 'Microplastics in seafood', 'Air pollution in urban neighborhoods', 'Coal ash dumping', 'Mining practices in the Appalachians', 'Oklahoma’s earthquakes', 'Nuclear power in the US', 'Lead contamination in low-income communities in the US', 'Access to clean water', 'Opioid use', 'mRNA vaccines', 'Space weather and satellite communications', 'Mining remediation in Montana and Idaho', 'Agricultural waste runoff', 'Extreme heat events', 'Artificial organs', 'Permafrost melting in the arctic', 'CTE in football', 'Chronic wasting disease in deer', 'Spread of Lyme’s disease', 'Lionfish are invading the Atlantic', 'The Russian Olive WILL NOT DIE', 'Recycling plastic', 'Mining rare earth elements', 'Preparing for the next pandemic', 'The sixth mass extinction', 'Deforestation in Brazil', 'Deforestation in DRC', 'Deforestation in Bolivia', 'Long covid', 'Risks from near-earth objects', 'Snarge', 'Microdosing and mental illness', 'Developing cancer drugs', 'Chemical weapons disposal', 'Nuclear waste disposal', 'Salmonella and listeria in produce', 'Treatments for A.L.S.', 'Urban heat islands', 'Malaria', 'Space junk', 'Bioplastics', 'Unexploded landmines', 'Zebra mussels moving west'];

function get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
}

function main(){
    var topic = get_random(topics);
    document.getElementById("topic").innerHTML = topic;
    document.getElementById("google").href="https://google.com/search?q=" + topic;
    document.getElementById("scholar").href="https://scholar.google.com/scholar?q=" + topic;
}
