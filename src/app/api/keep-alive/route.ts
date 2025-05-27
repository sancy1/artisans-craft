

// // app/api/keep-alive/route.ts

// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic';

// export async function GET() {
//   try {
//     const { rows } = await sql`SELECT 1`;
//     console.log('Ping result:', rows[0]); // Optional logging
//     return NextResponse.json(
//       { success: true, message: "Neon DB pinged successfully", data: rows[0] },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: "Failed to ping Neon DB", error: error instanceof Error ? error.message : String(error) },
//       { status: 500 }
//     );
//   }
// }


// // http://localhost:3000/api/keep-alive
