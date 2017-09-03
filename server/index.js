const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/quotes", function(req, res) {
  res.send({
    data: [
      {
        id: 1,
        quote: "I want to abandon all my insecurities",
        author: "Dara Olayebi",
        location: "Ibadan, Nigeria"
      },
      {
        id: 2,
        quote: "I want to come to terms with who I am",
        author: "Ezra Akinlade",
        location: "Lagos, Nigeria"
      },
      {
        id: 3,
        quote: "I want to stop being afraid",
        author: "Joke Oyindamola",
        location: "Abeokuta, Nigeria"
      },
      {
        id: 4,
        quote: "I want to feel comfortable in my skin",
        author: "Stephanie Mba",
        location: "Lagos, Nigeria"
      },
      {
        id: 5,
        quote: "I want to sleep with a harp player",
        author: "Efe Esosa",
        location: "Lagos, Nigeria"
      },
      {
        id: 6,
        quote: "I want to love recklessly again",
        author: "Oluwafemi Mayowa",
        location: "Akure, Nigeria"
      },
      {
        id: 7,
        quote: "I want to be loved unconditionally",
        author: "Kolapo Oluwaseun",
        location: "Lagos, Nigeria"
      },
      {
        id: 8,
        quote: "I want to ride a motorcycle across West Africa",
        author: "Bimbo Adewale",
        location: "Lagos, Nigeria"
      },
      {
        id: 9,
        quote: "I want to teach kids to live love and be free",
        author: "Tosin Ugochukwu",
        location: "Owerri, Nigeria"
      },
      {
        id: 10,
        quote: "I want to bring peace of mind to my mom",
        author: "Musa Kabir",
        location: "Ilorin, Nigeria"
      },
      {
        id: 11,
        quote: "I want to speak with my children one last time",
        author: "Nwaugo Tobechi",
        location: "Jos, Nigeria"
      },
      {
        id: 12,
        quote: "I want to take care of my parents",
        author: "Ayoola Michaels",
        location: "Abeokuta, Nigeria"
      },
      {
        id: 13,
        quote: "I want to raise good kids",
        author: "Tunde Lawson",
        location: "Benin, Nigeria"
      },
      {
        id: 14,
        quote: "I want to enjoy life",
        author: "Bobby Agogo",
        location: "Asaba, Nigeria"
      },
      {
        id: 15,
        quote: "I want to be accepted by my family",
        author: "Chuka Amadi",
        location: "Lagos, Nigeria"
      },
      {
        id: 16,
        quote: "I want to make a difference",
        author: "Teleayo Olayebi",
        location: "Lagos, Nigeria"
      },
      {
        id: 17,
        quote: "I want to become a legend",
        author: "Juwon Glover",
        location: "Abuja, Nigeria"
      },
      {
        id: 18,
        quote: "I want to take care of my parents",
        author: "Abiola Olayebi",
        location: "Kaduna, Nigeria"
      },
      {
        id: 19,
        quote: "I want to see where my grandma grew up",
        author: "Pamilekunayo Ayomide",
        location: "Jos, Nigeria"
      },
      {
        id: 20,
        quote: "I want to find God",
        author: "Asabe Hassan",
        location: "Lagos, Nigeria"
      }
    ],

    meta: {
      total: 20,
      perPage: 20,
      skipped: 0,
      page: 1
    }
  });
});

app.listen(8000, function() {
  console.log("Example app listening on port 8000!");
});
