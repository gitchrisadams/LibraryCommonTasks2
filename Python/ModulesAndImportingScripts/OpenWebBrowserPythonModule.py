# Webbrowser Python library:

# Import Libraries:
import webbrowser

# Open website:
# webbrowser.open("http://christopheradams.com")

# Open website w/ Google chrome:
chrome = webbrowser.get(using='google-chrome')
chrome.open_new("https://www.python.org/")

# Open the webbrowser library help documentation:
help(webbrowser)





