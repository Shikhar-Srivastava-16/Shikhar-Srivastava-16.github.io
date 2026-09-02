import ReactMarkdown, { type Components } from "react-markdown";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { rust } from "@codemirror/lang-rust";
import { json } from "@codemirror/lang-json";
import { css as cssLang } from "@codemirror/lang-css";
import { markdown as markdownLang } from "@codemirror/lang-markdown";
import { html as htmlLang } from "@codemirror/lang-html";
import { python as pythonLang } from "@codemirror/lang-python";
import { githubDark } from "@uiw/codemirror-theme-github";
import remarkGfm from "remark-gfm";

// Maps the language string react-markdown extracts from ```lang fences
// to a CodeMirror language extension.
const LANGUAGE_EXTENSIONS: Record<
  string,
  ReturnType<typeof javascript>
> = {
  js: javascript(),
  jsx: javascript({ jsx: true }),
  javascript: javascript(),

  ts: javascript({ typescript: true }),
  tsx: javascript({ jsx: true, typescript: true }),
  typescript: javascript({ typescript: true }),

  json: json(),
  css: cssLang(),
  html: htmlLang(),

  markdown: markdownLang(),
  md: markdownLang(),

  python: pythonLang(),
  py: pythonLang(),

  // No dedicated shell package is installed, so fall back to JS
  // syntax highlighting.
  bash: javascript(),
  sh: javascript(),

  rust: rust(),
};

/**
 * Renders a fenced ```lang code block using a read-only CodeMirror
 * editor, or a plain inline `code` span when there's no fence.
 *
 * react-markdown v9+ no longer passes an `inline` prop to the `code`
 * renderer. We therefore detect fenced blocks by checking for the
 * `language-xxx` className.
 */
function ArticleCode({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const match = /language-(\w+)/.exec(className ?? "");
  const codeText = String(children).replace(/\n$/, "");

  if (!match) {
    // No language className -> inline code span, e.g. `useState`
    return (
      <code
        className="rounded-sm bg-gray-200 px-1 py-0.5 font-normal"
        {...props}
      >
        {children}
      </code>
    );
  }

  const lang = match[1].toLowerCase();
  const extension = LANGUAGE_EXTENSIONS[lang];

  return (
    <div
      className="mb-5 overflow-hidden rounded-[5px]"
      style={{ backgroundColor: "#08090a" }}
    >
      <CodeMirror
        value={codeText}
        theme={githubDark}
        editable={false}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: false,
          highlightActiveLineGutter: true,
        }}
        extensions={[
          ...(extension ? [extension] : []),
          EditorView.lineWrapping,
        ]}
        style={{ fontSize: "0.9rem" }}
      />
    </div>
  );
}

function ArticleImage({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  // react-markdown's img props allow src to be undefined,
  // so handle that case instead of requiring src to be a string.
  if (!src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt ?? ""}
      className="mb-6 w-full rounded-md"
      {...props}
    />
  );
}

interface MarkdownRendererProps {
  markdownText: string;
}

const components: Components = {
  img: ArticleImage,
  code: ArticleCode,
};

export const MarkdownRenderer = ({
  markdownText,
}: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {markdownText}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;