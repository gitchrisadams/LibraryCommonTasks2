class Egg:
    """Used for creating an egg object"""

    def __init__(self, kind="fried"):
        """Constructor with 'fried' as a default value."""
        self.kind = kind


    def whatKind(self):
        return self.kind


def main():
    # Create an egg using default value.
    fried = Egg()

    # Create an egg passing in type as scrambled.
    scrambled = Egg('scrambled')

    print(fried.whatKind())
    print(scrambled.whatKind())

if __name__ == "__main__": main()