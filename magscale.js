var page = new tabris.Page({
  title: 'Mag-Scale',
  topLevel: true
});

var textView = new tabris.TextView({
  font: '24px',
  layoutData: {centerX: 0, top: 0}
}).appendTo(page);

textView.set('text', 'Totally Rock!');

page.open();
