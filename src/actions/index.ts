'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  // console.log(id, code)


  await db.snippet.update({
    where: { id },
    data: { code }
  })

  redirect(`/snippets/${id}`)
}



export const deleteSnippet = async (id: number) => {
  // console.log(id, code)


  await db.snippet.delete({
    where: { id }
  })

  redirect(`/`)
}



export const createSnippet = async (formState: { message: string }, formData: FormData) => {


  try {

    // Check the user's inputs and make sure they're valid
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer'
      }
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be longer'
      }
    }

    // Create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    // console.log(snippet)

    // throw new Error('Failed to save database.')
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message
      }
    } else {
      return {
        message: 'Something went wrong'
      }
    }
  }

  // Redirect the user back to the root route
  redirect('/');
}