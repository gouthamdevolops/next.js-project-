import postgres from 'postgres';
import type { NextRequest } from 'next/server'
 


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
/* to run the SQL query */
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}
/* To create the custom route handler for the given route */
export async function GET() {
  const invoices = await listInvoices();

  return Response.json(invoices);
}
