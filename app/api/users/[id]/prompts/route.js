import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase()

    const userId = params.id
    const prompts = await Prompt.find({
      creator: userId
    }).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
} 