// This is your first fully working Tabris.js app. Feel free to alter as you please.
// Changes are saved automatically and are immediately available on your device.

// Create a top-level page that contains our UI
var page = new tabris.Page({
  title: "Hello, World!",
  topLevel: true
});

// Create a push button and add it to the page
var button = new tabris.Button({
  centerX: 0, top: 100,
  text: "Native Widgets"
}).appendTo(page);

// Create a text view and add it too
var textView = new tabris.TextView({
  centerX: 0, top: [button, 50],
  font: "24px"
}).appendTo(page);

// Change the text view's text when the button is pressed
button.on("select", function() {
  textView.set("text", "Totally Rock!");
});

page.open();
