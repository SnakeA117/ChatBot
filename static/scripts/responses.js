function getBotResponse(input) {
    input = input.toLowerCase();

         // Simple responses
    if (input.includes("hello")) {
        return "Hello there!";
    } else if (input.includes("bye")) {
        return "Talk to you later!";
    } else if (input.includes("diplomacy")) {
        return `<a href="https://en.wikipedia.org/wiki/Diplomacy" target="blank">Click here to know more about diplomacy</a>`
    } else if (input.includes("tp") || ("teleperformance")) {
        return `Teleperformance SE ( TP) is an omnichannel company headquartered in France. The company provides customer acquisition management, customer care, technical support, debt collection and more`
    } else if (input.includes("cs")) {
        return `You mean customer service? Try using the keywords "customer service"`
    } else if (input.includes("customer service")) {
        return `You can check one of our section to know more about customer service!`
    } else if (input.includes("thank")) {
        return `Glad I helped you!`
    }
    else {
        return "Try asking something else!";
    }
}