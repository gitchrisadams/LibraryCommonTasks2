# Shape class for creating Shape objects:
class Shape:
    # Constructor:
    def __init__(self, xcor, ycor):
        self.x = xcor
        self.y = ycor

    # toString method to format as a String:
    def __str__(self):
        return 'x: ' + str(self.x) + ' y: ' + str(self.y)

    # Method to move a shape to different x/y coordinate:
    def move(self, x1, y1):
        self.x = self.x + x1
        self.y = self.y + y1

# Create a Rectangle class:
# The class accepts a Shape object.
class Rectangle(Shape):
    # Conctructor:
    def __init__(self, xcor, ycor, width, height):
        # Use the base class Constructor to set the x/y coordinates:
        Shape.__init__(self, xcor, ycor)

        # Set the width and the height to values passed in:
        self.width = width
        self.height = height

    # To String method to format output:
    def __str__(self):
        # Create a String to store Shape:
        # Use the Shapes To String method to save Shape info.
        retStr = Shape.__str__(self)

        # Concat the width and the height onto the String:
        retStr += ' width: ' + str(self.width) + ' height: ' + str(self.height)

        # return the formatted String:
        return retStr

# Demonstrate the Shape and Rectangle Class:
# Create a Rectangle Object:
# rec = Rectangle(5, 10, 8, 9)

# Display coordinates of the Rectangle:
# print("The coordinates of the rectangle are: " + str(rec))

# Move the Rectangle:
# rec.move(10, 12)

# Print Rect after moving it:
# print("The new coordinates of the rectangle are: " + str(rec))
