# tkinter Python Library: Creating GUI Windows
import tkinter

# Display tkinter version:
print(tkinter.TkVersion)
print(tkinter.TclVersion)

# Test tkinter is working: Pops up a window on the screen.
# tkinter._test()

# Create a GUI Window:
# 800x600 is the size of window. 400+100 is location: 400 px from left, 100 px from tom.
mainWindow = tkinter.Tk()
mainWindow.title("Hello Chris")
mainWindow.geometry('800x600+400+200')

# Create the text for the label at top below the title text:
label = tkinter.Label(mainWindow, text="Hello World Label")
label.pack(side='top')

# Creating a left frame to house gui elements:
leftFrame = tkinter.Frame(mainWindow)
leftFrame.pack(side='left', anchor='n', fill=tkinter.Y, expand=False)

# Now instead of using main window as shown below, we will
# mainWindow w/ our frame name:
canvas = tkinter.Canvas(leftFrame, relief='raised', borderwidth=1)

# Put a canvas box inside the window on the left side and raised w/ a border.
# fill=tkinter.Y fills splits the box vertically.
# canvas = tkinter.Canvas(mainWindow, relief='raised', borderwidth=1)
# canvas.pack(side='left', fill=tkinter.Y)

# Put canvas on left part of the window:
canvas.pack(side='left', anchor='n')

# Create a Right frame to house the buttons:
rightFrame = tkinter.Frame(mainWindow)

# Pack the right frame:
rightFrame.pack(side='right', anchor='n', expand=True)

# Can also fill in X direction but must use expand.
# Also the case if you cange side=top and try to fill Y, you need expand.
# canvas.pack(side='left', fill=tkinter.X, expand=True)

# Can also fill and expand in both directions:
#canvas.pack(side='left', fill=tkinter.BOTH, expand=True)

# Create buttons putting in frame instead of mainWindow like below.
button1 = tkinter.Button(rightFrame, text="button1")
button2 = tkinter.Button(rightFrame, text="button2")
button3 = tkinter.Button(rightFrame, text="button3")

# Create buttons:
button1 = tkinter.Button(mainWindow, text="button1")
button2 = tkinter.Button(mainWindow, text="button2")
button3 = tkinter.Button(mainWindow, text="button3")

# Pack the buttons:
# Put them on the north, south, and east side of the canvas:
# Put the buttons on the left side:
# button1.pack(side='left', anchor='n')
# button2.pack(side='left', anchor='s')
# button3.pack(side='left', anchor='e')

# Pack the buttons to the top:
button1.pack(side='top')
button2.pack(side='top')
button3.pack(side='top')

# Show the window:
mainWindow.mainloop()






























