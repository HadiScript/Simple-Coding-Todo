import { db } from "@/db";
import SnippetNotFound from "../not-found";
import SnippetEditForm from "@/components/SnippetEditForm";

interface ThisPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async (props: ThisPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return SnippetNotFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />

      {/* <SnippetEditForm snippet={snippet} /> */}
    </div>
  );
};

export default SnippetEditPage;
