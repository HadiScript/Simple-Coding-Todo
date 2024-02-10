"use client";

import type { Snippet } from "@prisma/client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { editSnippet } from "@/actions";

interface ThisPageProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: ThisPageProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div className="p-4">
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
      <Editor height="40vh" theme="vs-dark" language="javascript" defaultValue={snippet.code} options={{ minimap: { enabled: false } }} onChange={handleEditorChange} />
    </div>
  );
};

export default SnippetEditForm;
