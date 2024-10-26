import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

//ScrollTracker Animation:
var scrollTracker = document.getElementById('scroll-tracker');

var scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: 'inline',
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)']
  },
  {
    timeline: scrollTrackingTimeline,
  }
)

