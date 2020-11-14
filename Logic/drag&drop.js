var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: true
});

var rectangleLayer = new Konva.Layer();
 
function spawnRectangle(angle){
    var rectangle = new Konva.Group({
        x: 25, 
        y: 25, 
        width: 130,
        height: 25,
        rotation: angle, 
        draggable: true,
    }); 

    rectangle.add(new Konva.Rect({
        width: 130,
        height: 25,
        fill: 'lightblue'
    }));

    rectangle.add(new Konva.Text({
        text:'123',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000',
        width: 130,
        padding: 5,
        align: 'center'
    }));
    rectangleLayer.add(rectangle);
    stage.add(rectangleLayer);
}

