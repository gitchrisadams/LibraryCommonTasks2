# Example of Doc Strings:

class Song:
    """Class to represent a song
    
    Attributes:
        title (str): The title of the song.
        artist (Artist): An artist object.
        duration (int): The duration of the song in seconds. May be zero.
    """

    # Constructor:
    def __init__(self, title, artist, duration=0):
        """Song init method.
        
        Args:
            title (str): Initializes the 'title' attribute.
            artist (Artist): An Artist object representing the song's creator.
            duration (Optional[int]): Initial value for the 'duration' attribute.
                Will default to zero if not specified.
        """
        # Initialize attributes:
        self.title = title
        self.artist = artist
        self.duration = duration

class Album:
    """ Class to represent an Album, using it's track list.
    
    Attributes:
        name(str): The name of the album.
        year(int): The year the album was released.
        artist:(Artist): The artist responsible for the album.
            If not specified, the artist will default to an artist 
            with the name "Various Artists".
        track(List[Song]): A list of songs on the album.
    
    Methods:
        add_song: Used to add a new song to the album's track list.
    """

    def __init__(self, name, year, artist=None):
        self.name = name
        self.year = year
        if artist is None:
            self.artist = Artist("Various Artists")
        else:
            self.artist = artist

        self.tracks = []

    def add_song(self, song, position=None):
        """ Adds a song to the track list
        
        Args:
            song(Song):A song to add.
            position(Optional[int]): If specified, song will be added to that position
                in the track list = inserting it between other songs if necessary.
                Otherwise, the song will be added to the end of the list.
        """
        if position is None:
            self.tracks.append(song)
        else:
            self.tracks.insert(position,song)


class Artist:
    """Basic class to store artist details.
    
    Attributes:
        name(str):The name of the artist.
        albums(List[Album]): A list of the albums by this artist.
            The list includes only those albums in this collection, it is
            not an exhaustive list of the artist's published albums.
    
    Methods:
        add_album:Use to add a new album to the artist's albums list.
    """

    def __init__(self):
        self.name = name
        self.albums = []


    def add_album(self, album):
        """Add a new album to the list.
        
        Args:
            album(Album):Album object to add to the list.
                If the album is already present, it wil not be added again
                (although this is yet to be implemented).
        """
        self.albums.append(album)


def load_data():
    new_artist = None
    new_album = None
    artist_list = []

    with open("albums.txt", "r") as albums:
        for line in albums:
            # Data row should consist of (artist, album, year, song)
            artist_field, album_field, year_field, song_field = tuple(line.strip('\n').split('\t'))

            # Convert the year to an int:
            year_field = int(year_field)

            #Display:
            print(artist_field, album_field, year_field, song_field)


""" 
The if __name__ == '__main__': explaination:
The reason is that all of the code that is at indentation level 0 gets executed. 
Functions and classes that are defined are, well, defined, but none of their code gets ran. 
Unlike other languages, there's no main() function thats gets run automatically.
In this case, the top-level code is an if block.
__name__ is a built-in variable which evaluate to the name of the current module.
However, if a module is being run directly (as in myscript.py above), then __name__ instead is set to the string "__main__".
Thus, you can test whether your script is being run directly or being imported by something else by testing
You will see more about this as your progress.
"""
if __name__ == '__main__':
    load_data()

# Separator:
print("-" * 200)
print("-" * 200)
print("-" * 200)
print()

# Display the DocString help for this class:
help(Song)
print("-" * 200)
print()

# Display help on just the init Constructor:
help(Song.__init__)
print("-" * 200)
print()

# Just print out the Class info:
print(Song.__doc__)
print("-" * 200)
print()

# Just print out the init Constructor:
print(Song.__init__.__doc__)
print("-" * 200)
print()