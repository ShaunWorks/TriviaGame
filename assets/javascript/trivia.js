function triviaBlock(title, answer, options) {
    this.title = title;
    this.answer = answer;
    this.options = options;
}

let blocks = {
    q1: new triviaBlock(
        "What animal lives in the jungle?",
        "Gorilla",
        [
            "Crab",
            "Gorilla",
            "Zebra",
            "Mouse"
        ]
    ),
    q2: new triviaBlock(
        "Which is not a water brand?",
        "Aqua Park",
        [
            "Dasani",
            "Fiji",
            "BLK",
            "Aqua Park"
        ]
    ),
    q3: new triviaBlock(
        "Which is a Gen 1 Pokemon?",
        "Jynx",
        [
            "Jynx",
            "Torchic",
            "Hoothoot",
            "Chimchar"
        ]
    ),
    q4: new triviaBlock(
        "Which character does not appear in all Smash Bros. games?",
        "Marth",
        [
            "Marth",
            "Mario",
            "Pikachu",
            "Captain Falcon"
        ]
    ),
    q5: new triviaBlock(
        "Pick C?",
        "C",
        [
            "A",
            "B",
            "C",
            "D"
        ]
    ),
    q6: new triviaBlock(
        "Pick B?",
        "B",
        [
            "A",
            "B",
            "C",
            "D"
        ]
    ),

}