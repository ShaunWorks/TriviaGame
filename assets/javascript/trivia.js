function triviaBlock(title, answer, options) {
    this.title = title;
    this.answer = answer;
    this.options = options;
}

let blocks = {
    q1: new triviaBlock(
        "Who is best girl?",
        "Sherelle Thomas",
        [
            "Some other bitch",
            "Sherelle Thomas",
            "A low tier waifu",
            "Your garbage gf"
        ]
    ),
    q2: new triviaBlock(
        "Who is a gen 1 starter",
        "Bulbasaur",
        [
            "Torchic",
            "Abra",
            "Pikachu",
            "Bulbasaur"
        ]
    ),

}