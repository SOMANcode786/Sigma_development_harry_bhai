const express = require("express");
const app = express();

// view engine set karna
app.set("view engine", "ejs");

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Dummy data (buses)
let buses = [
  { id: 1, name: "GreenLine", route: "Karachi → Lahore", seats: 3 },
  { id: 2, name: "SkyBus", route: "Karachi → Islamabad", seats: 2 },
];

let bookings = []; // yahan hamari bookings temporarily store hongi

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// Show all buses
app.get("/buses", (req, res) => {
  res.render("buses", { buses });
});

// Book a seat
app.post("/book/:id", (req, res) => {
  const busId = parseInt(req.params.id);
  const bus = buses.find((b) => b.id === busId);

  if (bus && bus.seats > 0) {
    bus.seats -= 1; // ek seat kam kar do
    const booking = { busName: bus.name, route: bus.route };
    bookings.push(booking);
    res.render("confirm", { booking });
  } else {
    res.send("No seats available for this bus!");
  }
});

// Server run karo
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
