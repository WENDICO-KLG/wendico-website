// Scroll-linked parallax is skipped on phones and touch devices: it costs frames
// during momentum scrolling and makes the page feel busy on small screens.
export function prefersCalmMotion() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 760px), (pointer: coarse)").matches
  );
}
