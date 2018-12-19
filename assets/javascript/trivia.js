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

}