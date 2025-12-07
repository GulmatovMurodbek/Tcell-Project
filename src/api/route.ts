export async function GET() {
    try {
      const response = await fetch("http://157.180.29.248:9005/feedback/export/", {
        cache: "no-store",
      })
  
      if (!response.ok) {
        throw new Error("Failed to fetch feedback data")
      }
  
      const data = await response.json()
      return Response.json(data)
    } catch (error) {
      console.error("[v0] Error fetching feedback data:", error)
      return Response.json({ error: "Failed to fetch data" }, { status: 500 })
    }
  }
  