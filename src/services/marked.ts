import { marked as Marked } from "marked";

const marked = (markdown: string) => {
  const renderer = new Marked.Renderer();

  renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;
  renderer.link = function (href, title, text) {
    return (
      '<a target="_blank" rel="nofollow" href="' +
      href +
      '" ' +
      (title ? 'title="' + title + "" : "") +
      ">" +
      text +
      "</a>"
    );
  };
  Marked.setOptions({ renderer });

  return Marked(markdown);
};

export default marked;
