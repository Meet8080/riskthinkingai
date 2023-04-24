import { NextResponse } from "next/server.js";
import { location } from "../../../../data/location.js";
// export async function GET(req: any,res:any) {
// //   return new Response("Hello, Next.js!");
// res.status(200).send(location);
// }
export async function GET(request: Request) {
  return NextResponse.json({ location });
}
