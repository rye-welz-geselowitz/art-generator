const containerWidth = 600;
const containerHeight = 600;

//Set up the art container
var container = document.createElement('div');
container.style.width = containerWidth+"px";
container.style.height = containerHeight+"px";
container.style.backgroundColor = 'white';
container.id = 'art-container'
document.getElementsByTagName("BODY")[0].appendChild(container);


populateContainer(container, 1, .8)

// Generate the divs inside the container
function populateContainer(container, borderWidth, probOfColor){
    const rowHeights = randomlyDivide($('#art-container').height());
    rowHeights.forEach( (rowHeight)=> {
        const divWidths = randomlyDivide($('#art-container').width())
        divWidths.forEach( (divWidth) => {
            const div = document.createElement('div');
            div.classList.add('rectangle');
            div.style.borderWidth = borderWidth+'px';
            div.style.width = (divWidth - (borderWidth * 2))+'px';
            div.style.height = (rowHeight - (borderWidth * 2) ) +'px';
            div.style.backgroundColor = getBackgroundColor(probOfColor);
            container.appendChild(div);
        })

    })
}

function getBackgroundColor(probOfColor, defaultColor = 'transparent'){
    const colors = ["red", "yellow", "blue"];
    if(Math.random() > probOfColor){
        const colorIndex = Math.floor(Math.random() * colors.length);
        return colors[colorIndex];
    }
    return defaultColor;
}


function randomlyDivide(totalWidth, mininmumComponentSize = 10){
    //TODO: What if remainder is smaller than minimum?
    let remainder = totalWidth;
    const componentNs = [];
    while(remainder > 0){
        let component;
        if(remainder < 100){ //TODO: don't hard-code
            component = remainder
        }
        else{
            const proposedComponent = Math.floor(Math.random() * remainder);
            component = proposedComponent < mininmumComponentSize ? remainder : proposedComponent;
        }
        componentNs.push(component);
        remainder -= component;
    }
    return componentNs;
}
