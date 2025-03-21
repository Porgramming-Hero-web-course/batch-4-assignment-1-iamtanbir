interface Circle {
    shape: "circle";
    radius: number;
  }
  
  interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
  }
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    }
    
    else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    
    return 0;
  }
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log("Circle Area:", circleArea.toFixed(2)); 
  
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
  console.log("Rectangle Area:", rectangleArea);  