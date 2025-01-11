import { EditorContent, useEditor } from "@tiptap/react";
import { cx } from "class-variance-authority";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Placeholder from "@tiptap/extension-placeholder";

export default function Tiptap({
  onChange,
  description,
  placeholder,
}: {
  onChange: (value: string) => void;
  description: string;
  placeholder?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        dropcursor: { color: "#DBEAFE", width: 4 },
        gapcursor: false,
      }),
      Placeholder.configure({ placeholder }),
      Heading.configure({ levels: [2], HTMLAttributes: { class: cx("text-lg font-semibold") } }),
      BulletList.configure({ HTMLAttributes: { class: cx("list-disc list-outside leading-3 -mt-2") } }),
      OrderedList.configure({ HTMLAttributes: { class: cx("list-decimal list-outside leading-3 -mt-2") } }),
      ListItem.configure({ HTMLAttributes: { class: cx("leading-normal -mb-2") } }),
    ],
    editorProps: {
      attributes: {
        class: cx(
          "prose prose-lg dark:prose-invert prose-headings:font-title font-default",
          "border rounded-md shadow-sm border-input bg-background min-h-[150px] w-full max-w-full px-1 py-2",
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col space-y-2 min-h-[200px] w-full max-w-screen">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
