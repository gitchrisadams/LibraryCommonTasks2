# tkinter Python Library: Creating GUI Windows w/ Grids
import tkinter

# Create a GUI Window:
mainWindow = tkinter.Tk()
mainWindow.title("Hello Chris")
mainWindow.geometry('640x480-8-200')

# Create the text for the label at top below the title text:
# Use a grid geometry.
label = tkinter.Label(mainWindow, text="Hello World Label")
label.grid(row=0, column=0)

# Creating a left frame to house gui elements:
# Use grid and put in row 1 column 1:
leftFrame = tkinter.Frame(mainWindow)
leftFrame.grid(row=1, column=1)

# mainWindow w/ our frame name:
canvas = tkinter.Canvas(leftFrame, relief='raised', borderwidth=1)

# Put canvas at row 1 column 0 using grid:
canvas.grid(row=1, column=0)

# Create a Right frame to house the buttons:
rightFrame = tkinter.Frame(mainWindow)

# Put the right frame in grid at row 1 column 2:
# Make it stick to the north part / top of the frame.
rightFrame.grid(row=1, column=2, sticky='n')

# Create buttons:
button1 = tkinter.Button(rightFrame, text="button1")
button2 = tkinter.Button(rightFrame, text="button2")
button3 = tkinter.Button(rightFrame, text="button3")

# Place the buttons in the grid in column 0:
button1.grid(row=0, column=0)
button2.grid(row=1, column=0)
button3.grid(row=2, column=0)

# Configure columns with weight:
# Note: grid_columnconfigure same as columnconfigure, just shown for reference.
mainWindow.columnconfigure(0, weight=1)
mainWindow.columnconfigure(1, weight=1)
mainWindow.grid_columnconfigure(2, weight=1)

# Make the frames sunken in w/ a border width of 1:
leftFrame.config(relief='sunken', borderwidth=1)
rightFrame.config(relief='sunken', borderwidth=1)

# Make left frame be sticky to north south:
leftFrame.grid(sticky='ns')

# Make right frame sticky to north, east, west:
rightFrame.grid(sticky='new')

# Give the right frame a weight of 1:
rightFrame.columnconfigure(0, weight=1)

# Make button 2 sticky to east west:
# This allows button to fill the whole width of the frame.
button2.grid(sticky='ew')


# Show the window:
mainWindow.mainloop()



















































