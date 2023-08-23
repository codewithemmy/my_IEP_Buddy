const { OpenAI } = require("openai")

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
})

const generateImage = async (prompt, size) => {
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024"

  try {
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: imageSize,
    })

    const imageUrl = response.data[0].url

    return imageUrl
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
    res
      .status(400)
      .json({ success: false, error: `The image could not be generated` })
  }
}

module.exports = { generateImage }
