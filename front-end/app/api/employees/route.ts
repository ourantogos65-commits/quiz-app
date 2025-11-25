import { query } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await query("SELECT*FROM employees");
    console.log(res.rows, "response");
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error(error,"error");
  }
};
// export const  POST =async(req:Request)=>{
//     const body=req.json()

//     const res=await query(
//         "INSERT INTO employees(name ,age,gender,"
//     )
// }